import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'py-2'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">Portfolio<span className="text-purple-600">Pro</span></a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">Services</a>
          <a onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">Features</a>
          <a onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">Pricing</a>
          <a onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">About</a>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => scrollToSection('cta')}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors py-2">Services</a>
            <a onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors py-2">Features</a>
            <a onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors py-2">Pricing</a>
            <a onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors py-2">About</a>
            <Button 
              variant="primary" 
              size="sm" 
              className="w-full justify-center"
              onClick={() => scrollToSection('cta')}
            >
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;