import React from 'react';
import PageTopSection from '@/components/ui/page-top-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

const Projects = () => {
  return (
    <div>
      <PageTopSection pageName="Projects" bgColor="teal-500" />
    </div>
  );
};

export default Projects;
