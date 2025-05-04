import React from 'react';


import Header from './components/Header';
import LandingPage from './LandingPage';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main>
        <LandingPage />
        {/* <Hero />
        <Services />
        <Features />
        <Pricing />
        <Testimonials />
        <About />
        <Cta /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;