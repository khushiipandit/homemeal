import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-10 border-t  border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold text-green-600">HomeMeal <span className="font-normal text-gray-700"> </span></h3>
          <p className="uppercase text-xs sm:text-sm text-[#dfd218]">Your Meal Partner</p>
          <div className="w-12 h-0.5 bg-green-600"></div>
          <p className="text-sm text-white">SCHEDULED MEALS | AFFORDABLE & HEALTHY | TRACK YOUR TIFFIN | COMMUNITY VOTES.</p>
          <div className="space-y-2 text-sm text-[#dfd218]">
            <p className="flex items-center"><span className="material-icons mr-2 text-green-600 text-base sm:text-lg  fa-solid fa-location-dot"></span>Crossings Republik, Ghaziabad, 201016</p>
            <p className="flex items-center"><span className="material-icons mr-2 text-green-600 text-base sm:text-lg fa-solid fa-envelope"></span>contact@HomeMeal.com</p>
            <p><span className="font-semibold fa-solid fa-phone material-icons mr-2 text-green-600 text-base sm:text-lg"></span> +91 7668913401 (Customer Care) </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-0">
          <h3 className="text-lg font-semibold text-white mb-4">HomeMeal Information</h3>
          <div className="w-12 h-0.5 bg-green-600 mb-4"></div>
          <ul className="space-y-2 text-sm text-[#dfd218]">
            {[
              { name: 'Contact us', link: '/contact' },
              { name: 'Shop', link: '/shop' },
              { name: 'Products Offers', link: '#offers' },
              { name: 'Popular Products', link: '#popular-products' }
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <a href={item.link} className="flex items-center hover:text-green-600 transition-colors duration-200">
                  <span className="fa-solid fa-arrow-right mr-2 text-green-600 text-xs"></span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 lg:mt-0">
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <div className="w-12 h-0.5 bg-green-600 mb-4"></div>
          <p className="text-sm text-white mb-4">Subscribe to our newsletter and get 10% off your first purchase</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button 
              type="submit" 
              className="px-4 py-2 text-sm text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-[#dfd218]">
        <p className="text-center sm:text-left mb-4 sm:mb-0">©2025 HomeMeal.com , made with <span className="text-red-500">❤️</span> by SeeSaw, all right reserved</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-green-600 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-green-600 transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
