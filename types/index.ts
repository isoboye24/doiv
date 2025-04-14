import { LucideIcon } from 'lucide-react';
import { StaticImageData } from 'next/image';

export type BackgroundImageVideoProps = {
  backgroundUrl: string;
  isVideo?: boolean;
  children: React.ReactNode;
};

export type CardProps = {
  title: string;
  description1?: string;
  description2?: string;
  icon?: LucideIcon;
  iconColor?: string;
  size?: number;
  imageUrl?: string | StaticImageData;
  children?: React.ReactNode;
  type?: string;
  borderSize?: number;
  borderColor?: string;
};

export type Project = {
  id?: number;
  name: string;
  previewUrl?: string;
  image: string | StaticImageData;
  type: string;
  codeUrl: string;
  description?: string;
  size?: number;
  children?: React.ReactNode;
};

export type CarouselProps = {
  children: React.ReactNode;
};
