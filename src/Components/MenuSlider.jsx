import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const MenuSlider = ({ items }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 4,
    containScroll: "trimSnaps",
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {items.map((item, index) => (
            <div
              className="flex-shrink-0 w-72 mx-2 rounded-xl overflow-hidden shadow-md bg-white"
              key={index}
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
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow px-3 py-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

export default MenuSlider;
