import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PrimaryButton from "./PrimaryBtn";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/assets/img/cover2.jpg",
      heading: "Brewed with Passion, Served with Love",
      subheading:
        "From the first bean to the last sip, we pour our hearts into every cup. Whether you're catching up with friends or enjoying a solo moment, our café is your warm corner of comfort and flavor.",
    },
    {
      image: "/assets/img/HeroImg1.jpg",
      heading: "Every Sip Tells a Story",
      subheading:
        "Our brews are more than just beverages — they’re experiences. Sourced responsibly and crafted with care, every cup holds a memory, a mood, and a little bit of magic you won’t forget.",
    },
    {
      image: "/assets/img/cappuccino2.jpg",
      heading: "Your Daily Coffee Ritual",
      subheading:
        "Kickstart your day the right way — with a freshly brewed cup, a warm smile, and the cozy aroma of home. Here, every visit is a ritual worth repeating.",
    },
  ];

  return (
    <section className="hero-carousel" id="home">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        stopOnHover={false} // Optional: prevents pausing when hovering
        swipeable={true} // Optional: allows touch swipe
        emulateTouch={true} // Optional: enables mouse drag like touch
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen flex">
            <img
              src={slide.image}
              alt={`slide-${index}`}
              className="object-cover h-screen w-full"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-start p-4 flex-1">
              {/* Key the motion.div uniquely to re-trigger animation */}
              <motion.div
                key={currentSlide}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }} // ⬅️ Increased from 1 to 2
                className="text-white text-left max-w-3xl"
              >
                <h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ fontFamily: "Poppins" }}
                >
                  {slide.heading}
                </h1>
                <p className="text-lg text-wrap md:text-xl mb-6 text-white/80">
                  {slide.subheading}
                </p>
                <a href="#menu">
                  <PrimaryButton>Explore Our Menu</PrimaryButton>
                </a>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
