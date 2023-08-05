"use client";
import React from "react";
import Link from "next/link";

import Image from "next/image";

const Navbar = () => {
  const closeMenu = () => {
    document
      .getElementById("menuToggle")
      .querySelector("input").checked = false;
  };
  return (
    <div>
      {/* Mobile */}
      <div className="fixed z-30 backdrop-blur-lg md:hidden grid">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <Link
                href="/"
                className="text-2xl py-5 hover:underline underline-offset-4"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="#team"
                className="text-2xl py-5 hover:underline underline-offset-4"
                onClick={closeMenu}
              >
                Team
              </Link>
              <Link
                href="#events"
                className="text-2xl py-5 hover:underline underline-offset-4"
                onClick={closeMenu}
              >
                Events
              </Link>
              {/* <Link
                href="gallery"
                className="text-2xl py-5 hover:underline underline-offset-4"
                onClick={closeMenu}
              >
                Gallery
              </Link> */}
            </ul>
          </div>
        </nav>
      </div>
      {/* Desktop */}
      <div>
        <header className="fixed md:grid hidden z-50 font-bold w-full backdrop-blur-sm text-black dark:text-white body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link
              href="/"
              className="flex title-font font-medium items-center mb-4 md:mb-0"
            >
              <Image
                src="/iei-light.png"
                alt="logo"
                width={500}
                height={500}
                className="w-10"
              ></Image>

              <span className="ml-3 text-xl font-bold">IEI - SCEM</span>
            </Link>

            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link
                href="#team"
                className="mr-10 focus:underline focus:underline-offset-8  hover:underline underline-offset-4"
              >
                Team
              </Link>
              <Link
                href="#events"
                className="mr-10 focus:underline focus:underline-offset-8 hover:underline underline-offset-4"
              >
                Events
              </Link>
              {/* <Link
                href="gallery"
                className="mr-10 focus:underline focus:underline-offset-8 hover:underline underline-offset-4"
              >
                Gallery
              </Link> */}
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
