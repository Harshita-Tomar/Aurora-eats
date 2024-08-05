import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-slate-300">
        <div className="w-full flex items-center justify-center px-3 py-20">
          <div className="text-black text-center font-montserrat tracking-normal w-[50%] ">
            <h1 className="text-[50px] mb-5 font-extrabold">Our Menu</h1>
            <p className="text-center text-[18px]">
              We're big believers in the power of a good meal and a friendly
              place to eat it. Stop by for fresh, locally sourced food, served
              with a warm smile.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-menu-img h-screen bg-center bg-cover bg-fixed bg-no-repeat flex items-start justify-center overflow-hidden object-cover"></div>
    </>
  );
};

export default Hero;