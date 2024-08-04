import React from "react";
import { IoCalendarClear } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";

const HomeBookTable = () => {
  return (
    <div className="w-full bg-table-img h-screen bg-center bg-cover bg-fixed bg-no-repeat flex items-start justify-center overflow-hidden object-cover">
      <div className=" w-[70%] text-center text-white font-poppins  text-[50px] h-full flex flex-col items-center justify-center select-none">
        <h1 className="italic">Researve a Table</h1>
        <div className="pt-10 flex gap-6 w-full">
          <div className="w-[25%]">
            <form class="w-full">
              <label
                for="countries"
                class="block mb-2 text-start text-sm font-medium text-white"
              >
                Party Size
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              >
                <option selected>2 guests</option>
                <option value="3g">3 guests</option>
                <option value="4g">4 guests</option>
                <option value="5g">5 guests</option>
              </select>
            </form>
          </div>

          <div className="w-[25%]">
            <div class="relative w-full">
              <div>
                <label
                  for="countries"
                  class="block mb-2 text-sm text-start font-medium text-white"
                >
                  Date
                </label>
              </div>
              <div class="absolute inset-y-0 start-0 flex text-gray-600 items-center ps-3 pointer-events-none pt-6">
                <IoCalendarClear className="w-4 h-4" />
              </div>
              <input
                id="datepicker-autohide"
                datepicker
                datepicker-autohide
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                placeholder="Select date"
              />
            </div>
          </div>

          <div className="w-[25%]">
            <form class="w-full">
              <label
                for="time"
                class="block mb-2 text-start text-sm font-medium text-white"
              >
                Select time:
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 end-0 top-0 text-gray-600 flex items-center pe-3.5 pointer-events-none">
                  <MdAccessTimeFilled className="w-4 h-4" />
                </div>
                <input
                  type="time"
                  id="time"
                  class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  min="09:00"
                  max="18:00"
                  value="00:00"
                  required
                />
              </div>
            </form>
          </div>

          <div className="w-[15%]">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-700 to-blue-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
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
