'use client';

import SectionTitle from '../shared/section-title';
import PolygonPictureFrame from '../project/polygon-picture-frame';
import ProjectPicture from '@/public/images/projects.jpg';
import { useDifferentNumberAtSetTime } from '../../../hooks/get-different-number-every-set-time';

const sides = [5, 6, 7, 8, 9, 10];
const timeIntervals = 3 * 60 * 1000;

const ProjectSection = () => {
  const currentSides = useDifferentNumberAtSetTime(timeIntervals, sides);

  return (
    <div className="wrapper">
      <SectionTitle title="My projects" />
      <div className="grid grid-cols-2 pt-10">
        <div className="hidden xl:block ">
          <PolygonPictureFrame
            src={ProjectPicture}
            sides={currentSides}
            size={600}
            borderWidth={20}
            borderColor="#ffffff"
          />
        </div>
        <div className="hidden lg:block xl:hidden">
          <PolygonPictureFrame
            src={ProjectPicture}
            sides={currentSides}
            size={500}
            borderWidth={20}
            borderColor="#ffffff"
          />
        </div>
        <div className="hidden md:block lg:hidden">
          <PolygonPictureFrame
            src={ProjectPicture}
            sides={currentSides}
            size={350}
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
