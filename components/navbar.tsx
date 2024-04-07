/* eslint-disable @next/next/no-async-client-component */
'use client';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AlignRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import logo from '../assets/logo.png';
import CustomImage from './customImage';
import { NavItems } from './navItems';
import UserProfile from './userProfile';

const NavBar = () => {
  const handleScroll = () => {
    const section = document.querySelector('.nav');
    if (section) {
      const scrolled = window.scrollY > 100;
      if (scrolled) {
        section.classList.add('nav-scroll');
      } else {
        section.classList.remove('nav-scroll');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className=" nav z-50">
      <div className="mx-auto max-w-7xl flex h-16  items-center justify-between px-2 md:px-6">
        <div className="flex items-stretch justify-start ">
          <Link href={'/'}>
            <CustomImage
              src={logo}
              alt="logo"
              priority={true}
              className="w-24 md:w-32 h-10 md:h-12"
            />
          </Link>

          <div className="hidden md:block">
            <NavItems />
          </div>
        </div>

        <div className="ml-auto flex items-center space-x-4 mr-2">
          <UserProfile />
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <AlignRight className="w-6 h-6 text-white" />
            </SheetTrigger>
            <SheetContent
              side={'right'}
              className="flex items-center justify-center bg-black border-none"
            >
              <SheetClose>
                <NavItems />
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
