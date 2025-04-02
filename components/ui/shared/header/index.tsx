import React from 'react';
import Menu from './menu';
import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '../../../../lib/constants';
// import CategoriesDrawer from './categories-drawer';
// import Search from './search';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          {/* <CategoriesDrawer /> */}
          <Link href="/" className="ml-2 flex-start bg-amber-600 p-2">
            <Image
              priority={true}
              src="/images/logo.svg"
              width={30}
              height={30}
              alt={`${APP_NAME} logo`}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <nav className=" flex gap-4">
          <div className="nav-item flex-1">Home</div>
          <div className="nav-item flex-1">About</div>
          <div className="nav-item flex-1">Projects</div>
          <div className="nav-item flex-1">Contact</div>
        </nav>
        <div className="hidden md:block">{/* <Search /> */}</div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
