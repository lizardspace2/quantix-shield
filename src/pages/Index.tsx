import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import TechnologySection from '@/components/TechnologySection';
import TokenomicsSection from '@/components/TokenomicsSection';
import RoadmapSection from '@/components/RoadmapSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <VisionSection />
      <TechnologySection />
      <TokenomicsSection />
      <RoadmapSection />
      <Footer />
    </div>
  );
};

export default Index;
