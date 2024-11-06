import React from "react";

const Footer = () => {
  return (
    <section className="mt-[500px]">
      <h2 className="mt-10 mb-3 text-center text-base md:text-2xl text-black font-bold">
        Gadget Heaven
      </h2>
      <p className="text-center text-[#09080F99] text-base md:text-xl">
        Leading the way in cutting-edge technology and innovation
      </p>
      <hr className="mt-10" />
      <footer className="footer bg-[#FFFFFF] text-neutral-content p-10 justify-evenly">
        <nav>
          <h6 className="footer-title text-black font-bold">Services</h6>
          <a className="link link-hover text-[#09080F99]">Product Support</a>
          <a className="link link-hover text-[#09080F99]">Order Tracking</a>
          <a className="link link-hover text-[#09080F99]">
            Shipping & Delivery
          </a>
          <a className="link link-hover text-[#09080F99]">Return Policy</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black font-bold">Company</h6>
          <a className="link link-hover text-[#09080F99]">About us</a>
          <a className="link link-hover text-[#09080F99]">Careers</a>
          <a className="link link-hover text-[#09080F99]">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black font-bold">Legal</h6>
          <a className="link link-hover text-[#09080F99]">Terms of Service</a>
          <a className="link link-hover text-[#09080F99]">Privacy policy</a>
          <a className="link link-hover text-[#09080F99]">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Gadget Heaven
          </p>
        </aside>
      </footer>
    </section>
  );
};

export default Footer;
