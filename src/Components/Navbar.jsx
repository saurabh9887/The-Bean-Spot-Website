import { Button } from "@mui/material";
import React from "react";
import PrimaryButton from "./PrimaryBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav sticky top-0 z-50 bg-white shadow-md">
      <div className="navContainer flex items-center justify-between h-20 px-6">
        <div className="navLeft flex items-center ">
          <img src="assets/img/CafeLogo.png" alt="" className="w-28 h-full" />
          <ul className="flex gap-10">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#cta">Contact</a>
            </li>
          </ul>
        </div>

        <div className="navRight">
          {/* <button>Create Free Account</button> */}
          <a href="#cta">
            <PrimaryButton>Create Free Account</PrimaryButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
