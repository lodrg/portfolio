import Hero from '@/components/sections/Hero';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}