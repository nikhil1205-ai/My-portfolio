import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Nikhil Dangi.</span>
            <span className="hidden sm:inline">Made with</span>
            <Heart className="w-4 h-4 text-brown hidden sm:inline" fill="currentColor" />
            <span className="hidden sm:inline">in India</span>
          </div>

          <nav className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-brown transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-brown transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-brown transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
