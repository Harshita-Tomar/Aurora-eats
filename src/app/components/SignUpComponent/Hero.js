import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-slate-300">
      <div className="grid grid-cols-3">
        <div className="flex flex-col justify-center items-center py-6">
          <div className="text-black text-center text-[12px] w-full px-10">
            <div className="pb-5">
              <h1 className="text-slate-700 text-[50px] font-extrabold">
                Sign Up
              </h1>
            </div>
            <form>
              <div className="mt-2 w-full">
                <div className="flex mb-3 flex-col text-start">
                  <label for="email">Enter your email here*</label>
                  <div className="mb-2 mt-1">
                    <div className="flex shadow-sm border-2 border-slate-700">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autocomplete="email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mb-6 text-start">
                  <label for="username">Password</label>
                  <div className="mb-2 mt-1">
                    <div className="flex shadow-sm border-2 border-slate-700">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        autocomplete="password"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="text-black bg-transparent border-2 border-slate-700 hover:text-white hover:bg-slate-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
                  >
                    Signup
                  </button>
                </div>
                <div>
                  <p className="text-slate-500">
                    By Checking the button abouve, you agree to our{" "}
                    <span className="font-bold text-slate-700">
                      Terms of Services
                    </span>{" "}
                    and{" "}
                    <span className="font-bold text-slate-700">
                      Privacy Policy
                    </span>{" "}
                  </p>

                  <p className="mt-4 text-slate-500">
                    Already have an account ?{" "}
                    <Link href="/SignIn" className="font-bold text-slate-700">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-span-2 bg-signin-img h-screen w-full bg-no-repeat bg-center bg-cover"></div>
      </div>
    </div>
  );
};

export default Hero;
