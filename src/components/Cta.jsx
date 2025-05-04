import React from 'react';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';

const Cta= () => {
  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to showcase your portfolio?</h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Join thousands of professionals who trust our platform to display their work and grow their business.
          </p>
          
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-12">
            <h3 className="text-xl font-semibold mb-4">Start your 14-day free trial</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                className="w-full justify-center"
              >
                Get Started <ArrowRight size={18} className="ml-2" />
              </Button>
            </form>
            <p className="text-sm mt-4 text-blue-100">
              No credit card required. Cancel anytime.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-blue-600 bg-gray-200" />
                ))}
              </div>
              <p className="ml-3 text-sm">
                Trusted by over <span className="font-semibold">10,000</span> professionals
              </p>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <p className="ml-3 text-sm">
                <span className="font-semibold">4.9/5</span> from 500+ reviews
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-800 to-transparent opacity-20"></div>
    </section>
  );
};

export default Cta;