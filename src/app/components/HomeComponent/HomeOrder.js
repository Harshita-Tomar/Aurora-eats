import Image from "next/image";
import React from "react";

const HomeOrder = () => {
  return (
    <>
      <div className="bg-[#d9dcde]">
        <div className="w-full mt-20 px-8 grid grid-cols-2">
          <div className="text-slate-600 py-20">
            <h1 className="text-slate-600 text-[30px] italic tracking-normal">
              Order Online
            </h1>
            <p>
              You can order online! Browse our menu items and choose what you
              would like to order from us.
            </p>
          </div>
          {/* <div className="relative">
            <img
              className="absolute h-auto max-w-xl top-[-10%] right-[60%] shadow-x w-[18%] z-10"
              src="/images/order1_img.jpg"
              alt="image description"
            />
            <img
              className="absolute h-auto max-w-xl top-[-20%] right-[30%] shadow-custom w-[33%]"
              src="/images/order2_img.jpg"
              alt="image description"
            />
            <img
              className="absolute h-auto max-w-xl shadow-x w-[27%] top-[45%] right-[20%]"
              src="/images/order3_img.jpg"
              alt="image description"
            />
            <img
              className="absolute h-auto max-w-xl shadow-x w-[20%] top-[-3%] right-[12%]"
              src="/images/order4_img.jpg"
              alt="image description"
            />
          </div> */}
        </div>
      </div>

      <div className="w-full ">
        <div className="grid grid-cols-5">
          <div className="bg-drink-img h-[450px] w-full bg-no-repeat bg-center bg-cover"></div>
          <div className="bg-coros1-img h-[450px] w-full bg-no-repeat bg-center bg-cover"></div>
          <div className="bg-eats-img h-[450px] w-full bg-no-repeat bg-center bg-cover"></div>
          <div className="bg-resto3-img h-[450px] w-full bg-no-repeat bg-center bg-cover"></div>
          <div className="bg-coros2-img h-[450px] w-full bg-no-repeat bg-center bg-cover"></div>
        </div>
      </div>
      <div className="bg-[#fbf2e8]">
        <div className="w-full py-20 font-montserrat">
          <h1 className="2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[60px] sm:text-[40px] text-[40px] text-center font-extrabold tracking-normal">
            Drop By for a Bite
          </h1>
          <div className="flex justify-center items-start pt-8 ">
            <div className="2xl:px-16 xl:px-16 lg:px-16 md:px-5 sm:px-5 px-5 flex flex-col justify-center text-center ">
              <h1 className="text-[30px] tracking-normal">Address</h1>
              <p>500 Terry Francine St.</p>
              <p>San Francisco, CA 94158</p>
            </div>
            <div className="flex flex-col 2xl:px-16 xl:px-16 lg:px-16 md:px-8 sm:px-4 px-4 justify-center text-center border-s-2 border-black">
              <h1 className="text-[30px] tracking-normal">Opening Hours</h1>
              <p>Mon - Fri: 9am - 6pm</p>
              <p>Saturday: 10am - 2pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOrder;
