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
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the waitlist!",
      description: "We'll notify you when BOMUD launches.",
    });
    
    setName("");
    setEmail("");
    setIsSubmitting(false);
  };

  const inputSize = size === "lg" ? "h-14 text-base" : "h-11";
  const buttonSize = size === "lg" ? "lg" : "default";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
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
    </form>
  );
}