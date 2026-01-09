import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navLinks = [
  { label: 'Vision', href: '#vision', external: false },
  { label: 'Technology', href: '#technology', external: false },
  { label: 'Tokenomics', href: '#tokenomics', external: false },
  { label: 'Roadmap', href: '#roadmap', external: false },
  { label: 'Tutorials', href: '/tutorials', external: false },
  { label: 'FAQ', href: '#faq', external: false },
  { label: 'Explorer', href: 'https://explorer.quantumresistantcoin.com', external: true },
  { label: 'Faucet', href: 'https://faucet.quantumresistantcoin.com', external: true },
  { label: 'GitHub', href: 'https://github.com/spacemen100/quantixchain', external: true },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    } else if (link.href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + link.href);
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(link.href);
    }
    setIsMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'py-3 bg-background/40 backdrop-blur-xl border-b border-white/5'
        : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group relative">
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Logo className="relative z-10 transition-transform duration-500 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  onClick={() => handleClick(link)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {link.label}
                </button>
              )
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
        <div className={`md:hidden fixed inset-0 bg-background/98 backdrop-blur-2xl transition-all duration-300 transform ${isMobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          }`}>
          <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-6">
            <button
              className="absolute top-6 right-6 text-foreground"
              onClick={() => setIsMobileOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleClick(link)}
                    className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                )
              ))}
              <a href="https://wallet.quantumresistantcoin.com" target="_blank" rel="noopener noreferrer" className="mt-4 w-full max-w-[280px]">
                <Button variant="hero" size="lg" className="w-full text-lg py-6">
                  Open Wallet
                </Button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;

