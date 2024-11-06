import React from "react";
import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const {product_id, product_title, product_image, price } = gadget;
  return (
    // for all over the card click it will work
    // <Link to={`/gadgets/${product_id}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={product_image}
            alt="Gadgets Product"
            className="rounded-xl w-[282.67px] h-[181px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product_title}</h2>
          <p>$ {price}</p>

          {/* only click on view details btn it will work */}
          <Link to={`/gadgets/${product_id}`}>
          <div className="card-actions">
            <button className="btn border-purple-800 text-purple-900">
              View Details
            </button>
          </div>
          </Link>
        </div>
      </div>
    // </Link>
  );
};

export default Gadget;
