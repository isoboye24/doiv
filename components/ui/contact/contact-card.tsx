import React from 'react';
import { LucideIcon } from 'lucide-react';

type CardProps = {
  title: string;
  description1?: string;
  description2?: string;
  icon: LucideIcon;
  iconColor?: string;
  size?: number;
};

const ContactCard: React.FC<CardProps> = ({
  title,
  description1,
  description2,
  icon: Icon,
  iconColor = 'text-red-500',
  size = 24,
}) => {
  return (
    <div className="bg-gray-200 rounded-2xl shadow-md p-6 transition-transform hover:scale-105 text-center">
      <div className="flex justify-center mb-4">
        <Icon className={iconColor} size={size} />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-gray-700">{title}</h2>
      {description1 && (
        <p className="text-gray-700 mb-1 text-base md:text-sm overflow-auto  custom-scrollbar">
          {description1}
        </p>
      )}
      {description2 && <p className="text-gray-700">{description2}</p>}
    </div>
  );
};

export default ContactCard;
