import React from "react";
import { Link } from "react-router-dom";


const FeedbackReviews = () => {

  return (
    <Link to="/feedbackReviews">
      <div className="text-center items-center">
        <div className="mt-10 text-3xl font-extrabold">Shipment Procedure</div>
        <ul className="mt-5 steps flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-12">
          <li className="step step-info text-sm md:text-base lg:text-lg">
            Add To Cart
          </li>
          <li className="step step-info text-sm md:text-base lg:text-lg">
            Or Add To Wishlist for Purchase Later
          </li>
          <li className="step step-info text-sm md:text-base lg:text-lg">
            Click on Order Now
          </li>
          <li className="step step-info text-sm md:text-base lg:text-lg">
            Need to Pay Delivery charges & 20% payment
          </li>
          <li className="step step-info text-sm md:text-base lg:text-lg">
            It Will Take 7 Business Days To Deliver
          </li>
          <li className="step step-info text-sm md:text-base lg:text-lg">
            A delivery man will come to your doorstep
          </li>
          <li
            className="step step-error text-sm md:text-base lg:text-lg"
            data-content="?"
          >
            Something Special will Send if you buy up to $10,000
          </li>
          <li
            data-content="✓"
            className="step step-neutral text-sm md:text-base lg:text-lg"
          >
            Enjoy Our Product, Please Give Review
          </li>
        </ul>
      </div>
      <div className="text-center mt-10">
        <h2 className="text-3xl font-extrabold mb-3">Feedback Form</h2>
        <div className="space-y-5">
          <label className="input input-bordered flex items-center gap-2">
            Name
            <input type="text" className="grow" placeholder="Your Name" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="Your E-mail" />
          </label>
          <textarea
            placeholder="Write Something About our Service"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
          ></textarea>
        </div>

        <button className="btn mt-2">
          Done
        </button>
      </div>
    </Link>
  );
};

export default FeedbackReviews;
