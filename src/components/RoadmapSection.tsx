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
        <div className="max-w-4xl mx-auto relative">
          {/* Main Connector Line */}
          <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          {phases.map((phase, index) => (
            <div key={phase.phase} className="relative mb-16 last:mb-0 group/phase">
              <div className="flex items-start gap-6 sm:gap-10">
                {/* Icon Container */}
                <div
                  className={`relative z-10 w-12 h-12 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover/phase:scale-110 ${phase.status === 'current'
                    ? 'bg-gradient-primary glow-primary'
                    : 'glass-card'
                    }`}
                >
                  <phase.icon
                    className={`w-6 h-6 sm:w-10 sm:h-10 ${phase.status === 'current' ? 'text-white' : 'text-muted-foreground'
                      }`}
                  />
                  {phase.status === 'current' && (
                    <div className="absolute inset-0 rounded-2xl sm:rounded-3xl animate-ping bg-primary/20 -z-10" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 pb-4">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                    <span className="text-primary font-bold text-xs sm:text-sm tracking-[0.3em] uppercase">{phase.phase}</span>
                    {phase.status === 'current' && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-primary/20">
                        Active Deployment
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl sm:text-4xl font-bold mb-6 text-white tracking-tight">
                    {phase.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {phase.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center gap-4 p-4 rounded-xl glass-card transition-colors hover:bg-white/5"
                      >
                        <CheckCircle2
                          className={`w-5 h-5 shrink-0 ${item.completed ? 'text-primary' : 'text-white/10'
                            }`}
                        />
                        <span className={`${item.completed ? 'text-white' : 'text-muted-foreground'} text-sm font-medium`}>
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
