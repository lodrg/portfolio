import SkillsSection from '@/components/sections/SkillsSection';

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <SkillsSection />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">My Learning Journey</h2>
          
          <div className="prose max-w-none">
            <p>
              My technical journey has been driven by curiosity and a desire to solve complex problems. I believe in continuous learning and staying updated with the latest technologies and industry trends.
            </p>
            
            <h3>Design Philosophy</h3>
            <p>
              I approach design with a user-centered mindset, focusing on creating intuitive and accessible interfaces. I believe that good design goes beyond aesthetics—it should enhance usability and solve real problems.
            </p>
            
            <h3>Development Approach</h3>
            <p>
              In frontend development, I prioritize performance, accessibility, and responsive design. For backend work, I focus on building scalable, secure, and maintainable systems that can evolve with changing requirements.
            </p>
            
            <h3>Data & Machine Learning</h3>
            <p>
              My exploration of machine learning has taught me to appreciate the power of data-driven decision making. I enjoy applying ML algorithms to enhance user experiences and automate complex tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}