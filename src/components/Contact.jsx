import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
            Visit Us
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Come visit us or give us a call to place your order
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">
                Contact Information
              </h3>

              {/* Location */}
              <div className="flex items-start space-x-3 sm:space-x-4 mb-6">
                <div className="bg-primary/10 dark:bg-accent/10 p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base break-words">
                    Chigwell, East London
                    <br />
                    IG7 6BH, United Kingdom
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 sm:space-x-4 mb-6">
                <div className="bg-primary/10 dark:bg-accent/10 p-3 rounded-full flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">
                    Phone
                  </h4>
                  <a
                    href="tel:02085555555"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors text-sm sm:text-base break-words"
                  >
                    0208 555 5555
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-primary/10 dark:bg-accent/10 p-3 rounded-full flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary dark:text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">
                    Opening Hours
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base break-words">
                    Monday – Sunday
                    <br />
                    11:00 AM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary to-red-800 rounded-lg shadow-lg p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 font-poppins">
                Ready to Order?
              </h3>
              <p className="mb-6 text-sm sm:text-base">
                Call us now and we'll have your food ready for pickup!
              </p>
              <a
                href="tel:02085555555"
                className="inline-block bg-accent hover:bg-yellow-500 text-gray-900 font-semibold px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base break-words"
              >
                Call Now: 0208 555 5555
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-full min-h-[400px]">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full">
              <div className="relative h-full">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Map placeholder"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center">
                    <MapPin className="w-12 h-12 text-primary dark:text-accent mx-auto mb-3" />
                    <p className="text-gray-900 dark:text-white font-semibold text-lg">
                      Chigwell, East London
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      Map integration placeholder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
