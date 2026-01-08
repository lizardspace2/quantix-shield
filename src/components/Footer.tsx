import { Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-sm">Q</span>
            </div>
            <span className="font-display font-semibold text-foreground">Quantix</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/whitepaper" className="hover:text-primary transition-colors">Whitepaper v1.0</a>
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-primary transition-colors">Key Forge</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2026 Quantix. Building the quantum-safe future of finance.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
