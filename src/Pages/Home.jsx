import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import About from "../Components/About";
import Menu from "../Components/Menu";
import Testimonials from "../Components/Testimonials";
import Gallary from "../Components/Gallary";
import CTASection from "../Components/CTA";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="home flex flex-col">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div id="about">
          <About />
        </div>
        <div id="menu">
          <Menu />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="gallery">
          <Gallary />
        </div>
        <div id="cta">
          <CTASection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
