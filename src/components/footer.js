import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-6 flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left">
        {/* Logo */}
        <div className="mb-4 lg:mb-0">
          <a href="#">
            <img
              src="/img/footer-logo.png"
              alt="Logo"
              className="w-32 mx-auto lg:mx-0"
            />
          </a>
        </div>

        {/* Newsletter */}
        <div className="w-full lg:w-auto">
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md text-gray-900 w-full sm:w-64"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 text-lg mt-4 lg:mt-0">
          <a href="#" className="hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaDribbble />
          </a>
        </div>
      </div>

      {/* Footer Links & Contact */}
      <div className="container mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
        {/* Company */}
        <div>
          <h5 className="text-white text-lg font-semibold mb-2">Company</h5>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Departments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Find a Doctor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                News
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-white text-lg font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-blue-400">
                Facial Fillers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Breast Surgery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Body Lifts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Face & Neck
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Fat Reduction
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-white text-lg font-semibold mb-2">Contact Us</h5>
          <ul className="space-y-1">
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <FaMapMarkerAlt /> Los Angeles, 1230 Bariasl
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <FaPhone /> 1-677-124-44227
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-2">
              <FaEnvelope /> Support@gmail.com
            </li>
          </ul>
        </div>

        {/* Google Map */}
        <div>
          <h5 className="text-white text-lg font-semibold mb-2">Find Us</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.305462977965!2d-74.13283844036356!3d41.02757295168286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e440473470d7%3A0xcaf503ca2ee57958!2sSaddle%20River%2C%20NJ%2007458%2C%20USA!5e0!3m2!1sen!2sbd!4v1575917275626!5m2!1sen!2sbd"
            height="160"
            className="w-full rounded-lg"
            allowFullScreen
          />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-center items-center">
          <p className="text-center">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
