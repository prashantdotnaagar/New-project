import React from "react";

const About = () => {
  const testimonials = [
    {
      name: "Catanis Greimar",
      role: "Businesswoman",
      text: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      name: "John Doe",
      role: "Entrepreneur",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    },
    {
      name: "Jane Smith",
      role: "Designer",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Breadcrumb Section */}
      <section
        className="bg-cover bg-center bg-no-repeat py-16 text-center text-white"
        style={{ backgroundImage: "url('./img/breadcrumb-bg.jpg')" }}
      >
        <h2 className="text-4xl font-bold">About Us</h2>
        <div className="text-gray-200 mt-2">
          <a href="/" className="text-blue-300 hover:underline">
            Home
          </a>{" "}
          / <span>About</span>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img
            src="./img/about-video.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold">Welcome to Aesthetic</h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Routine and medical
              care
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Excellence in
              Healthcare
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Building a healthy
              environment
            </li>
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Contact Us
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {[
            { title: "Advanced Equipment", icon: "img/icons/ci-1.png" },
            { title: "Qualified Doctors", icon: "img/icons/ci-2.png" },
            { title: "Certified Services", icon: "img/icons/ci-3.png" },
            { title: "Emergency Care", icon: "img/icons/ci-4.png" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img src={item.icon} alt={item.title} className="mx-auto h-16" />
              <h5 className="text-lg font-semibold mt-4">{item.title}</h5>
              <p className="text-gray-500 mt-2">
                Lorem ipsum amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center">Happy Clients</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-gray-600 italic">“{testimonial.text}”</div>
              <div className="mt-4">
                <h5 className="font-semibold">{testimonial.name}</h5>
                <span className="text-gray-500 text-sm">
                  {testimonial.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
