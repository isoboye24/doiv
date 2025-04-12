import HomeTopSection from '@/components/ui/home/home-top-section';
import AboutSection from '../../components/ui/home/about-section';
import ProjectSection from '@/components/ui/home/project-section';

const HomePage = () => {
  return (
    <div className="">
      <section className="min-h-[80dvh] lg:min-h-screen overflow-hidden">
        <HomeTopSection />
      </section>
      <section className="py-20" id="about">
        <AboutSection />
      </section>
      <section className="py-20 bg-teal-600" id="projects">
        <ProjectSection />
      </section>
    </div>
  );
};

export default HomePage;
