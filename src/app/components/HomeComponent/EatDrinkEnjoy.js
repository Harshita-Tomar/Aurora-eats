import React from "react";
import "@fontsource/montserrat/300.css";
// import Image from "next/image";

const EatDrinkEnjoy = () => {
  return (
    <>
      <div className="bg-[#717a6e]">
        <div className="w-full flex items-center justify-center px-3 py-5">
          <div className="text-white 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[14px] text-[14px] font-montserrat tracking-normal">
            Weekend Brunch I Saturday 9am - 2pm
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
          <div className="flex flex-col items-center text-start justify-center">
            <div className="2xl:px-10 xl:px-10 lg:px-10 md:px-8 sm:px-0 px-0 2xl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-8 py-8 w-[75%] ">
              <h1 className="text-[50px] font-extrabold">Eats</h1>
              <p className="text-[25px] font-montserrat tracking-tight mb-5">
                Breakfast, Lunch and Artisanal Pastries
              </p>
              <p className="text-[18px] font-montserrat tracking-tight text-justify">
                I&#8217;m a paragraph. Click here to add your own text and edit
                me. I&#8217;m a great place for you to tell a story and let your
                users know a little more about you.
              </p>
            </div>
          </div>
          <div className="bg-eats-img h-screen w-full bg-no-repeat bg-center bg-cover"></div>
        </div>

        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
          <div className="bg-drink-img h-screen w-full bg-no-repeat bg-center bg-cover 2xl:order-1 xl:order-1 lg:order-1 md:order-1 sm:order-2 order-2"></div>
          <div className="flex flex-col items-center text-start justify-center 2xl:order-2 xl:order-2 lg:order-2 md:order-2 sm:order-1 order-1">
            <div className="2xl:px-10 xl:px-10 lg:px-10 md:px-8 sm:px-0 px-0 2xl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-8 py-8 w-[75%]">
              <h1 className="text-[50px] font-extrabold">Drink</h1>
              <p className="text-[25px] font-montserrat tracking-tight mb-5">
                The Freshest Cup in Town
              </p>
              <p className="text-[18px] font-montserrat tracking-tight text-justify">
                I&#8217;m a paragraph. Click here to add your own text and edit
                me. I&#8217;m a great place for you to tell a story and let your
                users know a little more about you.
              </p>
            </div>
          </div>
        </div>

        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
          <div className="flex flex-col items-center text-start justify-center">
            <div className="2xl:px-10 xl:px-10 lg:px-10 md:px-8 sm:px-0 px-0 2xl:py-0 xl:py-0 lg:py-0 md:py-0 sm:py-8 py-8 w-[75%]">
              <h1 className="text-[50px] font-extrabold">Enjoy</h1>
              <p className="text-[25px] font-montserrat tracking-tight mb-5">
                Make Yourself at Home
              </p>
              <p className="text-[18px] font-montserrat tracking-tight text-justify">
                I&#8217;m a paragraph. Click here to add your own text and edit
                me. I&#8217;m a great place for you to tell a story and let your
                users know a little more about you.
              </p>
            </div>
          </div>
          <div className="bg-enjoy-img h-screen w-full bg-no-repeat bg-center bg-cover"></div>
        </div>
      </div>
      <div className="bg-slate-400">
        <div className="w-full flex items-center justify-center px-3 py-1">
          <div className="text-white text-[14px] font-montserrat tracking-normal">
            Eat . Drink . Enjoy
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center px-3 py-5 font-montserrat">
        <p className="tracking-wider mb-3">AuroraEats.Com</p>
        <div className="text-slate-600 font-bold 2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[20px] text-[20px] italic tracking-normal text-center 3xl:w-[600px] 2xl:w-[600px] xl:w-[600px] lg:w-[600px] md:w-[500px] sm:w-full px-5">
          “I'm a testimonial. Click to edit me and add text that says something
          nice about you and your services.”
        </div>
      </div>
    </>
  );
};

export default EatDrinkEnjoy;
