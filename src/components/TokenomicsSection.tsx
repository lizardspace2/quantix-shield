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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Token Info */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Tokenomics</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              The <span className="text-gradient">QTX</span> Token
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              QTX is the native token of the Quantix network, powering transactions, 
              network security through staking, and decentralized governance.
            </p>

            {/* Token Symbol Display */}
            <div className="inline-flex items-center gap-4 p-6 rounded-2xl border border-border bg-gradient-card mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center glow-primary">
                <span className="font-display text-2xl font-bold text-primary-foreground">Q</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Token Symbol</p>
                <p className="font-display text-3xl font-bold text-foreground">QTX</p>
              </div>
            </div>

            {/* Wallet Info */}
            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-3 mb-3">
                <Wallet className="w-5 h-5 text-primary" />
                <h4 className="font-display font-semibold text-foreground">Quantix Key Forge</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Client-side key generation ensures your private keys never leave your device. 
                Large PQC keys are managed via secure JSON files for easy backup.
              </p>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="space-y-6">
            {tokenFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group flex items-start gap-5 p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:glow-primary transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
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
