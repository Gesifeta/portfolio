import React from 'react';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Build Your Professional 
              <span className="text-blue-600 block">Portfolio Website</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Showcase your work and attract clients with our professional multi-tenant portfolio platform. Easy to customize, mobile-friendly, and built for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Pricing
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-${i * 100 + 200}`}>
                    {/* Customer avatars */}
                  </div>
                ))}
              </div>
              <p className="ml-3 text-sm text-gray-600">
                <span className="font-semibold">1,000+</span> professionals trust us
              </p>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
              <img 
                src="https://images.pexels.com/photos/5691698/pexels-photo-5691698.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Portfolio Dashboard Preview" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -top-4 -right-4 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold">
              Modern Design
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-32 h-32 rounded-full bg-purple-200 opacity-30 blur-2xl"></div>
    </section>
  );
};

export default Hero;