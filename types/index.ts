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
  icon: LucideIcon;
  iconColor?: string;
  size?: number;
  imageUrl?: string | StaticImageData;
  children?: React.ReactNode;
};
