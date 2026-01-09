import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import TechnologySection from '@/components/TechnologySection';
import TokenomicsSection from '@/components/TokenomicsSection';
import RoadmapSection from '@/components/RoadmapSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-transparent relative">
      <div className="noise-overlay" />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <VisionSection />
        <TechnologySection />
        <TokenomicsSection />
        <RoadmapSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};


export default Index;

