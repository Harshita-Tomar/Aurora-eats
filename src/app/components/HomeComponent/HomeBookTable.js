"use client";
import React, { useEffect } from "react";
import { IoCalendarClear } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";

const HomeBookTable = () => {
    useEffect(() => {
  
    const datepickerEl = document.getElementById('datepicker-autohide');
    if (datepickerEl) {
      datepickerEl._datepicker = new window.Datepicker(datepickerEl, {
        autohide: true,
        format: 'dd-mm-yyyy',
      });
    }
  }, []);
    
  return (
    <div className="w-full bg-table-img h-screen bg-center bg-cover bg-fixed bg-no-repeat flex items-start justify-center overflow-hidden object-cover">
      <div className="w-[70%] text-center text-white font-poppins text-[50px] h-full flex flex-col items-center justify-center select-none">
        <h1 className="italic">Researve a Table</h1>
        <div className="pt-10 2xl:flex xl:flex lg:flex md:block sm:block block gap-6 w-full">
          <div className="2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-full sm:w-full">
            <form className="w-full">
              <label
                htmlFor="countries"
                className="block mb-2 text-start text-sm font-medium text-white"
              >
                Party Size
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " defaultValue="2g"
              >
                <option value="2g">2 guests</option>
                <option value="3g">3 guests</option>
                <option value="4g">4 guests</option>
                <option value="5g">5 guests</option>
              </select>
            </form>
          </div>

          <div className="2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-full sm:w-full 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-3 sm:pt-3 pt-3">
            <div className="relative w-full">
              <div>
                <label
                  
                  className="block mb-2 text-sm text-start font-medium text-white"
                >
                  Date
                </label>
              </div>
              <div className="absolute inset-y-0 start-0 flex text-gray-600 items-center ps-3 pointer-events-none pt-6">
                <IoCalendarClear className="w-4 h-4" />
              </div>
              <input
                id="datepicker-autohide"
                data-datepicker
                data-datepicker-autohide
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                placeholder="Select date"
              />
            </div>
          </div>

          <div className="2xl:w-[25%] xl:w-[25%] lg:w-[25%] md:w-full sm:w-full 2xl:pt-0 xl:pt-0 lg:pt-0 md:pt-3 sm:pt-3 pt-3">
            <form className="w-full">
              <label
                htmlFor="time"
                className="block mb-2 text-start text-sm font-medium text-white"
              >
                Select time:
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 end-0 top-0 text-gray-600 flex items-center pe-3.5 pointer-events-none">
                  <MdAccessTimeFilled className="w-4 h-4" />
                </div>
                <input
                  type="time"
                  id="time"
                  className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  min="09:00"
                  max="18:00"
                  defaultValue="00:00"
                  required
                />
              </div>
            </form>
          </div>

          <div className="2xl:w-[15%] xl:w-[15%] lg:w-[15%] md:w-full sm:w-full">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-700 to-blue-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
            >
              Find a table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBookTable;
