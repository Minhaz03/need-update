import React, { useEffect } from "react";
// import { useLoaderData, useParams } from "react-router-dom";

const AddToCart = () => {

  return (
    <div>
      <div className="bg-[#9538E2] p-10 rounded-lg">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold my-6">Dashboard</h2>
          <p className="text-xl font-medium my-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="gap-5 flex justify-center">
          <button className="btn text-2xl font-bold text-[#9538E2] px-14">
            Cart
          </button>
          <button className="btn bg-[#86aeb4] text-2xl font-bold px-14">Wishlist</button>
        </div>
      </div>

      <div className="container mx-auto bg-white p-6 rounded-lg shadow-md mt-14">
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-xl font-bold">Cart</h2>
          <div className="text-xl font-semibold">Total cost: $999.99</div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
              Sort by Price
            </button>
            <button className="px-4 py-2 bg-[#9538E2] text-white rounded-md hover:bg-[#9538E2]">
              Purchase
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between p-4 border-b last:border-b-0">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-md mr-4"></div>
              <div>
                <h3 className="text-lg font-semibold">
                  Samsung Galaxy S23 Ultra
                </h3>
                <p className="text-sm text-gray-600">
                  Ultra-slim, high-performance laptop with 13.4-inch Infinity
                  Edge display.
                </p>
                <p className="text-lg font-semibold mt-1">Price: $999.99</p>
              </div>
            </div>
            <button className="text-red-500 text-xl">&times;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
