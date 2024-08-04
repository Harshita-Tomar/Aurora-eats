import Image from "next/image";
import React from "react";
import "@fontsource/montserrat/400.css";
import { PiGreaterThanThin } from "react-icons/pi";

const OurRestaurant = () => {
  return (
    <div className="flex justify-center mx-auto py-16">
      <div className="w-[68%] grid grid-cols-2 py-5">
        <div>
          <div className="pt-12 pb-6  flex justify-center">
            <Image src="/images/resto1_img.jpg" width={470} height={500} />
          </div>
          <div className="py-6 flex justify-center">
            <Image src="/images/resto2_img.jpg" width={470} height={500} />
          </div>
          <div className="py-6 flex justify-start">
            <div className="w-[80%] ps-6">
              <h3 className="font-montserrat">OUR RESTAURANT</h3>
              <h1 className="text-slate-600 text-[30px] italic tracking-normal leading-9">
                Local fresh cuisine for everyone
              </h1>
              <p className="py-3 text-[14px] font-montserrat text-gray-500">
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
            <div className="w-[80%] ps-6">
              <h3 className="font-montserrat">OUR RESTAURANT</h3>
              <h1 className="text-slate-600 text-[30px] italic tracking-normal leading-9">
                Local fresh cuisine for everyone
              </h1>
              <p className="py-3 text-[14px] font-montserrat text-gray-500">
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
          <div className="py-6 flex justify-center">
            <Image src="/images/resto3_img.jpg" width={470} height={500} />
          </div>
          <div className="py-6 flex justify-center">
            <Image src="/images/resto4_img.jpg" width={470} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRestaurant;
