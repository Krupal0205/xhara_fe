import React from 'react';
import { FaFacebook, FaPinterest, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Xhara
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">
              Premium 925 Sterling Silver Jewelry
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaPinterest className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">Newsletter</h4>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
              Subscribe to get updates on new collections and exclusive offers.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 sm:px-4 py-2 bg-gray-900 border border-gray-700 rounded text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black rounded text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Xhara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
