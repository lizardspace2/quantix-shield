import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { label: 'Vision', href: '#vision', external: false },
  { label: 'Technology', href: '#technology', external: false },
  { label: 'Tokenomics', href: '#tokenomics', external: false },
  { label: 'Roadmap', href: '#roadmap', external: false },
  { label: 'Explorer', href: 'https://explorer.quantumresistantcoin.com', external: true },
  { label: 'Faucet', href: 'https://faucet.quantumresistantcoin.com', external: true },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (link: { label: string; href: string; external?: boolean }) => {
    if (link.external) {
      window.open(link.href, '_blank', 'noopener,noreferrer');
    } else {
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <Logo />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleClick(link)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
            <a href="https://wallet.quantumresistantcoin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm">
                Open Wallet
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleClick(link)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <a href="https://wallet.quantumresistantcoin.com" target="_blank" rel="noopener noreferrer" className="mt-4">
                <Button variant="hero" size="lg" className="w-full">
                  Open Wallet
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
