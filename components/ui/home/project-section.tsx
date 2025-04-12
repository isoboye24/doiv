import React from 'react';
import SectionTitle from '../shared/section-title';
import PolygonPictureFrame from '../project/polygon-picture-frame';
import ProjectPicture from '@/public/images/projects.jpg';

const ProjectSection = () => {
  return (
    <div className="wrapper">
      <SectionTitle title="My projects" />
      <div className="grid grid-cols-2 pt-20">
        <div className="hidden lg:block">
          <PolygonPictureFrame
            src={ProjectPicture}
            sides={8}
            size={400}
            borderWidth={20}
            borderColor="#ffffff"
          />
        </div>
        <div className="hidden md:block lg:hidden">
          <PolygonPictureFrame
            src={ProjectPicture}
            sides={8}
            size={250}
            borderWidth={15}
            borderColor="#ffffff"
          />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ProjectSection;
