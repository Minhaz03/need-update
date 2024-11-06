import React from "react";
import Gadgets from "../Gadgets/Gadgets";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row p-4 bg-gray-100 min-h-screen mt-[500px] rounded-xl">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 lg:w-1/5 p-4">
          <ul className="space-y-4">
            <li>
              <button className="w-full bg-purple-600 text-white rounded-full py-2">
                All Product
              </button>
            </li>
            <li>
              <button className="w-full bg-gray-200 text-gray-700 rounded-full py-2">
                Laptops
              </button>
            </li>
            <li>
              <button className="w-full bg-gray-200 text-gray-700 rounded-full py-2">
                Phones
              </button>
            </li>
            <li>
              <button className="w-full bg-gray-200 text-gray-700 rounded-full py-2">
                Accessories
              </button>
            </li>
            <li>
              <button className="w-full bg-gray-200 text-gray-700 rounded-full py-2">
                Smart Watches
              </button>
            </li>
            <li>
              <button className="w-full bg-gray-200 text-gray-700 rounded-full py-2">
                MacBook
              </button>
            </li>
            <li>
              <button className="w-full bg-gray-200 text-gray-700 rounded-full py-2">
                Iphone
              </button>
            </li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4 lg:w-4/5 p-4">
          <div>
            <Gadgets></Gadgets>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
