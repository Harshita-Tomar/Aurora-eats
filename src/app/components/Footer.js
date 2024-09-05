import React from "react";
import "@fontsource/montserrat/300.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full" id="footer">
      <div className="w-full h-[300px] bg-slate-100 relative">
        <div className="absolute px-2 top-[-40px]">
          <Image
            src="/images/menu_sticker4.png"
            width={200}
            height={200}
            className="pe-5 me-2 " alt=""
          />
        </div>
      </div>

      <div className="w-full bg-slate-600 font-montserrat flex flex-col justify-center relative">
        <Image
          src="/images/footer_sticker.png"
          width={160}
          height={100}
          className="absolute 2xl:flex xl:flex lg:flex md:flex sm:hidden hidden right-8 top-[-20%]" alt=""
        />
        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 text-white">
          <div className="flex flex-col justify-start items-center 2xl:py-6 xl:py-6 lg:py-6 md:py-6 sm:py-10 py-10">
            <div className="text-white w-[65%]">
              <h3 className="font-medium text-[22px]">
                Join our mailing list for updates
              </h3>
              <form>
                <div className="mt-2 w-full">
                  <div>
                    <label htmlFor="username">Enter your email here*</label>
                    <div className="mt-2 mb-4">
                      <div className="flex shadow-sm bg-white border-0">
                        <input
                          type="text"
                          name="username"
                          id="username"
                          autoComplete="username"
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
        <div className="w-full flex items-center justify-center px-3 py-5 relative">
          <div className="text-white text-[20px] font-montserrat tracking-normal">
            Aurora.Eats.Com
          </div>
          <div className="absolute right-4 bottom-4">
            <Link href="#main_header">
              <button type="button" className="text-white bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-2 mb-2"><FaArrowUp className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
