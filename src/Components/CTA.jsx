import React from "react";
import PrimaryButton from "./PrimaryBtn";

const CTASection = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text and Email Input */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in the Loop!
          </h2>
          <p className="text-gray-600 mb-6 text-base leading-relaxed">
            Get exclusive offers, event updates, and the freshest brews straight
            to your inbox. Whether you're a latte lover, a cold brew enthusiast,
            or just here for the cozy vibes — we’ve got something special
            brewing for you every week.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-300 w-full sm:w-auto"
            />
            {/* <button className="bg-[#c98c5d] text-white px-6 py-2 rounded-lg hover:bg-[#b87a4a] transition">
              Subscribe
            </button> */}
            <PrimaryButton>Subscribe</PrimaryButton>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-end">
          <img
            src="/assets/img/cappuccino2.jpg"
            alt="Coffee cup"
            className="w-80 h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
