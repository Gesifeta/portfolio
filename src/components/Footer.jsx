import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, PhoneCall, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <a href="#" className="text-2xl font-bold text-white">Portfolio<span className="text-blue-500">Pro</span></a>
            </div>
            <p className="mb-4 text-gray-400">
              Create stunning portfolio websites to showcase your work and attract new clients. Our easy-to-use platform helps professionals stand out online.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR Compliance</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Data Processing</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail size={20} className="mr-3 text-blue-500 flex-shrink-0 mt-1" />
                <span>support@portfoliopro.com</span>
              </li>
              <li className="flex items-start">
                <PhoneCall size={20} className="mr-3 text-blue-500 flex-shrink-0 mt-1" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-blue-500 flex-shrink-0 mt-1" />
                <span>123 Portfolio Street, San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} oromia.dev. All rights reserved.</p>
          <p className="mt-2">
            Designed with <span className="text-red-500">♥</span> for creative professionals worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;