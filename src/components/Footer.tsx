import { Github, Twitter } from 'lucide-react';
import { Logo } from './Logo';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Logo size="sm" />

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm text-muted-foreground">
            <a href="/whitepaper" className="hover:text-primary transition-colors">Whitepaper</a>
            <a href="/#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="https://explorer.quantumresistantcoin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Explorer</a>
            <a href="https://wallet.quantumresistantcoin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Wallet</a>
            <a href="https://faucet.quantumresistantcoin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Faucet</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
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
