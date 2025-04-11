import HomeTopSection from '@/components/ui/home/home-top-section';
import AboutSection from './about-section';

const HomePage = () => {
  return (
    <div className="">
      <section className="min-h-[80dvh] lg:min-h-screen overflow-hidden">
        <HomeTopSection />
      </section>
      <section className="">
        <AboutSection />
      </section>
    </div>
  );
};

export default HomePage;
