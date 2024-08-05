import React from "react";
import "@fontsource/montserrat/300.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-screen" id="footer">
      <div className="w-full h-[40%] bg-slate-100"></div>

      <div className="w-full h-[60%] bg-slate-600 font-montserrat flex flex-col justify-center relative ">
        <Image
          src="/images/footer_sticker.png"
          width={200}
          height={200}
          className="absolute right-8 top-[-20%]"
        />
        <div className="grid grid-cols-2 text-white">
          <div className="flex flex-col justify-start items-center py-6">
            <div className="text-white w-[65%]">
              <h3 className="font-medium text-[22px]">
                Join our mailing list for updates
              </h3>
              <form>
                <div className="mt-2 w-full">
                  <div>
                    <label for="username">Enter your email here*</label>
                    <div className="mt-2 mb-4">
                      <div className="flex shadow-sm bg-white border-0">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autocomplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-black sm:text-sm sm:leading-6"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="text-black hover:text-white bg-white hover:bg-slate-500 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center py-6">
            <div className="text-white w-[65%]">
              <h1 className="font-semibold text-[30px]">Talk to Us</h1>
              <p>123-456-7890 </p>
              <p className="pb-6">info@auroraeats.com</p>

              <p>500 Terry Francine St. </p>
              <p>San Francisco, CA 94158 </p>
              <div className="flex gap-x-4 gap-y-2 py-5">
                <div>
                  <FaSquareXTwitter className="w-8 h-8" />
                </div>
                <div>
                  <FaInstagram className="w-8 h-8" />
                </div>
                <div>
                  <AiOutlineLinkedin className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center px-3 py-5">
          <div className="text-white text-[20px] font-montserrat tracking-normal">
            Aurora.Eats.Com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
