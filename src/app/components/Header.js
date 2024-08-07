import Link from "next/link";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-slate-200 relative">
      <div className="w-full grid grid-cols-4 px-3 h-[80px]">
        <div className="text-slate-600 flex items-center text-3xl">
          AURORA EATS
        </div>

        <div className="flex gap-7 col-span-3 text-slate-600 items-center justify-end">
          <Link href="/Home">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Menu">Menu</Link>
          <Link href="/Order">Order Online</Link>
          <Link href="/BookTable">Book a Table</Link>
          <Link href="#footer">Contact</Link>

          <div className="relative">
            <span class="absolute inline-flex items-center rounded-md bg-green-700 px-1 py-0 text-[8px] top-[-7px] left-[11px] font-medium text-green-50 ring-1 ring-inset ring-green-600/20">
              0
            </span>
            <CiShoppingCart className="text-[24px]" />
          </div>

          <div className="flex gap-2">
            <Link href="/SignIn">Sign in</Link>
            <div>
              <FaUserCircle className="text-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
