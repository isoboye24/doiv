import React from 'react';
import Image from 'next/image';
import { CardProps } from '@/types';

const ProjectCard: React.FC<CardProps> = ({
  title,
  description1,
  imageUrl,
  children,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 p-4">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description1}</p>
      {children}
    </div>
  );
};

export default ProjectCard;
