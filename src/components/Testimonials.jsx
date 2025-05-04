import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';



const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const testimonialRef = useRef(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'UX Designer',
      company: 'CreativeX',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "This portfolio platform completely transformed my online presence. I've received more client inquiries in the first month than I did all of last year!",
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'Freelance Developer',
      company: 'Self-employed',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "Setting up my portfolio was incredibly easy, and the client management features have saved me countless hours. Definitely worth every penny.",
      rating: 5
    },
    {
      name: 'Olivia Rodriguez',
      title: 'Photographer',
      company: 'Capture Studios',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "The image gallery features are perfect for my photography portfolio. The responsive design ensures my work looks stunning on any device.",
      rating: 4
    },
    {
      name: 'James Wilson',
      title: 'Creative Director',
      company: 'Wilson Design Co.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      quote: "As an agency, we needed a platform that could handle multiple client portfolios. This solution has exceeded our expectations in every way.",
      rating: 5
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Client Testimonials"
          subtitle="What our users have to say"
          description="Don't just take our word for it. Hear from professionals who have transformed their online presence with our portfolio platform."
        />
        
        <div className="mt-16 md:mt-20 relative">
          {/* Mobile version (single testimonial) */}
          {isMobile && (
            <div ref={testimonialRef} className="bg-blue-50 rounded-xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentIndex].title} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonials[currentIndex].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonials[currentIndex].quote}"</p>
              
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Desktop version (multiple testimonials) */}
          {!isMobile && (
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`bg-blue-50 rounded-xl p-6 md:p-8 shadow-sm transition-all duration-300 ${
                    index === currentIndex || index === currentIndex + 1 ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.title} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              )).slice(currentIndex, currentIndex + 2)}
            </div>
          )}
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;