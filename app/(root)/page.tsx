import HomeTopSection from '@/components/ui/home/home-top-section';

const HomePage = () => {
  return (
    <div className="">
      <section className="min-h-[80dvh] lg:min-h-screen overflow-hidden">
        <HomeTopSection />
      </section>
      <section className="bg-amber-600">About section</section>
    </div>
  );
};

export default HomePage;
