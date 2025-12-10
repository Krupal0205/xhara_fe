import React, { useState } from 'react';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaFacebook, FaPinterest, FaInstagram, FaYoutube } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const menuItems = [
    {
      name: 'Women',
      submenu: [
        "Women's Explore all",
        "Exclusive Designs",
        "Women's Bracelets",
        "Women's Chain",
        "Women's Rings",
        "Women's Earrings"
      ]
    },
    {
      name: 'Men',
      submenu: [
        "Men's Explore all",
        "Men's Chain"
      ]
    },
    { name: 'Gifting' },
    { name: 'Contact' }
  ];

  return (
    <header className="bg-black sticky top-0 z-50">
      {/* Main Header */}
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between relative">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="text-gray-200 hover:text-white font-medium py-2 flex items-center gap-1 text-xs xl:text-sm">
                  {item.name}
                  {item.submenu && <FiChevronDown className="w-3 h-3" />}
                </button>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-black border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <ul className="py-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white">
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>
          {/* Logo - Centered */}
          <div className="flex items-center absolute left-1/2 -translate-x-1/2">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-200 tracking-wider" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>
              Xhara
            </h1>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            <button className="p-1.5 sm:p-2 hover:bg-gray-900 rounded-full transition-colors">
              <FiSearch className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200" />
            </button>
            <button 
              className="p-1.5 sm:p-2 hover:bg-gray-900 rounded-full relative transition-colors"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <FiShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">0</span>
            </button>
            <button className="hidden sm:block p-1.5 sm:p-2 hover:bg-gray-900 rounded-full transition-colors">
              <FiUser className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200" />
            </button>
            <button 
              className="lg:hidden p-1.5 sm:p-2 hover:bg-gray-900 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FiX className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200" />
              ) : (
                <FiMenu className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-black">
          <nav className="container mx-auto px-3 sm:px-4 py-4">
            {menuItems.map((item, index) => (
              <div key={index} className="py-2">
                <a href="#" className="text-gray-200 font-medium py-2 flex items-center gap-2 text-sm sm:text-base">
                  {item.name}
                  {item.submenu && <FiChevronDown className="w-4 h-4" />}
                </a>
                {item.submenu && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href="#" className="text-xs sm:text-sm text-gray-400 block py-1 hover:text-gray-200">
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Cart Dropdown */}
      {isCartOpen && (
        <div className="absolute top-full right-2 sm:right-4 mt-2 w-[calc(100vw-1rem)] sm:w-80 max-w-sm bg-black border border-gray-700 shadow-xl rounded-lg p-4 z-50">
          <div className="text-center py-6 sm:py-8">
            <p className="text-gray-200 mb-4 text-sm sm:text-base">Item added to your cart</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors text-sm sm:text-base">
                View cart
              </button>
              <button className="px-4 py-2 border border-gray-600 text-gray-200 rounded hover:bg-gray-900 transition-colors text-sm sm:text-base">
                Check out
              </button>
            </div>
            <button 
              className="mt-4 text-xs sm:text-sm text-gray-400 hover:text-gray-200 transition-colors"
              onClick={() => setIsCartOpen(false)}
            >
              Continue shopping
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

