import React from 'react';
import TopModal from './top-modal';

const HomeTopSection = () => {
  return (
    <div className="flex relative bg-gradient-to-b w-full h-[600px] md:h-[700px] lg:h-[100vh] from-yellow-600 md:from-yellow-600 md:to-yellow-500 items-center justify-center">
      <TopModal />
    </div>
  );
};

export default HomeTopSection;
