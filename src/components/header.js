import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaMarker,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isMobile = windowWidth < 1024;

  // Navigation items
  const navItems = ["HOME", "ABOUT", "SERVICES", "PAGES", "NEWS", "CONTACT"];

  return (
    <header>
      {/* Top Header - Teal background (hidden on mobile) */}
      <div
        className={`bg-teal-800 py-3 text-white ${
          isMobile ? "hidden" : "block"
        }`}
      >
        <div className="container mx-auto px-4 md:px-10 flex flex-wrap justify-between md:justify-evenly items-center">
          <div className="flex flex-wrap items-center space-x-6">
            <div className="flex items-center">
              <FaPhone className="mr-2" />
              <span>1-677-124-44227</span>
            </div>
            <div className="flex items-center">
              <FaMarker className="mr-2" />
              <span>Los Angeles Gournadi, 1230 Bariasl</span>
            </div>
            <div className="flex items-center">
              <FaClock className="mr-2" />
              <span>Mon to Sat 9:00am to 18:00pm</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-white hover:text-gray-200">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              <FaDribbble />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - White background */}
      <div className="bg-white py-6 md:py-10 shadow-sm">
        <div className="container mx-auto px-4 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">AESTHETIC</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav>
              <ul className="flex space-x-10">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={item}
                      className={`font-bold ${
                        activeNavItem === item
                          ? "text-gray-900 border-b-2 border-teal-500 pb-2"
                          : "text-gray-700 hover:text-teal-500"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Appointment Button */}
          <div className="hidden lg:block">
            <a
              href="#"
              className="border-2 border-teal-500 text-black hover:bg-teal-500 hover:text-white px-8 py-3 uppercase transition-colors duration-300 font-medium rounded-md"
            >
              Appointment
            </a>
          </div>

          {/* Improved Mobile Menu Button - Corrected Size */}
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300 w-14 h-14"
              aria-label="Toggle menu"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out fixed top-0 left-0 w-full h-full bg-white z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ overflowY: "auto" }}
        >
          {/* Mobile Menu Header with Close Button */}
          <div className="flex justify-between items-center p-4 border-b border-dashed border-yellow-300 bg-yellow-50">
            <div className="text-2xl font-bold text-gray-900">AESTHETIC</div>
            <button
              onClick={toggleMenu}
              className="flex items-center justify-center p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300 w-14 h-14"
            >
              <FaTimes className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="px-6">
            <nav className="py-4">
              <ul className="space-y-5">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={
                        activeNavItem === item
                          ? "flex items-center text-teal-500 border-l-4 border-teal-500 pl-3 text-lg font-bold"
                          : "block pl-5 text-gray-700 hover:text-teal-500 text-lg font-medium"
                      }
                    >
                      {activeNavItem === item ? (
                        <span className="border-l-4 border-teal-500 pl-2">
                          {item}
                        </span>
                      ) : (
                        item
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 my-6"></div>

            {/* Mobile Contact Info - Made to match the screenshot */}
            <div className="space-y-4 py-4 text-lg">
              <div className="flex items-center text-gray-700">
                <span className="text-teal-500 mr-3">
                  <FaPhone />
                </span>
                <span>1-677-124-44227</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-teal-500 mr-3">
                  <FaMapMarkerAlt />
                </span>
                <span>Los Angeles Gournadi, 1230 Bariasl</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="text-teal-500 mr-3">
                  <FaClock />
                </span>
                <span>Mon to Sat 9:00am to 18:00pm</span>
              </div>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex space-x-6 mt-6 mb-10">
              <a href="#" className="text-gray-600 hover:text-teal-500">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-teal-500">
                <FaDribbble size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
