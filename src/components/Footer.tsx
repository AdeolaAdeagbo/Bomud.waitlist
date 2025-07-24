import { Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              BOMUD
            </div>
            <p className="text-secondary-foreground/70 max-w-md">
              Building health resilience through smart savings. 
              Empowering communities to stay financially prepared for health emergencies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-start md:justify-end">
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
          <div>
            © 2024 BOMUD. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}