import { Menu as MenuIcon } from 'lucide-react';
// import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
// import Link from 'next/link';
import ModeToggle from './mode-toggle';
// import Search from './search';
import { MobileNav } from './main-nav';

const Menu = () => {
  return (
    <>
      <div className="flex justify-center gap-3">
        <nav className="md:flex hidden w-full max-w-xs gap-1"></nav>
        <ModeToggle />
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-center pt-2">
              <SheetTitle></SheetTitle>
              <SheetTitle></SheetTitle>
              <MobileNav />
              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
};

export default Menu;
