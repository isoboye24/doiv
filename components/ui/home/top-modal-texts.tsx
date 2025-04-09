import React from 'react';
import { Button } from '../button';
import { Download } from 'lucide-react';
import RoundedButtonWithLink from './rounded-button';

const TopModalTexts = () => {
  return (
    <>
      <div className="grid grid-rows-[4fr, 1fr] items-center md:bg-amber-500 justify-center z-12 mt-7 sm:mt-0 rounded-tr-4xl rounded-br-4xl">
        <div className="flex">
          <div className="grid text-center ">
            <div className="font-light custom-text-black sm:text-xs md:text-sm">
              Hello, I am
            </div>
            <div className="font-bold custom-text-black sm:text-lg md:text-2xl">
              Isoboye Vincent Isoboye
            </div>
            <div className="font-light custom-text-black text-base lg:text-2xl mb-5 sm:mb-7">
              Full Stack Developer
            </div>
            <div className="flex gap-2">
              <div className="">
                <Button className="">
                  {' '}
                  <Download size={16} /> Download CV
                </Button>
              </div>
              <div className="">
                <Button>Contact Info</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:hidden">
          <div className="flex gap-2 lg:gap-4 items-center justify-center">
            <RoundedButtonWithLink
              size={80}
              bgColor="bg-teal-500"
              textColor="text-gray-50"
              hoverColor="hover:bg-teal-700"
              url="#about"
              text="About"
            />
            <RoundedButtonWithLink
              size={80}
              bgColor="bg-black"
              textColor="text-gray-50"
              hoverColor="hover:bg-gray-800"
              url="#projects"
              text="Projects"
            />
            <RoundedButtonWithLink
              size={80}
              bgColor="bg-white"
              textColor="text-gray-900"
              hoverColor="hover:bg-gray-300"
              url="#skills"
              text="Skills"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex gap-2 lg:gap-4">
            <RoundedButtonWithLink
              size={120}
              bgColor="bg-teal-500"
              textColor="text-gray-50"
              hoverColor="hover:bg-teal-700"
              url="#about"
              text="About"
            />
            <RoundedButtonWithLink
              size={120}
              bgColor="bg-white"
              textColor="text-gray-900"
              hoverColor="hover:bg-gray-300"
              url="#projects"
              text="Projects"
            />
            <RoundedButtonWithLink
              size={120}
              bgColor="bg-gray-900"
              textColor="text-white"
              hoverColor="bg-gray-800"
              url="#experience"
              text="Experience"
            />
            <RoundedButtonWithLink
              size={120}
              bgColor="bg-lime-700"
              textColor="white"
              hoverColor="hover:bg-lime-800"
              url="#skills"
              text="Skills"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopModalTexts;
