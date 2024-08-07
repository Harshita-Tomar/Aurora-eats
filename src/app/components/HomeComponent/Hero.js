import React from "react";
import "@fontsource/poppins";

const Hero = () => {
  return (
    <div className="w-full bg-main-bg-img h-screen bg-center bg-cover bg-fixed bg-no-repeat flex items-start justify-center overflow-hidden object-cover">
      <div className="text-center text-white font-poppins  h-full flex flex-col items-center justify-center select-none">
        <h1 className="font-extrabold 2xl:text-[80px] xl:text-[80px] lg:text-[80px] md:text-[50px] sm:text-[40px] text-[40px]">
          Your Go-to Spot for <br /> Delicious Eats
        </h1>
      </div>
    </div>
  );
};

export default Hero;
