const Menu = () => {
  const menuCategories = [
    {
      title: "Kebabs",
      icon: "🥙",
      items: [
        { name: "Chicken Shish", price: "£9.50" },
        { name: "Lamb Donner", price: "£7.50" },
      ],
      color: "from-red-500 to-red-700",
    },
    {
      title: "Burgers",
      icon: "🍔",
      items: [
        { name: "1/4 Pounder", price: "£4.50" },
        { name: "Messy Burger", price: "£9.00" },
      ],
      color: "from-orange-500 to-orange-700",
    },
    {
      title: "Wraps",
      icon: "🌯",
      items: [
        { name: "Chicken Wrap", price: "£7.00" },
        { name: "Falafel Wrap", price: "£6.00" },
      ],
      color: "from-yellow-500 to-yellow-700",
    },
    {
      title: "Grill Specials",
      icon: "🍖",
      items: [
        { name: "Mix Grill", price: "£38.00" },
        { name: "Chicken Wings", price: "£8.00" },
      ],
      color: "from-red-600 to-red-800",
    },
  ];

  return (
    <section
      id="menu"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-poppins">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our delicious selection of freshly prepared kebabs, burgers,
            wraps, and grill specials
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full"
            >
              {/* Category Header */}
              <div
                className={`bg-gradient-to-r ${category.color} p-6 text-center`}
              >
                <div className="text-5xl mb-3">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white font-poppins">
                  {category.title}
                </h3>
              </div>

              {/* Menu Items */}
              <div className="p-4 sm:p-6">
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex justify-between items-center gap-2"
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base break-words flex-1">
                        {item.name}
                      </span>
                      <span className="text-primary dark:text-accent font-bold text-base sm:text-lg whitespace-nowrap">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is just a taste of what we offer!
          </p>
          <a
            href="tel:02085555555"
            className="inline-block bg-primary hover:bg-red-800 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Call for Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
