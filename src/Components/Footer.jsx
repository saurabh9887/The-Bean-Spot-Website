import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Logo + Short Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">The Bean Spot Café</h2>
          <p className="text-sm text-gray-400">
            Brewing smiles one cup at a time. Come for the coffee, stay for the
            vibe.
          </p>
        </div>

        {/* Column 2 - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-2 text-gray-400">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#cta">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Brew Street, Pune, MH
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> hello@brewblendcafe.com
            </li>
          </ul>
        </div>

        {/* Column 4 - Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg text-gray-300">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} The Beans Spot Café. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
