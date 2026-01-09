import { Coins, Vote, ShieldCheck, Wallet } from 'lucide-react';

const tokenFeatures = [
  {
    icon: Coins,
    title: 'Payments',
    description: 'Use QTX for seamless transactions across the network',
  },
  {
    icon: ShieldCheck,
    title: 'Staking',
    description: 'Secure the network and earn rewards by staking QTX',
  },
  {
    icon: Vote,
    title: 'Governance',
    description: 'Participate in protocol decisions with your QTX holdings',
  },
];

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Side - Token Info */}
          <div className="text-center lg:text-left relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Ecosystem Anchor</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight">
              The <span className="text-gradient">QTX</span> Token
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              QTX powers the circular economy of the Quantix network, driving security, governance, and seamless cross-border value transfer.
            </p>

            {/* Token Symbol Display */}
            <div className="inline-flex items-center gap-6 p-6 md:p-8 rounded-[2rem] glass-card mb-12 hover:border-primary/40 transition-colors group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-primary flex items-center justify-center glow-primary shrink-0 group-hover:scale-110 transition-transform duration-500">
                <span className="font-display text-3xl md:text-4xl font-bold text-white">Q</span>
              </div>
              <div className="text-left">
                <p className="text-xs text-primary font-bold uppercase tracking-[0.2em] mb-1">Network Ticker</p>
                <p className="font-display text-4xl md:text-5xl font-bold text-white tracking-tighter">QTX</p>
              </div>
            </div>

            {/* Wallet Info */}
            <div className="p-8 rounded-[2rem] border border-primary/20 bg-primary/5 backdrop-blur-md text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Wallet className="w-24 h-24 text-primary" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-bold text-white text-lg tracking-tight uppercase tracking-wider">Quantix Key Forge</h4>
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                Client-side key generation engineered with privacy by design.
                Large-format PQC keys are securely encapsulated in local vault files.
              </p>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="space-y-6">
            {tokenFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 rounded-[2rem] glass-card hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:glow-primary transition-all duration-500 group-hover:scale-110">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-white tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
