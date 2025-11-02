import { Link } from "react-router";

import { NAV_LINKS } from "../constants";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="relative z-90 bg-neutral-900 px-6 md:px-10">
        <nav className="container-custom flex h-[95px] w-full items-center border-white max-md:justify-between md:gap-[42px] lg:gap-[197px] lg:border-b">
          <Link to="/">
            <img
              src="/assets/shared/desktop/logo.svg"
              alt="Logo"
              height={25}
              width={143}
            />
          </Link>

          <button
            className="-order-1 cursor-pointer lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src="/assets/shared/tablet/icon-hamburger.svg"
              alt="Menu"
              height={16}
              width={16}
            />
          </button>

          <div className="flex md:flex-1 md:justify-end lg:justify-between">
            <ul className="hidden gap-[34px] lg:flex">
              {NAV_LINKS.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="hover:text-primary-500 leading-[25px] font-bold tracking-[2px] text-white uppercase transition-colors duration-500"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link to="/cart">
              <img
                src="/assets/shared/desktop/icon-cart.svg"
                alt="Cart"
                height={15}
                width={20}
              />
            </Link>
          </div>
        </nav>

        <div
          className={clsx(
            "absolute top-full right-0 left-0 z-50 overflow-hidden rounded-br-lg rounded-bl-lg lg:hidden",
            isOpen ? "pointer-events-auto" : "pointer-events-none",
          )}
        >
          <div
            className={clsx(
              "bg-white px-6 transition-all duration-400 md:px-10",
              isOpen
                ? "pointer-events-auto translate-y-0 opacity-100 ease-out"
                : "pointer-events-none -translate-y-full opacity-0 ease-in",
            )}
          >
            <MobileNavigation />
          </div>
        </div>
      </header>
      {/* BACKDROP */}
      <div
        className={clsx(
          "fixed inset-0 z-60 bg-black/40 transition-opacity lg:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;
