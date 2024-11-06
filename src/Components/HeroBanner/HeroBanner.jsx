import React from "react";

const HeroBanner = () => {
  return (
    <div className="flex flex-col items-center bg-[rgb(149,56,226)] px-6 rounded-lg h-[694px]">
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 mt-[200px]">
        Upgrade Your Tech Accessorize with Gadget Heaven Accessories
      </h1>
      <p className="text-lg text-white text-center mb-6">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <button className="bg-white text-purple-500 font-semibold py-2 px-4 rounded-full mb-8 hover:bg-purple-100">
        Shop Now
      </button>
      <div className="relative top-[50px]">
        <div className="border-2 border-dotted p-5  mx-auto rounded-xl overflow-hidden shadow-lg ">
          <img
            src="/assets/banner.jpg" // Replace with your image URL
            alt="VR Headset"
            className="w-5/ lg:w-[1062px] lg:h-[563px] rounded-xl"
          />
        </div>
      </div>
      <div className="text-center mt-[50px] md:mt-[90px] font-bold text-3xl">
        <h2>Explore Cutting-Edge Gadgets</h2>
      </div>
    </div>
  );
};

export default HeroBanner;
