import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const SelectGadget = ({ gadget }) => {
  
  const notify = () => toast.info("Product Deleted Successfully");

  const { product_id, product_title, product_image, price, description } =
    gadget;

  return (
    <div className="mx-auto bg-white shadow-md rounded-lg p-4 md:flex items-center flex-row">
      <div className="rounded-lg">
        <img className="w-[250px] h-[160px]" src={product_image} alt="" />
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-semibold">{product_title}</h2>
        <p className="text-gray-500 text-base">{description}</p>
        <p className="text-lg font-bold mt-2">
          Price: $ {price}
        </p>
      </div>
      <button className="ml-4 text-red-500 hover:text-red-700 focus:outline-none">
        <MdDeleteForever onClick={notify} />
      </button>
    </div>
  );
};

export default SelectGadget;
