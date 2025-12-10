import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaFacebook, FaPinterest, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../image/logo.png';

const Header = ({ onContactClick }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWomenHovered, setIsWomenHovered] = useState(false);
  const [isMenHovered, setIsMenHovered] = useState(false);
  const [isWomenClicked, setIsWomenClicked] = useState(false);
  const [isMenClicked, setIsMenClicked] = useState(false);
  const womenDropdownRef = useRef(null);
  const menDropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (womenDropdownRef.current && !womenDropdownRef.current.contains(event.target)) {
        const womenButton = event.target.closest('button');
        if (!womenButton || !womenButton.textContent?.includes('Women')) {
          setIsWomenClicked(false);
          setIsWomenHovered(false);
        }
      }
      if (menDropdownRef.current && !menDropdownRef.current.contains(event.target)) {
        const menButton = event.target.closest('button');
        if (!menButton || !menButton.textContent?.includes('Men')) {
          setIsMenClicked(false);
          setIsMenHovered(false);
        }
      }
    };

    if (isWomenClicked || isMenClicked) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isWomenClicked, isMenClicked]);

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
    <header className="bg-black sticky top-0 z-50 ">
      {/* Main Header */}
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between relative">
          {/* Left Side - Mobile: Hamburger + Logo, Desktop: Navigation */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Mobile Hamburger Menu */}
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

            {/* Logo - Left on Mobile, Centered on Desktop */}
            <div className="flex items-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
              <button
                onClick={() => {
                  navigate('/');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img 
                  src={logo} 
                  alt="Xhara Logo" 
                  className="h-3 sm:h-4 md:h-5 lg:h-6 w-auto object-contain"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {menuItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  onMouseEnter={() => {
                    if (item.name === 'Women') setIsWomenHovered(true);
                    if (item.name === 'Men') setIsMenHovered(true);
                  }}
                  onMouseLeave={() => {
                    if (item.name === 'Women' && !isWomenClicked) setIsWomenHovered(false);
                    if (item.name === 'Men' && !isMenClicked) setIsMenHovered(false);
                  }}
                >
                  <button 
                    className="text-gray-200 hover:text-white font-medium py-2 flex items-center gap-1 text-xs xl:text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                    onClick={(e) => {
                      e.preventDefault();
                      if (item.name === 'Contact' && onContactClick) {
                        onContactClick();
                      } else if (item.name === 'Gifting') {
                        navigate('/gifting');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      } else if (item.name === 'Women') {
                        setIsWomenClicked(!isWomenClicked);
                        setIsWomenHovered(!isWomenClicked);
                      } else if (item.name === 'Men') {
                        setIsMenClicked(!isMenClicked);
                        setIsMenHovered(!isMenClicked);
                      }
                    }}
                  >
                    {item.name}
                    {item.submenu && <FiChevronDown className="w-3 h-3" />}
                  </button>
                  {item.submenu && item.name !== 'Women' && item.name !== 'Men' && (
                    <div className="absolute top-full left-0 mt-0 bg-black border-t border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48">
                      <ul className="py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
          </div>

          {/* Right Icons - Search, Shopping Cart, Login */}
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
            <button className="p-1.5 sm:p-2 hover:bg-gray-900 rounded-full transition-colors">
              <FiUser className="w-4 h-4 sm:w-5 sm:h-5 text-gray-200" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Women Dropdown - Full Width */}
      {(isWomenHovered || isWomenClicked) && (
        <div 
          ref={womenDropdownRef}
          className="hidden lg:block absolute top-full left-0 w-full bg-black transition-all duration-200 z-50 h-[600px]"
          onMouseEnter={() => setIsWomenHovered(true)}
          onMouseLeave={() => {
            if (!isWomenClicked) setIsWomenHovered(false);
          }}
        >
          <div className="container mx-auto px-3 sm:px-4 md:px-6">
            <div className="flex">
              {/* Left Side - Menu Items */}
              <div className="w-1/2 py-6 px-6 mt-[50px] ml-[100px]">
                <ul className="space-y-3">
                  {menuItems.find(item => item.name === 'Women')?.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href="#" className="block text-sm text-gray-200 hover:text-white transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right Side - Product Image */}
              <div className="w-1/2 bg-black relative overflow-hidden min-h-[300px] mt-[50px]">
                <img 
                  src="https://i.pinimg.com/1200x/f5/4e/f0/f54ef0c0dc660f63a786a994a09bb6c8.jpg" 
                  alt="Silver Ring" 
                  className="w-[400px] h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Men Dropdown - Full Width */}
      {(isMenHovered || isMenClicked) && (
        <div 
          ref={menDropdownRef}
          className="hidden lg:block absolute top-full left-0 w-full bg-black transition-all duration-200 z-50 h-[600px]"
          onMouseEnter={() => setIsMenHovered(true)}
          onMouseLeave={() => {
            if (!isMenClicked) setIsMenHovered(false);
          }}
        >
          <div className="container mx-auto px-3 sm:px-4 md:px-6">
            <div className="flex">
              {/* Left Side - Menu Items */}
              <div className="w-1/2 py-6 px-6 mt-[50px] ml-[100px]">
                <ul className="space-y-3">
                  {menuItems.find(item => item.name === 'Men')?.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href="#" className="block text-sm text-gray-200 hover:text-white transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right Side - Product Image */}
              <div className="w-1/2 bg-black relative overflow-hidden min-h-[300px] mt-[50px]">
                <img 
                  src="https://i.pinimg.com/1200x/9a/57/56/9a57567cb4fca4ba94c92ed7b4b2a88a.jpg" 
                  alt="Men's Chain" 
                  className="w-[400px] h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-black">
          <nav className="container mx-auto px-3 sm:px-4 py-4">
            {menuItems.map((item, index) => (
              <div key={index} className="py-2">
                <a 
                  href="#" 
                  className="text-gray-200 font-medium py-2 flex items-center gap-2 text-sm sm:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.name === 'Contact' && onContactClick) {
                      onContactClick();
                      setIsMenuOpen(false);
                    } else if (item.name === 'Gifting') {
                      navigate('/gifting');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }
                  }}
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.name}
                  {item.submenu && <FiChevronDown className="w-4 h-4" />}
                </a>
                {item.submenu && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href="#" className="text-xs sm:text-sm text-gray-400 block py-1 hover:text-gray-200" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
            <p className="text-gray-200 mb-4 text-sm sm:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>Item added to your cart</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors text-sm sm:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                View cart
              </button>
              <button className="px-4 py-2 border border-gray-600 text-gray-200 rounded hover:bg-gray-900 transition-colors text-sm sm:text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Check out
              </button>
            </div>
            <button 
              className="mt-4 text-xs sm:text-sm text-gray-400 hover:text-gray-200 transition-colors"
              onClick={() => setIsCartOpen(false)}
              style={{ fontFamily: "'Poppins', sans-serif" }}
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

