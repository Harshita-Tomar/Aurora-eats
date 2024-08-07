import React from "react";

const Kitchen = () => {
  return (
    <>
      <div className="bg-slate-300">
        <div className="w-full flex items-center justify-center px-3 py-20">
          <div className="text-black text-center font-montserrat tracking-normal 2xl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[75%] sm:w-[80%] w-[90%]">
            <h1 className="2xl:text-[50px] xl:text-[50px] lg:text-[50px] md:text-[40px] sm:text-[30px] text-[30px] mb-5 font-extrabold">
              In the Kitchen
            </h1>
            <p className="text-center text-[18px]">
              I m a paragraph. Click here to add your own text and edit me. Its
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-2">
          <div className="bg-about1-img h-screen w-full bg-no-repeat bg-center bg-cover "></div>
          <div className="bg-about2-img h-screen w-full bg-no-repeat bg-center bg-cover "></div>
        </div>
      </div>
    </>
  );
};

export default Kitchen;
