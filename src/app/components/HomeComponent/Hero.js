import React from "react";
import "@fontsource/poppins";

const Hero = () => {
  return (
    <div className="w-full bg-main-bg-img h-screen bg-center bg-cover bg-fixed bg-no-repeat flex items-start justify-center overflow-hidden object-cover">
      <div className="text-center text-white font-poppins font-extrabold text-[80px] h-full flex flex-col items-center justify-center select-none">
        <h1>Your Go-to Spot for</h1>
        <h1> Delicious Eats</h1>
      </div>
    </div>
  );
};

export default Hero;
