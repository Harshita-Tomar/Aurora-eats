import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";

const Interact = () => {
  return (
    <>
      <div className="w-full bg-slate-700">
        <div className="grid grid-cols-2 py-10">
          <div className="flex flex-col justify-start items-center py-6">
            <div className="text-white w-[65%] text-center text-[12px]">
              <h1 className="font-semibold text-[30px] pb-4">
                We would love to
                <br />
                hear from you
              </h1>
              <p>Tel: 123-456-7890 </p>
              <p className="pb-6">info@auroraeats.com</p>

              <p>500 Terry Francine St. </p>
              <p>San Francisco, CA 94158 </p>
              <div className="flex gap-x-4 gap-y-2 py-5 justify-center">
                <div>
                  <FaSquareXTwitter className="w-6 h-6" />
                </div>
                <div>
                  <FaInstagram className="w-6 h-6" />
                </div>
                <div>
                  <AiOutlineLinkedin className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center py-6">
            <div className="text-white w-[65%] text-center text-[12px]">
              <form>
                <div className="mt-2 w-full">
                  <div className="flex justify-between mb-3">
                    <div>
                      <label for="username">First Name*</label>
                      <div className="mb-4">
                        <div className="flex shadow-sm border-b-2 border-white">
                          <input
                            type="text"
                            name="first"
                            id="first"
                            autocomplete="first"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label for="username">Last Name</label>
                      <div className="mb-4">
                        <div className="flex shadow-sm border-b-2 border-white">
                          <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            autocomplete="first"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mb-3">
                    <div>
                      <label for="username">Enter your email here*</label>
                      <div className="mb-4">
                        <div className="flex shadow-sm border-b-2 border-white">
                          <input
                            type="email"
                            name="username"
                            id="username"
                            autocomplete="username"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label for="username">Subject</label>
                      <div className="mb-4">
                        <div className="flex shadow-sm border-b-2 border-white">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            autocomplete="username"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between mb-6">
                    <label for="username">Leave Message*</label>
                    <div className="mb-4">
                      <div className="flex shadow-sm border-b-2 border-white">
                        <textarea
                          type="text"
                          rows="2"
                          name="message"
                          id="message"
                          autocomplete="message"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="text-white bg-transparent border-2 border-white hover:bg-slate-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interact;
