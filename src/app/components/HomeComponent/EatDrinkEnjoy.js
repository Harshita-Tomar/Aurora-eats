import React from "react";
import "@fontsource/montserrat/300.css";
// import Image from "next/image";

const EatDrinkEnjoy = () => {
  return (
    <>
      <div className="bg-[#717a6e]">
        <div className="w-full flex items-center justify-center px-3 py-5">
          <div className="text-white text-[20px] font-montserrat tracking-normal">
            Weekend Brunch I Saturday 9am - 2pm
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center text-start justify-center">
            <div className="px-10 w-[75%]">
              <h1 className="text-[50px] font-extrabold">Eats</h1>
              <p className="text-[25px] font-montserrat tracking-tight mb-5">
                Breakfast, Lunch and Artisanal Pastries
              </p>
              <p className="text-[18px] font-montserrat tracking-tight">
                I&#8217;m a paragraph. Click here to add your own text and edit
                me. I&#8217;m a great place for you to tell a story and let your
                users know a little more about you.
              </p>
            </div>
          </div>
          <div className="bg-eats-img h-screen w-full bg-no-repeat bg-center bg-cover"></div>
        </div>

        <div className="grid grid-cols-2">
          <div className="bg-drink-img h-screen w-full bg-no-repeat bg-center bg-cover"></div>
          <div className="flex flex-col items-center text-start justify-center">
            <div className="px-10 w-[75%]">
              <h1 className="text-[50px] font-extrabold">Drink</h1>
              <p className="text-[25px] font-montserrat tracking-tight mb-5">
                The Freshest Cup in Town
              </p>
              <p className="text-[18px] font-montserrat tracking-tight">
                I&#8217;m a paragraph. Click here to add your own text and edit
                me. I&#8217;m a great place for you to tell a story and let your
                users know a little more about you.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex flex-col items-center text-start justify-center">
            <div className="px-10 w-[75%]">
              <h1 className="text-[50px] font-extrabold">Enjoy</h1>
              <p className="text-[25px] font-montserrat tracking-tight mb-5">
                Make Yourself at Home
              </p>
              <p className="text-[18px] font-montserrat tracking-tight">
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
        <div className="text-slate-600 font-bold text-[30px] italic tracking-normal w-[600px]">
          “I'm a testimonial. Click to edit me and add text that says something
          nice about you and your services.”
        </div>
      </div>
    </>
  );
};

export default EatDrinkEnjoy;
