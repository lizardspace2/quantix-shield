import { Lock, Cpu, Key, Zap, Shield } from 'lucide-react';

const TechnologySection = () => {
  return (
    <section id="technology" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Core Engine</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight">
            Next-Gen <span className="text-gradient">Architecture</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Post-Quantum Cryptography */}
          <div className="p-10 rounded-[2.5rem] glass-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lock className="w-32 h-32 text-primary" />
            </div>

            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 glow-primary">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">Post-Quantum<br />Security</h3>
            </div>

            <p className="text-muted-foreground mb-10 leading-relaxed text-lg font-light">
              Quantix leverages <strong className="text-white font-semibold">Crystals-Dilithium</strong>,
              the NIST gold standard for lattice-based digital signatures.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Key className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Public Key</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-white tracking-tighter">1,312</span>
                  <span className="text-sm font-semibold text-primary">BYTES</span>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Private Key</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-white tracking-tighter">2,528</span>
                  <span className="text-sm font-semibold text-primary">BYTES</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-md">
              <div className="flex items-center gap-3 text-primary mb-2">
                <Cpu className="w-6 h-6 animate-pulse" />
                <span className="font-bold text-base uppercase tracking-wider">Dilithium2 Protocol</span>
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-light">
                Secured at Level 2, providing approximately 128 bits of quantum security.
              </p>
            </div>
          </div>

          {/* Proof of Stake */}
          <div className="p-10 rounded-[2.5rem] glass-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-32 h-32 text-accent" />
            </div>

            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0 glow-accent">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold">Resilient<br />Consensus</h3>
            </div>

            <p className="text-muted-foreground mb-10 leading-relaxed text-lg font-light">
              Our energy-efficient PoS model enables low-latency transactions without the environmental cost of traditional mining.
            </p>

            <div className="space-y-4">
              {[
                { id: 1, title: 'Stake Validation', desc: 'Secure the network by locking QTX tokens.' },
                { id: 2, title: 'Instant Finality', desc: 'Transactions are confirmed in milliseconds.' },
                { id: 3, title: 'Incentive Engine', desc: 'Earn rewards for active participation.' },
              ].map((step) => (
                <div key={step.id} className="flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all group/item">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                    <span className="text-accent font-bold text-sm">{step.id}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 group-hover/item:text-accent transition-colors">{step.title}</h4>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
