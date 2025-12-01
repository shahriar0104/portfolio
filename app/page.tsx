import { Navigation } from '../components/Navigation';
import { LaunchPad } from '../components/LaunchPad';
import { AscentSection } from '../components/AscentSection';
import { GlobeSection } from '../components/GlobeSection';
import { CareerTimeline } from '../components/CareerTimeline';
import { SkillsDashboard } from '../components/SkillsDashboard';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { ContactSection } from '../components/ContactSection';

export default function HomePage() {
  return (
    <main className="relative bg-space-dark">
      {/* Navigation */}
      <Navigation />

      {/* Stage 1: Launch Pad (Hero) */}
      <LaunchPad />

      {/* Stage 2: Ascent & Orbit (Transition) */}
      <AscentSection />

      {/* Stage 3: Globe & Dhaka Impact */}
      <GlobeSection />

      {/* Stage 4: Career Journey */}
      <CareerTimeline />

      {/* Stage 5: Skills Arsenal */}
      <SkillsDashboard />

      {/* Stage 6: Projects as Missions */}
      <ProjectsGrid />

      {/* Stage 7: Contact/Docking */}
      <ContactSection />
    </main>
  );
}
