import { Button } from './ui/button';
import { Shield, Zap, Leaf } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] animate-pulse-slow opacity-60" />
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] animate-pulse-slow opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-background border border-primary/5 rounded-full opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-10 animate-slide-up glass-card">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Post-Quantum Standard</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold mb-8 animate-slide-up leading-[1.05] tracking-tight text-white animate-float" style={{ animationDelay: '0.1s' }}>
            Future of
            <br />
            <span className="text-gradient">Quantum-Safe</span>
            <br />
            Finance
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up px-2 leading-relaxed font-light" style={{ animationDelay: '0.2s' }}>
            Quantix (QTX) is a next-generation blockchain engineered for the era of quantum supremacy.
            Secure, scalable, and environmentally sustainable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a href="/whitepaper" className="w-full sm:w-auto">
              <Button variant="hero" size="xl" className="w-full min-w-[200px] text-lg font-bold glow-primary">
                Read Whitepaper
              </Button>
            </a>
            <a href="https://wallet.quantumresistantcoin.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="heroOutline" size="xl" className="w-full min-w-[200px] text-lg font-bold border-white/20 hover:border-white/40">
                Open Wallet
              </Button>
            </a>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground/80 font-medium">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span>NIST-Approved</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground/80 font-medium">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span>Instant Finality</span>
            </div>
            <div className="flex items-center gap-3 text-sm sm:text-base text-muted-foreground/80 font-medium">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              <span>Eco-Proof of Stake</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Decorator */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
