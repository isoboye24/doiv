import React from 'react';
import AllProjects from './all-projects';

const ProjectPageCarousel = () => {
  return (
    <div className="">
      <AllProjects tab={['All', 'Web', 'Desktop']} types="All" />
    </div>
  );
};

export default ProjectPageCarousel;
