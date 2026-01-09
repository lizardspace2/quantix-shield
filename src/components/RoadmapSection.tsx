import { Rocket, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Genesis',
    status: 'current',
    icon: Rocket,
    items: [
      { text: 'Launch of Quantix Wallet', completed: true },
      { text: 'Deployment of Testnet', completed: true },
      { text: 'Validation of Crystals-Dilithium implementation', completed: true },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Expansion',
    status: 'current',
    icon: Globe,
    items: [
      { text: 'Mainnet Launch', completed: false },
      { text: 'Integration of public validator nodes', completed: false },
      { text: 'Deployment of full block explorer', completed: true },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Ecosystem',
    status: 'future',
    icon: Sparkles,
    items: [
      { text: 'Smart Contracts support', completed: false },
      { text: 'Decentralized governance by QTX holders', completed: false },
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 relative bg-gradient-card overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Roadmap</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our Journey to a <span className="text-gradient">Quantum-Safe</span> Future
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-border" />

            {phases.map((phase, index) => (
              <div key={phase.phase} className="relative mb-10 last:mb-0">
                <div className="flex items-start gap-4 sm:gap-8">
                  {/* Icon */}
                  <div
                    className={`relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 ${phase.status === 'current'
                      ? 'bg-gradient-primary glow-primary'
                      : 'bg-muted border border-border'
                      }`}
                  >
                    <phase.icon
                      className={`w-5 h-5 sm:w-7 sm:h-7 ${phase.status === 'current' ? 'text-primary-foreground' : 'text-muted-foreground'
                        }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <span className="text-primary font-bold text-xs sm:text-sm tracking-widest uppercase">{phase.phase}</span>
                      {phase.status === 'current' && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold uppercase">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-foreground">
                      {phase.title}
                    </h3>
                    <div className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 ${item.completed ? 'text-primary' : 'text-border'
                              }`}
                          />
                          <span className={`${item.completed ? 'text-foreground' : ''} text-sm sm:text-base`}>
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground mt-16 max-w-2xl mx-auto">
          This document is a technical and conceptual presentation of the Quantix project.
          Specifications may evolve with development.
        </p>
      </div>
    </section>
  );
};

export default RoadmapSection;
