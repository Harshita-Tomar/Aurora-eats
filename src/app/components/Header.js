"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

   const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-slate-200 relative">
      <div className="w-full flex items-center justify-between px-3 h-[80px]">
        <div className="text-slate-600 flex items-center text-3xl">
          AURORA EATS
        </div>
        <div className="flex items-center lg:hidden">
          <button onClick={toggleMenu} className="text-slate-600">
            {isOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
        <div
          className={`lg:flex gap-7 lg:items-center items-center justify-end ${isOpen ? "block" : "hidden"
            } lg:flex absolute lg:relative bg-slate-200 lg:bg-transparent w-full top-[80px]
              left-0 lg:top-0 z-10 lg:z-auto pt-6 p-4 `}
        >
          <div className="flex flex-col lg:flex-row gap-7 ">
            <Link href="/Home" onClick={closeMenu} className="p-1 lg:p-0 text-center">Home</Link>
            <Link href="/About" onClick={closeMenu} className="p-1 lg:p-0 text-center">About</Link>
            <Link href="/Menu" onClick={closeMenu} className="p-1 lg:p-0 text-center">Menu</Link>
            <Link href="/Order" onClick={closeMenu} className="p-1 lg:p-0 text-center">Order Online</Link>
            <Link href="/BookTable" onClick={closeMenu} className="p-1 lg:p-0 text-center">Book a Table</Link>
            <Link href="#footer" onClick={closeMenu} className="p-1 lg:p-0 text-center">Contact</Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-7 items-center mt-4 lg:mt-0">
            <div className="relative">
              <span className="absolute inline-flex items-center rounded-md bg-green-700 px-1 py-0 text-[8px] top-[-7px] left-[11px] font-medium text-green-50 ring-1 ring-inset ring-green-600/20">
                0
              </span>
              <CiShoppingCart className="text-[24px]" />
            </div>
            <div className="flex gap-2">
              <Link href="/SignIn" className="p-1 lg:p-0">Sign in</Link>
              <div>
                <FaUserCircle className="text-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
