import React from "react";

const Gallary = () => {
  const galleryImages = [
    "/assets/img/gallary1.jpg",
    "/assets/img/gallary2.jpg",
    "/assets/img/gallary3.jpg",
    "/assets/img/gallary4.jpg",
    "/assets/img/gallary5.jpg",
    "/assets/img/gallary6.jpg",
  ];

  return (
    <section className="bg-[#f8f8f8] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Café in Frames</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-sm">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallary;
