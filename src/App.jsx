import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AboutSection from './components/AboutSection';
import LuxuryPackaging from './components/LuxuryPackaging';
import ReviewsSection from './components/ReviewsSection';
import WhySilverlab from './components/WhySilverlab';
import FeaturesSection from './components/FeaturesSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <AboutSection />
        <LuxuryPackaging />
        <ReviewsSection />
        <WhySilverlab />
        <FeaturesSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

