export default function HeroSection() {
  return (
    <section
      className="relative bg-blue-50 py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('./img/hero-bg.jpg')" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center  bg-opacity-50 p-10 rounded-lg">
        <div className="md:w-1/2 text-center md:text-left px-6 py-8">
          <span className="text-teal-500 uppercase tracking-wide text-sm font-semibold">
            Eiusmod tempor incididunt
          </span>
          <h2 className="text-6xl font-bold text-gray-900 mt-2">
            Take the world's best quality{" "}
            <span className="text-black">Treadment</span>
          </h2>
          <a
            href="#"
            className="mt-6 inline-block bg-teal-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
