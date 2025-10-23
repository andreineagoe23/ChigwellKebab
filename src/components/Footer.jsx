import { Facebook, Instagram, Twitter, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4 font-poppins">
              Chigwell King
            </h3>
            <p className="text-gray-400 mb-4">
              Serving Chigwell with the finest kebabs, pizzas, and grills since
              2015.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-poppins">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 Chigwell, East London</li>
              <li>
                📞{" "}
                <a
                  href="tel:02085555555"
                  className="hover:text-accent transition-colors"
                >
                  0208 555 5555
                </a>
              </li>
              <li>🕓 Mon–Sun: 11am–11pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center flex-wrap gap-1 text-sm sm:text-base break-words">
            © 2025 Chigwell King Kebab & Pizza | Demo website by
            <span className="text-accent font-semibold ml-1">Enso Digital</span>
            <Heart className="w-4 h-4 text-primary inline mx-1" />
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-2 break-words">
            This is a portfolio demonstration website
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
