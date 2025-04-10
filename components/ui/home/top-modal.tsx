import React from 'react';
import CircleImageFrame from './circle-image-frame';
import picture from '@/public/images/vincent.jpg';
import TopModalTexts from './top-modal-texts';

const TopModal = () => {
  return (
    <>
      <div className="absolute top-[10vh] md:top-[15vh] bg-gray-50 w-[90vw] sm:h-[80vh] md:h-[70vh] z-11 rounded-4xl md:shadow-2xl">
        <div className="relative grid md:grid-cols-2 sm:grid-cols-1 h-full overflow-hidden">
          {/* Left Block */}
          <div className="mt-10 md:mt-0 flex items-center justify-center z-12">
            <div className="grid">
              <div className="hidden lg:block">
                <CircleImageFrame
                  size={400}
                  imageUrl={picture}
                  color="bg-amber-600"
                />
              </div>
              <div className="md:block lg:hidden">
                <CircleImageFrame
                  size={300}
                  imageUrl={picture}
                  color="bg-amber-600"
                />
              </div>
            </div>
          </div>
          {/* Right Block */}
          <TopModalTexts />
        </div>
      </div>
    </>
  );
};

export default TopModal;
