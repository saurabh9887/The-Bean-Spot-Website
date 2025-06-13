import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Absolutely love this café! The atmosphere is warm and inviting, and the coffee is top-notch.",
      name: "Riya Patel",
      role: "Food Blogger",
      avatar: "/assets/img/PP1.jpg",
    },
    {
      text: "Their hazelnut latte is the best I’ve had. Plus, the staff makes you feel at home!",
      name: "Aarav Mehra",
      role: "UI/UX Designer",
      avatar: "/assets/img/PP2.jpg",
    },
    {
      text: "Perfect place for weekend brunches. I never miss their special croissants.",
      name: "Isha Sharma",
      role: "Photographer",
      avatar: "/assets/img/PP3.jpg",
    },
    {
      text: "Such a cozy spot to unwind or catch up with friends. Highly recommended!",
      name: "Neha Kulkarni",
      role: "Entrepreneur",
      avatar: "/assets/img/PP4.jpg",
    },
    {
      text: "I go here every morning before work. Their cappuccino is a daily delight!",
      name: "Rahul Desai",
      role: "Marketing Analyst",
      avatar: "/assets/img/PP6.jpg",
    },
    {
      text: "From the decor to the service, everything feels thoughtfully curated. Love this place!",
      name: "Tanvi Joshi",
      role: "Travel Blogger",
      avatar: "/assets/img/PP5.jpg",
    },
  ];

  return (
    <section className="bg-[#fefefe] py-16 px-4">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-3xl text-center font-bold mb-10">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((review, index) => (
            <div  
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between min-h-[160px]"
            >
              <p className="text-gray-600 italic mb-6">“{review.text}”</p>

              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
