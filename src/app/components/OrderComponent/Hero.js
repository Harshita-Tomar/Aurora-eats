"use client";
import React, { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
import { MdAccessTimeFilled } from "react-icons/md";

const Hero = () => {
  const [showSchedule, setShowSchedule] = useState(false);
  const [showPickup, setShowPickup] = useState(true);
  const [showDelivery, setShowDelivery] = useState(false);
  const [selectedOption, setSelectedOption] = useState("pickup");
  const [selectedRadio, setSelectedRadio] = useState("time_radio");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const handleButtonClick = (option) => {
    setSelectedOption(option);
    if (option === "pickup") {
      setShowPickup(true);
      setShowDelivery(false);
      // Retain the state of the radio buttons
      if (selectedRadio === "later_radio") {
        setShowSchedule(true);
      }
    } else if (option === "delivery") {
      setShowPickup(false);
      setShowDelivery(true);
    }
  };

  const handleRadioClick = (e) => {
    const value = e.target.value;
    setSelectedRadio(value);
    if (value === "later_radio") {
      setShowSchedule(true);
    } else {
      setShowSchedule(false);
    }
  };


  const handleAddressChange = (e) => {
    setDeliveryAddress(e.target.value);

    if (e.target.value !== "") {
      setShowSchedule(true);
    }
  };

  return (
    <>
      <div className="w-full bg-order-img h-[450px] bg-center bg-cover bg-no-repeat flex items-start justify-center overflow-hidden object-cover"></div>

      <div className="w-full">
        <div className=" pt-8 pb-20 px-8">
          <div className="px-6 pb-10">
            <h1 className="2xl:text-[60px] xl:text-[60px] lg:text-[60px] md:text-[50px] sm:text-[40px] text-[40px] font-bold">
              Order Online
            </h1>
            <p>
              You can order online! Browse our menu items and choose what you
              would like to order from us.
            </p>
            <div className="py-4">
              <button
                type="text"
                className="text-slate-700 font-medium rounded-full text-sm px-5 py-2 text-center flex items-center"
              >
                <div className="rounded-full bg-green-700 w-2 h-2 me-3"></div>
                Accepting Orders
              </button>
            </div>

            <div className="flex py-3">
              <button
                type="button" data-modal-target="order-modal" data-modal-toggle="order-modal"
                className={`font-medium text-sm w-44 px-8 py-3 text-center justify-center flex items-center border border-gray-700 ${selectedOption === "pickup"
                  ? "bg-gradient-to-r from-slate-500 via-slate-600 to-slate-800 text-white"
                  : "text-slate-700"
                  }`}
                onClick={() => handleButtonClick("pickup")}>
                Pickup
              </button>
              <button
                type="button" data-modal-target="order-modal" data-modal-toggle="order-modal"
                className={`font-medium text-sm w-44 px-8 py-3 text-center justify-center flex items-center border border-gray-700 ${selectedOption === "delivery"
                  ? "bg-gradient-to-r from-slate-500 via-slate-600 to-slate-800 text-white"
                  : "text-slate-700"
                  }`}
                onClick={() => handleButtonClick("delivery")}>
                Delivery
              </button>
            </div>

            <div className="flex gap-4 text-[14px]">
              <p className="flex items-center gap-2">
                <IoTimeOutline />
                Pickup time: up to 30 minutes
                <button className="underline hover:text-slate-700 font-semibold" data-modal-target="order-modal" data-modal-toggle="order-modal">
                  Change
                </button>
              </p>
              <p className="flex items-center gap-2">
                <CiLocationOn />
                Pickup Address: San Francisco, CA, USA
              </p>
            </div>

            {/* Main modal  */}
            <div id="order-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-transform duration-300 ease-in-out">
              <div className="relative p-4 w-full max-w-2xl max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-0 shadow ">
                  {/* Modal header  */}
                  <div className="flex items-center justify-between px-4 md:px-5 py-2 md:py-3 border-0 rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900">
                      How would you like to receive your order?
                    </h3>
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="order-modal">
                      <HiXMark className="w-6 h-6" />
                    </button>
                  </div>
                  {/* Modal body */}
                  <div className="px-4 md:px-5 py-2 md:py-3 space-y-1">

                    <div className="grid grid-cols-2 py-1 w-full">
                      <div >
                        <button
                          type="button" id="pickup_button"
                          className={`text-sm w-full px-8 py-3 text-center justify-center flex items-center border border-gray-700 ${showPickup
                            ? "bg-gradient-to-r from-slate-500 via-slate-600 to-slate-800 text-white"
                            : "bg-white text-slate-700"
                            }`} onClick={() => handleButtonClick("pickup")}>
                          Pickup
                        </button>
                      </div>
                      <div>
                        <button
                          type="button" id="delivery_button"
                          className={`text-sm w-full px-8 py-3 text-center justify-center flex items-center border border-gray-700 ${showDelivery
                            ? "bg-gradient-to-r from-slate-500 via-slate-600 to-slate-800 text-white"
                            : "bg-white text-slate-700"
                            }`} onClick={() => handleButtonClick("delivery")}>
                          Delivery
                        </button>
                      </div>
                    </div>

                    {showDelivery && (
                      <div >
                        <div className="py-1">
                          <form className="w-full delivery_address">
                            <div className="mb-5">
                              <label htmlFor="address" className="block mb-2 text-[12px] font-medium text-gray-900 ">Deliver to:</label>
                              <input type="text" id="address" value={deliveryAddress} className="bg-gray-50 border border-gray-300 text-gray-900 text-[14px] rounded-0 block w-full p-2.5" placeholder="San Francisco, CA, USA" required
                                onChange={handleAddressChange} />
                            </div>
                          </form>
                        </div>
                      </div>
                    )}

                    {showPickup && (
                      <div >

                        <div className="py-1">
                          <h6 className="text-[12px]">Pickup from:</h6>
                          <p className="text-[14px]"> San Francisco, CA, USA</p>
                        </div>

                        <div className="py-1">
                          <h6 className="text-[12px]">when:</h6>
                          <div className="flex items-center mb-1 mt-1">
                            <input id="time_radio" type="radio" value="time_radio" name="order-radio" className="w-4 h-4 text-slate-900 bg-gray-100 border-gray-300 focus:ring-0" onClick={handleRadioClick}
                              checked={selectedRadio === "time_radio"} />
                            <label htmlFor="time_radio" className="ml-2 text-sm font-medium text-gray-900">up to 30 minutes</label>
                          </div>
                          <div className="flex items-center">
                            <input id="later_radio" type="radio" value="later_radio" name="order-radio" className="w-4 h-4 text-slate-900 bg-gray-100 border-gray-300 focus:ring-0" onClick={handleRadioClick} checked={selectedRadio === "later_radio"} />
                            <label htmlFor="later_radio" className="ml-2 text-sm font-medium text-gray-900 ">Schedule for later</label>
                          </div>
                        </div>

                        {showSchedule && (
                          <div className="pt-1 2xl:flex xl:flex lg:flex md:flex sm:flex block gap-2 w-full">
                            <div className="2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-full sm:w-full">
                              <form className="w-full">
                                <label
                                  htmlFor="day"
                                  className="block mb-2 text-start text-sm font-medium text-slate-900"
                                >
                                  Day
                                </label>
                                <select
                                  id="countries"
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-0 block w-full p-2.5 " defaultValue="Today"
                                >
                                  <option value="Today">Today</option>
                                  <option value="Tomorrow">Tomorrow</option>
                                </select>
                              </form>
                            </div>
                            <div className="2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-full sm:w-full">
                              <form className="w-full">
                                <label
                                  htmlFor="time"
                                  className="block mb-2 text-start text-sm font-medium text-slate-900"
                                >
                                  Time:
                                </label>
                                <div className="relative">
                                  <div className="absolute inset-y-0 end-0 top-0 text-gray-600 flex items-center pe-3.5 pointer-events-none">
                                    <MdAccessTimeFilled className="w-4 h-4" />
                                  </div>
                                  <input
                                    type="time"
                                    id="time"
                                    className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-0 block w-full p-2.5"
                                    min="09:00"
                                    max="18:00"
                                    defaultValue="00:00"
                                    required
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Modal footer  */}
                  <div className="flex items-center justify-end  px-4 md:px-5 py-4 md:py-5 border-t border-gray-200 rounded-b">
                    <button data-modal-hide="order-modal" type="button" className="text-white bg-gradient-to-r from-slate-500 via-slate-600 to-slate-800 hover:bg-gradient-to-br font-medium rounded-0 text-sm px-8 py-2 text-center">Save
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="border-2 border-gray-400 mx-6 px-6 py-6">
            <div className="text-center py-6">
              <h1 className="text-[25px] font-bold">
                There are no items to show here yet
              </h1>
              <p className="text-[14px]">
                Come back soon to see what we have to offer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
