import { Phone, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
      }}
    >
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 text-shadow font-poppins">
          Chigwell King
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-6 text-shadow font-poppins">
          Kebab & Pizza
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-white mb-12 text-shadow font-light">
          Freshly Grilled. Always Local.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#menu"
            className="bg-primary hover:bg-red-800 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
          >
            See Menu
          </a>
          <a
            href="tel:02085555555"
            className="bg-accent hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about">
          <ChevronDown className="w-8 h-8 text-white" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
