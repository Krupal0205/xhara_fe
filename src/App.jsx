import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
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
import Contact from './components/Contact';
import Gifting from './components/Gifting';
import AdminPanel from './components/AdminPanel';

function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <AboutSection />
      <LuxuryPackaging />
      <ReviewsSection />
      <WhySilverlab />
      <FeaturesSection />
      <BlogSection />
    </>
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isContactPage = location.pathname === '/contact';
  const isAdminPage = location.pathname === '/admin';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!isAdminPage && <Header onContactClick={() => navigate('/contact')} />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact onBack={() => navigate('/')} />} />
          <Route path="/gifting" element={<Gifting />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default App;

