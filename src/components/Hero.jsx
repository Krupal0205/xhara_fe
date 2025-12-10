import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import heroVideo from '../image/WhatsApp Video 2025-12-07 at 18.54.28_4625a532.mp4';

const Hero = () => {
  const categories = [
    {
      name: 'Rings',
      icon: <img src="https://www.silverlab.in/cdn/shop/files/diamond-ring.png?v=1749487024&width=150" alt="Ring" className='w-20 h-20 color-white' />
    },
    {
      name: 'pendant chain',
      icon: <img src="https://www.silverlab.in/cdn/shop/files/jewelry.png?v=1749487024&width=150" alt="Pendant Chain" className='w-20 h-20 color-white' />
    },
    {
      name: 'Studs',
      icon: <img src="https://www.silverlab.in/cdn/shop/files/earring.png?v=1749487025&width=150" alt="Studs" className='w-20 h-20 color-white' />
    },
    {
      name: 'Bracelets',
      icon: <img src="https://www.silverlab.in/cdn/shop/files/bracelet.png?v=1749488485&width=150" alt="Bracelets" className='w-20 h-20 color-white' />
    }
  ];

  return (
    <>
      {/* Video Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* Pick Your Sparkle Style Section */}
      <section className="bg-black py-16">
  <div className="max-w-7xl mx-auto px-4">
    
    {/* Title */}
    <h2 className="text-3xl font-semibold text-white mb-12">
      Pick Your Sparkle Style
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

      {categories.map((category, index) => (
        <div
          key={index}
          className="
            bg-[#1B1B1B]
            transition-all
            rounded-md
            flex flex-col
            items-center
            justify-between
            py-14
            cursor-pointer
            shadow-sm
          "
        >
          {/* Icon */}
          <div className="flex items-center justify-center mb-10">
            {category.icon}
          </div>

          {/* Text + Arrow */}
          <div className="flex items-center gap-2">
            <span className="text-white text-base tracking-wide">
              {category.name}
            </span>
            <FiArrowRight className="text-white w-5 h-5" />
          </div>
        </div>
      ))}

     </div>
   </div>
 </section>

      {/* HER, HIM, SPRING SPARKLE, GIFTING Section */}
      <section className="bg-black">
        <div className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide" style={{ scrollBehavior: 'smooth' }}>
          <div className="flex gap-6 min-w-max px-4 md:px-6">
            {/* HER Section */}
            <div className="relative h-[300px] md:h-[400px] w-[300px] md:w-[400px] flex-shrink-0 overflow-hidden group cursor-pointer transition-all duration-500">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(https://www.silverlab.in/cdn/shop/files/MBH3516_large.jpg?v=1751286944)`
                }}
              >
                {/* Dark Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-500">HER</h3>
              </div>
            </div>

            {/* HIM Section */}
            <div className="relative h-[300px] md:h-[400px] w-[300px] md:w-[400px] flex-shrink-0 overflow-hidden group cursor-pointer transition-all duration-500">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(https://www.silverlab.in/cdn/shop/files/good-faces-3shofT2lVBk-unsplash_large.jpg?v=1719818059)`
                }}
              >
                {/* Dark Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-500">HIM</h3>
              </div>
            </div>

            {/* SPRING SPARKLE Section */}
            <div className="relative h-[300px] md:h-[400px] w-[300px] md:w-[400px] flex-shrink-0 overflow-hidden group cursor-pointer transition-all duration-500">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(https://www.silverlab.in/cdn/shop/files/B6C4122F-AB13-4DD8-9565-F11E36F73950_large.png?v=1747740876)`
                }}
              >
                {/* Dark Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold text-white text-center px-4 group-hover:scale-110 transition-transform duration-500">SPRING SPARKLE</h3>
              </div>
            </div>

            {/* GIFTING Section */}
            <div className="relative h-[300px] md:h-[400px] w-[300px] md:w-[400px] flex-shrink-0 overflow-hidden group cursor-pointer transition-all duration-500">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(https://www.silverlab.in/cdn/shop/files/cat-han-BJ3grTerqY4-unsplash_large.jpg?v=1724148564)`
                }}
              >
                {/* Dark Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-500">GIFTING</h3>
              </div>
            </div>
          </div>
        </div>
        {/* SILVERLAB Logo Row - Scrolling animation */}
        <div className="bg-black py-6 w-full overflow-hidden">
          <div className="flex animate-scroll">
            {Array.from({ length: 15 }).map((_, i) => (
              <h4 
                key={i}
                className="text-2xl md:text-3xl lg:text-4xl text-white tracking-wider whitespace-nowrap mx-4 md:mx-8"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
              >
                Xhara
              </h4>
            ))}
          </div>
        </div>
      </section>
 
      </>
    );
  };
  
  export default Hero;

