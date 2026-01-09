import { Shield, Leaf, Users } from 'lucide-react';

const visionItems = [
  {
    icon: Shield,
    title: 'Absolute Security',
    description: 'Protection against both classical and quantum attacks using NIST-standardized post-quantum cryptography.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'A Proof-of-Stake consensus with minimal carbon footprint, ensuring environmental responsibility.',
  },
  {
    icon: Users,
    title: 'Accessibility',
    description: 'Simple tools for mass adoption including Instant Wallet Generator and intuitive interfaces.',
  },
];

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Vision</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Building a <span className="text-gradient">Perdurable</span> Financial Infrastructure
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Modern cryptography relies on mathematical problems that quantum computers will soon solve.
            Quantix was created to address this existential threat.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {visionItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-6 md:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-primary transition-all duration-500">
                  <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
