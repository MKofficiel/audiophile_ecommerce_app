import { Link } from "react-router";

import { NAV_LINKS } from "../constants";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className='bg-neutral-900 px-6 md:px-10 relative z-60    '>
        <nav className='w-full flex  max-md:justify-between  md:gap-[42px] items-center  lg:gap-[197px] container-custom lg:border-b border-white h-[95px]'>
          <Link to='/'>
            <img
              src='/assets/shared/desktop/logo.svg'
              alt='Logo'
              height={25}
              width={143}
            />
          </Link>

          <button
            className='lg:hidden cursor-pointer -order-1'
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src='/assets/shared/tablet/icon-hamburger.svg'
              alt='Menu'
              height={16}
              width={16}
            />
          </button>

          <div className='flex md:flex-1 md:justify-end lg:justify-between'>
            <ul className='lg:flex  gap-[34px] hidden'>
              {NAV_LINKS.map(({ label, path }) => (
                <li key={label}>
                  <Link to={path} className='text-white'>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link to='/cart'>
              <img
                src='/assets/shared/desktop/icon-cart.svg'
                alt='Cart'
                height={15}
                width={20}
              />
            </Link>
          </div>
        </nav>

        <div className='  overflow-hidden  rounded-bl-[8px] rounded-br-[8px] lg:hidden absolute top-full  left-0 right-0 z-50'>
          <div
            className={clsx(
              "bg-white px-6 md:px-10  duration-400 transition-all ",
              isOpen
                ? "pointer-events-auto opacity-100 translate-y-0  ease-out"
                : "pointer-events-none opacity-0 -translate-y-full ease-in"
            )}
          >
            <MobileNavigation />
          </div>
        </div>
      </header>
      {/* BACKDROP */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/40 transition-opacity lg:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;
