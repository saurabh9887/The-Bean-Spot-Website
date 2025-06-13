import React from "react";
import MenuSlider from "./MenuSlider";

const Menu = () => {
  const menuItems = [
    {
      name: "Classic Cappuccino",
      img: "/assets/img/cappuccino1.jpg",
      desc: "Rich espresso topped with velvety foam.",
    },
    {
      name: "Hazelnut Cold Brew",
      img: "/assets/img/coldbrew1.jpg",
      desc: "Chilled and smooth with a nutty twist.",
    },
    {
      name: "Fresh Croissant",
      img: "/assets/img/croissant1.jpg",
      desc: "Flaky, buttery and freshly baked every morning.",
    },
    {
      name: "Fresh Croissant",
      img: "/assets/img/Pastry1.jpg",
      desc: "Flaky, buttery and freshly baked every morning.",
    },
  ];
  return (
    <div className="menu-highlights py-12 px-4 text-center">
      <h2 className="text-3xl font-semibold text-primary mb-4">
        Our Signature Menu
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Handcrafted favorites our customers love. From bold brews to creamy
        treats — here's what you shouldn't miss.
      </p>

      {/* Slider */}

      <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex gap-6 justify-between">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="w-64 flex-shrink-0 rounded-xl overflow-hidden shadow-md bg-white"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 text-wrap">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
