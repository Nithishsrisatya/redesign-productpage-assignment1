import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import ClaimLandingSection from './components/ClaimLandingSection';
import HomeFAQ from './components/HomeFAQ';
import FeaturesSection from './components/FeaturesSection';
import SocialProofSection from './components/SocialProofSection';
// Ensure these components exist or comment them out if not implemented yet
// import ContactForm from './components/ContactForm';
// import InfoSection from './components/InfoSection';
// import FeaturesGrid from './components/FeaturesGrid';

const Home: React.FC = () => {
  // Create refs for each section
  const contactRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Function to scroll to a section
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const hcf = document.querySelector('.hcf-profile');
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollTop > lastScrollTop) {
        if (hcf) {
          hcf.classList.add('hcf-profile-fixed');
        }
      } else if (scrollTop < lastScrollTop) {
        if (hcf) {
          hcf.classList.remove('hcf-profile-fixed');
        }
      }

      lastScrollTop = scrollTop;
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="flex-grow h-full min-h-screen w-full">
        {/* Hero Section */}
        <div className="mb-12 pb-12">
          <HeroSection
            scrollToSection={scrollToSection}
            featuresRef={faqRef}
            contactRef={contactRef}
            aboutRef={aboutRef}
          />
        </div>
  
        {/* Claim Landing Section */}
        <div className="!bg-[#eff6ff] relative mb-12 pt-12">
          <ClaimLandingSection />
        </div>
  
        {/* Features Section */}
        <div className="mb-12 pt-12">
          <FeaturesSection />
        </div>
  
        {/* Social Proof Section */}
        <div className="mb-12 pt-12">
          <SocialProofSection />
        </div>
  
        {/* FAQ Section */}
        <div className="relative bg-white mb-12 pt-12" ref={faqRef}>
          <HomeFAQ />
        </div>
      </div>
    </>
  );
  
};

export default Home;
