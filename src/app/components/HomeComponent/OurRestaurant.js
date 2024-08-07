import Image from "next/image";
import React from "react";
import "@fontsource/montserrat/400.css";
import { PiGreaterThanThin } from "react-icons/pi";

const OurRestaurant = () => {
  return (
    <div className="flex justify-center mx-auto py-16">
      <div className="w-[68%] grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 py-5 gap-6">
        <div>
          <div className="mt-12 mb-6 flex justify-center bg-resto1-img 4xl:h-[1000px] 3xl:h-[1000px] 2xl:h-[700px] xl:h-[500px] lg:h-[500px] md:h-[500px] sm:h-[500px] h-[500px] w-full bg-no-repeat bg-center bg-cover">
            {/* <Image src="/images/resto1_img.jpg" width={470} height={500} /> */}
          </div>
          <div className="my-6 flex justify-center bg-resto2-img 4xl:h-[1000px] 3xl:h-[1000px] 2xl:h-[700px] xl:h-[500px] lg:h-[500px] md:h-[500px] sm:h-[500px] h-[500px] w-full bg-no-repeat bg-center bg-cover">
            {/* <Image src="/images/resto2_img.jpg" width={470} height={500} /> */}
          </div>
          <div className="py-6 flex justify-start">
            <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[85%] 2xl:ps-6 xl:ps-6 lg:ps-6 md:ps-0 sm:ps-0 ps-0">
              <h3 className="font-montserrat">OUR RESTAURANT</h3>
              <h1 className="text-slate-600 2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] italic tracking-normal leading-8">
                Local fresh cuisine for everyone
              </h1>
              <p className="py-3 text-[14px] font-montserrat text-gray-500 text-justify">
                I m a paragraph. Click here to add your own text and edit me.
                Its easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page.
              </p>
              <div className="font-poppins text-gray-500 flex items-center gap-1">
                <span>Read More Here</span>
                <span>
                  <PiGreaterThanThin />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="pb-6 flex justify-start">
            <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[85%] 2xl:ps-6 xl:ps-6 lg:ps-6 md:ps-0 sm:ps-0 ps-0">
              <h3 className="font-montserrat">OUR RESTAURANT</h3>
              <h1 className="text-slate-600 2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] italic tracking-normal leading-8">
                Local fresh cuisine for everyone
              </h1>
              <p className="py-3 text-[14px] font-montserrat text-gray-500 text-justify">
                I m a paragraph. Click here to add your own text and edit me.
                Its easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page.
              </p>
              <div className="font-poppins text-gray-500 flex items-center gap-1">
                <span>Read More Here</span>
                <span>
                  <PiGreaterThanThin />
                </span>
              </div>
            </div>
          </div>
          <div className="my-6 flex justify-center bg-resto3-img 4xl:h-[1000px] 3xl:h-[1000px] 2xl:h-[700px] xl:h-[500px] lg:h-[500px] md:h-[500px] sm:h-[500px] h-[500px] w-full bg-no-repeat bg-center bg-cover">
            {/* <Image src="/images/resto3_img.jpg" width={470} height={500} /> */}
          </div>
          <div className="my-6 flex justify-center bg-resto4-img 4xl:h-[1000px] 3xl:h-[1000px] 2xl:h-[700px] xl:h-[500px] lg:h-[500px] md:h-[500px] sm:h-[500px] h-[500px] w-full bg-no-repeat bg-center bg-cover">
            {/* <Image src="/images/resto4_img.jpg" width={470} height={500} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRestaurant;
