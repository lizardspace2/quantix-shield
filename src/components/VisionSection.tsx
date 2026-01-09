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
    <section id="vision" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Vision</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-4 mb-8 tracking-tight">
            Building <span className="text-gradient">Perdurable</span> Infrastructure
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Modern cryptography relies on mathematical problems that quantum computers will soon solve.
            Quantix addresses this existential threat with military-grade post-quantum security.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative p-8 md:p-10 rounded-[2rem] glass-card hover:border-primary/40 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Animated Inner Border */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:glow-primary transition-all duration-500 group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-primary transition-transform duration-500 group-hover:rotate-12" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-light">
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
