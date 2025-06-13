import React from "react";

const About = () => {
  return (
    <div className="py-14 flex flex-col gap-16">
      <div className="story flex flex-col md:flex-row items-center">
        <div className="story-left flex-1 p-4 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-semibold text-primary">Our Story</h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto md:mx-0">
            It all started with a dream — a cozy little place where people could
            escape the rush and feel at home with every sip. Founded in 2021,
            our café was built on the idea that coffee is more than a drink —
            it’s a ritual, a connection, a moment of peace.
          </p>
          <p className="text-gray-600 text-base max-w-xl mx-auto md:mx-0">
            From locally roasted beans to hand-baked treats, everything we serve
            is a labor of love. Whether you're catching up with friends or
            diving into your favorite book, we’ve saved you a seat.
          </p>
        </div>

        <div className="story-right flex-1 px-3 flex justify-end">
          <img
            src="/assets/img/how-we-started3.jpg"
            alt="How we started"
            className="w-96 h-96 object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="how-we-started flex flex-col-reverse md:flex-row items-center my-4">
        <div className="how-left flex-1 px-4 flex justify-start">
          <img
            src="/assets/img/how-we-started2.jpg"
            alt="How we started out"
            className="w-96 h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="how-right flex-1 p-4 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-semibold text-primary">
            How We Started Out
          </h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto md:mx-0 text-justify">
            With nothing but an old espresso machine and a heart full of
            ambition, we began our journey in a tiny street-side kiosk. The
            early days were tough — rainy mornings, long nights, and lots of
            trial and error.
          </p>
          <p className="text-gray-600 text-base max-w-xl mx-auto md:mx-0">
            But our love for brewing the perfect cup kept us going. Slowly, word
            spread. Our regulars became friends. And our dream of creating a
            space where community and coffee thrive finally took shape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
