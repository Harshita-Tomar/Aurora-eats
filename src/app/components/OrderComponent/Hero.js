import Link from "next/link";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-order-img h-[450px] bg-center bg-cover bg-no-repeat flex items-start justify-center overflow-hidden object-cover"></div>

      <div className="w-full">
        <div className=" pt-8 pb-20 px-8">
          <div className="px-6 pb-10">
            <h1 className="text-[60px] font-bold">Order Online</h1>
            <p>
              You can order online! Browse our menu items and choose what you
              would like to order from us.
            </p>
            <div className="py-4">
              <button
                type="text"
                className="text-slate-700 font-medium rounded-full text-sm px-5 py-2 text-center flex items-center"
              >
                <div className="rounded-full bg-green-700 w-2 h-2 me-3"></div>
                Accepting Orders
              </button>
            </div>

            <div className="flex py-3">
              <button
                type="text"
                className="bg-gray-500 font-medium text-white text-sm w-44 px-8 py-3 text-center justify-center flex items-center"
              >
                Pickup
              </button>
              <button
                type="text"
                className="text-slate-700 font-medium text-sm w-44 px-8 py-3 text-center justify-center flex items-center"
              >
                Delivery
              </button>
            </div>

            <div className="flex gap-4 text-[14px]">
              <p className="flex items-center gap-2">
                <IoTimeOutline />
                Pickup time: up to 30 minutes{" "}
                <Link href="#" className="underline hover:font-semibold">
                  Change
                </Link>
              </p>
              <p className="flex items-center gap-2">
                <CiLocationOn />
                Pickup Address: San Francisco, CA, USA
              </p>
            </div>
          </div>

          <div className="border-2 border-gray-400 mx-6 px-6 py-6">
            <div className="text-center py-6">
              <h1 className="text-[25px] font-bold">
                There are no items to show here yet
              </h1>
              <p className="text-[14px]">
                Come back soon to see what we have to offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
