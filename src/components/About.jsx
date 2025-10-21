const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-poppins">
              About Us
            </h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Family-run takeaway serving Chigwell and surrounding areas. From
              juicy kebabs and wraps to crispy pizzas and burgers — always
              cooked fresh and made with care.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We pride ourselves on using quality ingredients and traditional
              recipes to bring you the authentic taste of Mediterranean cuisine
              right here in East London.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary dark:text-accent">
                  10+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Years Serving
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary dark:text-accent">
                  50+
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Menu Items
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary dark:text-accent">
                  ★★★★★
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Customer Rated
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
                alt="Restaurant food"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
