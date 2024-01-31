import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Developer",
      quote:
        "Work Manager has transformed the way I organize my tasks. It's an indispensable tool for boosting productivity.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Project Manager",
      quote:
        "Our team relies on Work Manager for seamless collaboration and efficient project management. Highly recommended!",
    },
    {
      id: 3,
      name: "Bob Johnson",
      role: "Freelancer",
      quote:
        "As a freelancer, keeping track of my tasks is crucial. Work Manager's simplicity and effectiveness make it my go-to solution.",
    },
  ];

  return (
    <section className="bg-blue-500 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl pt-16 lg:text-5xl font-bold mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 py-16 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-md shadow-md"
            >
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
