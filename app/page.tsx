import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero/Hero';
import { HowIWorkSection } from '../components/HowIWorkSection';
import { RequestServiceSection } from '../components/RequestServiceSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { SkillsSection } from '../components/SkillsSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { ContactDialogProvider } from '../components/ContactDialogProvider';

export default function HomePage() {
  return (
    <main className="relative bg-black text-neutral-100">
      <ContactDialogProvider>
        <Navigation />
        <Hero />
        <HowIWorkSection />
        <RequestServiceSection />
        <CaseStudiesSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </ContactDialogProvider>
    </main>
  );
}
