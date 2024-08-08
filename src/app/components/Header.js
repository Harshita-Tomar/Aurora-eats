"use client";
// import Link from "next/link";
// import React from "react";
// import { CiShoppingCart } from "react-icons/ci";
// import { FaUserCircle } from "react-icons/fa";

// const Header = () => {
//   return (
//     <div className="bg-slate-200 relative">
//       <div className="w-full grid grid-cols-4 px-3 h-[80px]">
//         <div className="text-slate-600 flex items-center text-3xl">
//           AURORA EATS
//         </div>

//         <div className="flex gap-7 col-span-3 text-slate-600 items-center justify-end">
//           <Link href="/Home">Home</Link>
//           <Link href="/About">About</Link>
//           <Link href="/Menu">Menu</Link>
//           <Link href="/Order">Order Online</Link>
//           <Link href="/BookTable">Book a Table</Link>
//           <Link href="#footer">Contact</Link>

//           <div className="relative">
//             <span className="absolute inline-flex items-center rounded-md bg-green-700 px-1 py-0 text-[8px] top-[-7px] left-[11px] font-medium text-green-50 ring-1 ring-inset ring-green-600/20">
//               0
//             </span>
//             <CiShoppingCart className="text-[24px]" />
//           </div>

//           <div className="flex gap-2">
//             <Link href="/SignIn">Sign in</Link>
//             <div>
//               <FaUserCircle className="text-[24px]" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

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
          className={`lg:flex gap-7 items-center justify-end ${isOpen ? "block" : "hidden"
            } lg:block absolute lg:relative bg-slate-200 lg:bg-transparent w-full lg:w-auto top-[80px] lg:top-0 left-0 lg:left-auto z-10 lg:z-auto p-4 lg:p-0`}
        >
          <div className="flex flex-col lg:flex-row gap-7">
            <Link href="/Home" className="p-2 lg:p-0">Home</Link>
            <Link href="/About" className="p-2 lg:p-0">About</Link>
            <Link href="/Menu" className="p-2 lg:p-0">Menu</Link>
            <Link href="/Order" className="p-2 lg:p-0">Order Online</Link>
            <Link href="/BookTable" className="p-2 lg:p-0">Book a Table</Link>
            <Link href="#footer" className="p-2 lg:p-0">Contact</Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-7 items-center mt-4 lg:mt-0">
            <div className="relative">
              <span className="absolute inline-flex items-center rounded-md bg-green-700 px-1 py-0 text-[8px] top-[-7px] left-[11px] font-medium text-green-50 ring-1 ring-inset ring-green-600/20">
                0
              </span>
              <CiShoppingCart className="text-[24px]" />
            </div>
            <div className="flex gap-2">
              <Link href="/SignIn" className="p-2 lg:p-0">Sign in</Link>
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
