import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ResumeSection from '@/components/ResumeSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ResumeSection />
      <BlogSection />
      <ContactSection />
      <ScrollToTop />
    </div>
  );
};

export default Index;
