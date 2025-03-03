import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar, FaPlay } from "react-icons/fa";

const ConsultationSection = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section className="relative py-12 px-6 sm:px-12 bg-gray-100 flex flex-col lg:flex-row justify-center items-center gap-12">
      {/* Consultation Form */}
      <div className="relative z-10 max-w-md w-full bg-white p-6 shadow-lg rounded-lg -mt-12">
        <div className="text-center mb-6">
          <span className="text-blue-500 uppercase text-sm font-semibold">
            REQUEST FOR YOUR
          </span>
          <h2 className="text-2xl font-bold">Consultation</h2>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md"
          />
          <div className="relative">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select Date"
              className="w-full p-3 border rounded-md"
            />
            <FaCalendar className="absolute right-4 top-4 text-gray-400" />
          </div>
          <select className="w-full p-3 border rounded-md">
            <option>Type of service</option>
            <option>Advanced equipment</option>
            <option>Qualified doctors</option>
            <option>Certified services</option>
            <option>Emergency care</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
          >
            Book Appointment
          </button>
        </form>
      </div>

      {/* Consultation Info */}
      <div className="max-w-lg text-center lg:text-left">
        <div>
          <span className="text-blue-500 uppercase text-sm font-semibold">
            Welcome to Aesthetic
          </span>
          <h2 className="text-2xl font-bold">
            Find Best Doctors With <b>AESTHETIC</b>
          </h2>
          <p className="text-gray-600 mt-2">
            30 Years of experience in Cosmetic Surgery. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
          </p>
        </div>
        <div
          className="relative w-full h-56 bg-cover bg-center rounded-lg mt-6"
          style={{ backgroundImage: "url('/img/consultation-video.jpg')" }}
        >
          <a
            href="https://www.youtube.com/watch?v=PXsuI67s2AA"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl rounded-lg hover:bg-opacity-70"
          >
            <FaPlay />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
