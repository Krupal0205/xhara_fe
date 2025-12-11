import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaFacebook, FaPinterest, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../image/logo.png';

const Header = ({ onContactClick }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isWomenHovered, setIsWomenHovered] = useState(false);
  const [isMenHovered, setIsMenHovered] = useState(false);
  const [isWomenClicked, setIsWomenClicked] = useState(false);
  const [isMenClicked, setIsMenClicked] = useState(false);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const womenDropdownRef = useRef(null);
  const menDropdownRef = useRef(null);
  const loginModalRef = useRef(null);

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
      if (loginModalRef.current && !loginModalRef.current.contains(event.target)) {
        const userButton = event.target.closest('button');
        if (!userButton || !userButton.querySelector('svg[class*="FiUser"]')) {
          setIsLoginOpen(false);
        }
      }
    };

    if (isWomenClicked || isMenClicked || isLoginOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isWomenClicked, isMenClicked, isLoginOpen]);

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
            <button 
              className="p-1.5 sm:p-2 hover:bg-gray-900 rounded-full transition-colors"
              onClick={() => setIsLoginOpen(!isLoginOpen)}
            >
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

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4">
          <div 
            ref={loginModalRef}
            className="bg-gray-900 rounded-lg w-full max-w-md p-8 relative"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setIsLoginOpen(false);
                setShowCodeInput(false);
                setEmail('');
                setCode('');
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={logo} 
                alt="Silverlab Logo" 
                className="h-8 w-auto object-contain"
              />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-white mb-1 " style={{ fontFamily: "'Poppins', sans-serif" }}>
              {showCodeInput ? 'Enter verification code' : 'Sign in'}
            </h2>
            <p className="text-gray-400 text-sm mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {showCodeInput 
                ? `We sent a code to ${email}. Please enter it below.`
                : 'Sign in or create an account'}
            </p>

            {/* Sign in Options */}
            <div className="space-y-4">
              {!showCodeInput ? (
                <>
                  {/* Sign in with shop button */}
                  <button className="w-full bg-[#4524db] text-white font-medium py-3 px-4 rounded transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Sign in with shop
                  </button>

                  {/* Google Sign in */}
                  <button className="w-full bg-white hover:bg-gray-100 text-black font-medium py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 border-t border-gray-700"></div>
                    <span className="text-gray-400 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>or</span>
                    <div className="flex-1 border-t border-gray-700"></div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-gray-500 transition-colors"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                  </div>

                  {/* Continue Button */}
                  <button 
                    onClick={() => {
                      if (email.trim()) {
                        setShowCodeInput(true);
                      }
                    }}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded transition-colors" 
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Continue
                  </button>
                </>
              ) : (
                <>
                  {/* Code Input */}
                  <div>
                    <label className="block text-gray-300 text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Verification Code
                    </label>
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded focus:outline-none focus:border-gray-500 transition-colors text-center text-2xl tracking-widest"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    />
                    <p className="text-gray-400 text-xs mt-2 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Didn't receive the code? <button className="text-blue-400 hover:text-blue-300 underline" onClick={() => {/* Resend logic */}}>Resend</button>
                    </p>
                  </div>

                  {/* Verify Button */}
                  <button 
                    onClick={() => {
                      if (code.length === 6) {
                        // Check for admin credentials
                        if (email.toLowerCase() === 'admin@gmail.com' && code === '123456') {
                          // Admin login successful
                          localStorage.setItem('adminLoggedIn', 'true');
                          setIsLoginOpen(false);
                          setShowCodeInput(false);
                          setEmail('');
                          setCode('');
                          navigate('/admin');
                        } else {
                          // Regular user verification
                          console.log('Verifying code:', code);
                          setIsLoginOpen(false);
                          setShowCodeInput(false);
                          setEmail('');
                          setCode('');
                        }
                      }
                    }}
                    disabled={code.length !== 6}
                    className={`w-full font-medium py-3 px-4 rounded transition-colors ${
                      code.length === 6
                        ? 'bg-gray-800 hover:bg-gray-700 text-white'
                        : 'bg-gray-900 text-gray-500 cursor-not-allowed'
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Verify
                  </button>
                </>
              )}
            </div>

            {/* Footer Links */}
            <div className="mt-8 pt-6 border-t border-gray-700 flex justify-center gap-6">
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Privacy policy
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Terms of service
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

