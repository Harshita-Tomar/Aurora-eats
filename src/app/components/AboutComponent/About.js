import Image from "next/image";
import React from "react";
import "@fontsource/montserrat/400.css";

const About = () => {
  return (
    <>
      <div className="flex justify-center mx-auto py-16">
        <div className="w-[68%] grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 py-5 gap-6">
          <div>
            <div className="py-6 flex justify-start">
              <div className="2xl:w-[85%] xl:w-[85%] lg:w-[85%] md:w-[85%] 2xl:ps-6 xl:ps-6 lg:ps-6 md:ps-0 sm:ps-0 ps-0">
                <h3 className="font-montserrat">BEST BITES</h3>
                <h1 className="text-slate-600 2xl:text-[30px] xl:text-[30px] lg:text-[30px] md:text-[30px] sm:text-[24px] text-[24px] italic tracking-normal leading-8">
                  From Our Hearts to Your Plate
                </h1>
                <p className="py-3 text-[14px] font-montserrat text-gray-500">
                  I m a paragraph. Click here to add your own text and edit me.
                  Its easy. Just click “Edit Text” or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page.
                </p>
                <p className="py-3 text-[14px] font-montserrat text-gray-500">
                  This is a great space to write long text about your company
                  and your services. You can use this space to go into a little
                  more detail about your company. Talk about your team and what
                  services you provide. Tell your visitors the story of how you
                  came up with the idea for your business and what makes you
                  different from your competitors. Make your company stand out
                  and show your visitors who you are.
                </p>
                <p className="py-3 text-[14px] font-montserrat text-gray-500">
                  At Wix we are passionate about making templates that allow you
                  to build fabulous websites and it is all thanks to the support
                  and feedback from users like you! Keep up to date with New
                  Releases and what is Coming Soon in Wixellaneous in Support.
                </p>
              </div>
            </div>
            <div className="py-6 flex justify-center bg-kitchen1-img 4xl:h-[700px] 3xl:h-[700px] 2xl:h-[600px] xl:h-[400px] lg:h-[400px] md:h-[400px] sm:h-[300px] h-[300px] w-full bg-no-repeat bg-center bg-cover ">
              {/* <Image
                src="/images/stamp_img.png"
                width={120}
                height={40}
                className="absolute top-[-15%] left-[0%] z-10"
              /> */}
              {/* <Image src="/images/kitchen1.jpg" width={470} height={500} /> */}
            </div>
          </div>
          <div>
            <div className="2xl:my-40 xl:my-40 lg:my-40 md:my-20 sm:my-20 my-20 flex justify-center bg-kitchen2-img 4xl:h-[1000px] 3xl:h-[800px] 2xl:h-[800px] xl:h-[600px] lg:h-[600px] md:h-[700px] sm:h-[500px] h-[500px] w-full bg-no-repeat bg-center bg-cover relative">
              <Image
                src="/images/stamp_img.png"
                width={120}
                height={40}
                className="absolute top-[-15%] left-[0%] z-10" alt=""
              />
              {/* <Image src="/images/kitchen2.jpg" width={470} height={500} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
