import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { addGadgetToCart, addGadgetToWishlist } from "../Utility/addToDb";

const GadgetDetail = () => {
  const { product_id } = useParams();

  //   const id = parseInt(product_id);
  //   console.log(product_id);

  const data = useLoaderData();

  const gadget = data?.find((product) => product.product_id === product_id);

  //   console.log(product, data, product_id, id)
  //   console.log({ gadget, data, product_id, id });

  const handleAddToCart = (id) => {
    addGadgetToCart(id);
  }

  const handleWishlist = (id) => {
    addGadgetToWishlist(id);
  }

  const {
    product_title,
    price,
    description,
    product_image,
    rating,
    specification,
  } = gadget || {};
  // console.log(gadget);

  return (
    <div>
      <div className="p-6 bg-[#9538E2] rounded-xl">
        <h2 className="text-center text-white font-bold text-3xl mt-[100px]">
          Product Details
        </h2>
        <p className="my-10 text-center text-white font-bold text-xl">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="relative top-[150px] bg-white shadow-lg rounded-lg  p-6 md:flex md:flex-row">
          <div className="flex justify-center items-center bg-gray-200 rounded-lg">
            <img
              src={product_image}
              className="w-full md:h-[503px]"
              alt="gadget image"
            />
          </div>

          <div className="mt-6 md:mt-0 md:ml-6 md:w-2/3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              {product_title}
            </h2>
            <p className="text-2xl font-semibold text-green-500 mt-2">
              ${price}
            </p>
            <div className="badge p-4 bg-[#309C081A] badge-success my-2">
              In Stock
            </div>
            <p className="text-gray-600 text-base mt-4">{description}</p>

            <h3 className="text-lg font-semibold mt-4">
              Specifications:
              {specification.map((spec, idx) => (
                <ul
                  key={idx}
                  className="list-disc list-inside text-gray-700 mt-2 space-y-1"
                >
                  <li>{spec}</li>
                </ul>
              ))}
            </h3>

            <div className="flex items-center mt-4">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-gray-400"
                />
              </div>
              <span className="ml-2 text-black bg-[#09080F0D] rounded-lg p-2 font-bold">
                {rating}
              </span>
            </div>

            {/* button add to cart */}
            <Link onClick={()=> handleAddToCart(product_id)} to="/selectedGadgets"> 
            {/* to="/addCart" */}
              <button className="btn text-white rounded-full bg-[#9538E2] hover:bg-[#9538E2] mt-4 w-full md:w-auto">
                Add To Cart <FaOpencart className="ml- text-3xl" />
              </button>
            </Link>
          </div>
          <Link onClick={()=> handleWishlist(product_id)}>
            <FaRegHeart className="ml-[100px] mt-[50px] md:ml-0 md:mt-0 text-3xl text-[#9538E2] rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetail;
