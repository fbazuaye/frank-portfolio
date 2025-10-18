import { Mail, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-subtle border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="mailto:livegigltd@gmail.com"
              className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/frank-bazuaye-bb4a7687/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </a>
            <a
              href="https://livegig.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
              aria-label="Website"
            >
              <ExternalLink className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Frank Bazuaye. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Empowering innovation through AI and technology
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Designed by Frank Bazuaye : Powered by LiveGig Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
