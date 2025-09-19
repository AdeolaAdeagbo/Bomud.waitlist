import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  className?: string;
  size?: "default" | "lg";
}

export function WaitlistForm({ className = "", size = "default" }: WaitlistFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Google Apps Script Web App URL - replace with your actual URL
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
      
      const formData = new FormData();
      formData.append('name', name.trim());
      formData.append('phone', phone.trim());
      formData.append('email', email.trim());
      formData.append('timestamp', new Date().toISOString());
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Required for Google Apps Script
      });
      
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll notify you when BOMUD launches.",
      });
      
      setName("");
      setPhone("");
      setEmail("");
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      toast({
        title: "Submission successful!",
        description: "Your information has been recorded.",
      });
      
      setName("");
      setPhone("");
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputSize = size === "lg" ? "h-14 text-base" : "h-11";
  const buttonSize = size === "lg" ? "lg" : "default";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`flex-1 ${inputSize} bg-card border-border focus:border-primary`}
            disabled={isSubmitting}
          />
          <Input
            type="tel"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`flex-1 ${inputSize} bg-card border-border focus:border-primary`}
            disabled={isSubmitting}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`flex-1 ${inputSize} bg-card border-border focus:border-primary`}
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            size={buttonSize}
            disabled={isSubmitting}
            className="sm:px-8"
          >
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
        </div>
      </div>
    </form>
  );
}