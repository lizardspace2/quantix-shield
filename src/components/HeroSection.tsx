import { Button } from './ui/button';
import { Shield, Zap, Leaf } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-slide-up">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Post-Quantum Security</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            The Future of
            <br />
            <span className="text-gradient">Quantum-Safe</span> Finance
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Quantix (QTX) is a next-generation blockchain designed to withstand quantum computing threats,
            leveraging Crystals-Dilithium cryptography and energy-efficient Proof-of-Stake.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a href="/whitepaper">
              <Button variant="hero" size="xl">
                Read Whitepaper
              </Button>
            </a>
            <Button variant="heroOutline" size="xl">
              Launch Wallet
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>NIST-Approved PQC</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span>Fast Finality</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Leaf className="w-5 h-5 text-primary" />
              <span>Low Carbon PoS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
