import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-slate-300">
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 grid-cols-1">
        <div className="flex flex-col justify-center items-center py-6">
          <div className="text-black text-center text-[12px] w-full px-10">
            <div className="py-3">
              <h1 className="text-slate-700 text-[50px] font-extrabold">
                Sign In
              </h1>
            </div>
            <form>
              <div className="mt-2 w-full">
                <div className="flex mb-3 flex-col text-start">
                  <label htmlFor="username">Username*</label>
                  <div className="mb-2 mt-1">
                    <div className="flex shadow-sm border-2 border-slate-700">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex mb-3 flex-col text-start">
                  <label htmlFor="email">Enter your email here*</label>
                  <div className="mb-2 mt-1">
                    <div className="flex shadow-sm border-2 border-slate-700">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mb-6 text-start">
                  <label htmlFor="username">Password</label>
                  <div className="mb-2 mt-1">
                    <div className="flex shadow-sm border-2 border-slate-700">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="password"
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
                    Sign in
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
                    Dont have an account ?{" "}
                    <Link href="/SignUp" className="font-bold text-slate-700">
                      Create Account
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
