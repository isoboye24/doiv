import React from 'react';
import Image from 'next/image';
import { Project } from '@/types';

const ProjectCard: React.FC<Project> = ({ name, image, size, children }) => {
  return (
    <a
      href="/projects/single-project"
      className="bg-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 p-4"
    >
      {
        <Image
          src={image}
          alt={name}
          className="w-full object-cover rounded-md mb-4"
          style={{ height: `${size}px` }}
        />
      }
      <h2 className="text-sm md:text-base lg:text-xl lg:font-semibold mb-2 text-gray-950">
        {name}
      </h2>

      {children}
    </a>
  );
};

export default ProjectCard;
