
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="#home" className="font-poppins text-xl font-semibold text-foreground">
              <span className="font-bold">projects</span>by<span className="text-accent">darlene</span>
            </a>
            <p className="mt-4 text-foreground/70">
              Remote Technical Project Manager dedicated to building better systems with people, process, and purpose.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-foreground/70 hover:text-primary">Home</a></li>
              <li><a href="#case-studies" className="text-foreground/70 hover:text-primary">Case Studies</a></li>
              <li><a href="#process" className="text-foreground/70 hover:text-primary">Process</a></li>
              <li><a href="#about" className="text-foreground/70 hover:text-primary">About</a></li>
              <li><a href="#testimonials" className="text-foreground/70 hover:text-primary">Testimonials</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-foreground/70 hover:text-primary">LinkedIn</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary">GitHub</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary">Twitter</a></li>
              <li><a href="mailto:letsbuild@projectsbydarlene.com" className="text-foreground/70 hover:text-primary">letsbuild@projectsbydarlene.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} Darlene. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60 flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="h-3 w-3 text-red-500" /> for great project management
          </p>
        </div>
      </div>
    </footer>
  );
}

