import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HeroBanner from "../HeroBanner/HeroBanner";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <section>
      <div className="max-w-screen-2xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default Root;
