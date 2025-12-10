import React from 'react';
import aboutVideo from '../image/832e37d57af248858c09914907f9845b.HD-720p-2.1Mbps-31452296.mp4';
import commitmentImage from '../image/Screenshot 2025-12-09 223517.png';

const AboutSection = () => {
  return (
    <section className="bg-black pt-12 md:pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Welcome to Silverlab</h2>
          <p className="text-white text-lg leading-relaxed mb-8">
            Our Motto <strong>"To bring you happiness and to spread happiness"</strong>, is at the core of everything we do, 
            which is why we offer fast shipping in every corner of india, listen to any feedback we receive, 
            and respond to your questions and requests as quickly as we can. Like the whole team of silver lab Team 
            always goes the extra mile and loves finding the perfect solution to make you happy.
          </p>
          <button className="px-6 py-3 bg-black text-white border border-white rounded-lg hover:bg-gray-900 transition-colors mb-8">
            Learn more
          </button>
        </div>
      </div>
      
      {/* Video Section - Full Screen */}
      <div className="w-full mt-8">
        {/* Full Screen Video */}
        <div className="relative w-full h-screen min-h-[600px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={aboutVideo} type="video/mp4" />
          </video>
        </div>

        {/* Scrolling XHARA Text - Black Bar Below Video */}
        <div className="bg-black py-4 overflow-hidden">
          <div className="flex animate-scroll">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="text-xl md:text-2xl font-bold text-white whitespace-nowrap mx-6">
                XHARA
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Our Commitments Section */}
      <div className="bg-black py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className='text-center'>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 ">Our commitments</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Commitment 1: Shine that never fades */}
            <div className="text-center">
              <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <img src="https://www.silverlab.in/cdn/shop/files/Untitled_design_3.png?v=1748846539&width=150" alt="Shine that never fades" className='w-28 h-28 rounded-full' />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Shine that never fades</h3>
              <p className="text-white">
                Just like your traditions, it stays strong and beautiful through generations.
              </p>
            </div>

            {/* Commitment 2: Exceptional quality */}
            <div className="text-center">
              <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <img src="https://www.silverlab.in/cdn/shop/files/WEF.png?v=1721455581&width=150" alt="Exceptional quality" className='w-28 h-28 rounded-full ' />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Exceptional quality</h3>
              <p className="text-white">
                quality that speaks for itself
              </p>
            </div>

            {/* Commitment 3: Certified products */}
            <div className="text-center">
              <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <img src="https://www.silverlab.in/cdn/shop/files/Untitled-1.png?v=1721455581&width=150" alt="Certified products" className='w-28 h-28 rounded-full' />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Certified products</h3>
              <p className="text-white">
                All articles are certified by trusted entities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section Below Commitments */}
      <div className="bg-black py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <img 
              src={commitmentImage} 
              alt="Commitment showcase" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

