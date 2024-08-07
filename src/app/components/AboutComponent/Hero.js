import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-slate-300">
        <div className="w-full flex items-center justify-center px-3 py-20">
          <div className="text-black text-center font-montserrat tracking-normal 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[75%] sm:w-[80%] w-[90%] ">
            <h1 className="text-[50px] mb-5 font-extrabold">This is Us</h1>
            <p className="text-center text-[18px]">
              We're big believers in the power of a good meal and a friendly
              place to eat it. Stop by for fresh, locally sourced food, served
              with a warm smile.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-aboutus-img h-screen bg-center bg-cover bg-fixed bg-no-repeat flex items-start justify-center overflow-hidden object-cover"></div>
    </>
  );
};

export default Hero;
