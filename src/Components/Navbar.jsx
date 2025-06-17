import React, { useState } from "react";
import PrimaryButton from "./PrimaryBtn";
import { Menu, Close } from "@mui/icons-material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="nav sticky top-0 z-50 bg-white shadow-md">
      <div className="navContainer flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <div className="navLeft flex items-center">
          <a href="#home">
            <img src="assets/img/CafeLogo.png" alt="" className="w-28 h-full" />
          </a>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-10 items-center">
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

        {/* Desktop Button */}
        <div className="hidden md:block">
          <PrimaryButton>Create Free Account</PrimaryButton>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>{isOpen ? <Close /> : <Menu />}</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#gallery" onClick={toggleMenu}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#menu" onClick={toggleMenu}>
                Menu
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={toggleMenu}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#cta" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <a href="#cta">
              <PrimaryButton>Create Free Account</PrimaryButton>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
