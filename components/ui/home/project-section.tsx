'use client';

import ProjectCarousel from '../project/project-carousel';
import SectionTitle from '../shared/section-title';

const ProjectSection = () => {
  return (
    <div className="wrapper">
      <SectionTitle title="My projects" />
      <div className="pt-10 overflow-hidden">
        <ProjectCarousel tab={['Web', 'Desktop']} types="Web" />
      </div>
    </div>
  );
};

export default ProjectSection;
