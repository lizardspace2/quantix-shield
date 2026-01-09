import { Lock, Cpu, Key, Zap } from 'lucide-react';

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 relative bg-gradient-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Technology</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Quantum-Resistant <span className="text-gradient">Architecture</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Post-Quantum Cryptography */}
          <div className="p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight">Post-Quantum Cryptography</h3>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed text-sm md:text-base">
              Quantix uses <strong className="text-foreground">Crystals-Dilithium</strong>, a digital signature algorithm
              selected by NIST for post-quantum cryptography standardization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Key className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Public Key</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-2xl font-bold text-foreground">1,312</span>
                  <span className="text-xs text-muted-foreground">bytes</span>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Private Key</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-2xl font-bold text-foreground">2,528</span>
                  <span className="text-xs text-muted-foreground">bytes</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-2 text-primary">
                <Cpu className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm md:text-base">Dilithium2 Security Level</span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                Equivalent to ~128 bits of quantum security
              </p>
            </div>
          </div>

          {/* Proof of Stake */}
          <div className="p-6 md:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold">Proof-of-Stake Consensus</h3>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed text-sm md:text-base">
              Unlike energy-intensive Proof-of-Work, our PoS model allows QTX holders to secure
              the network by staking their tokens.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-accent font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Validation</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Validators are chosen to create new blocks based on their stake
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-accent font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Fast Finality</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Quick transaction confirmation for seamless user experience
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-accent font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm md:text-base">Economic Rewards</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Incentives via controlled inflation and transaction fees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
