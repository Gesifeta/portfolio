import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import Button from './ui/Button';
import SectionHeading from './ui/SectionHeading';



const Pricing= () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Starter',
      price: annual ? 9 : 12,
      description: 'Perfect for freelancers and individuals just starting out.',
      features: [
        { title: 'Basic portfolio site', included: true },
        { title: 'Up to 10 projects', included: true },
        { title: 'Basic analytics', included: true },
        { title: 'Custom domain', included: true },
        { title: 'Email support', included: true },
        { title: 'Client management', included: false },
        { title: 'SEO optimization', included: false },
        { title: 'Priority support', included: false },
      ],
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: annual ? 29 : 39,
      description: 'Designed for growing professionals who need more features.',
      features: [
        { title: 'Advanced portfolio site', included: true },
        { title: 'Unlimited projects', included: true },
        { title: 'Advanced analytics', included: true },
        { title: 'Custom domain', included: true },
        { title: 'Email support', included: true },
        { title: 'Client management', included: true },
        { title: 'SEO optimization', included: true },
        { title: 'Priority support', included: false },
      ],
      highlighted: true,
      buttonText: 'Get Started'
    },
    {
      name: 'Business',
      price: annual ? 79 : 99,
      description: 'For established businesses and agencies managing multiple clients.',
      features: [
        { title: 'Premium portfolio site', included: true },
        { title: 'Unlimited projects', included: true },
        { title: 'Advanced analytics', included: true },
        { title: 'Custom domain', included: true },
        { title: 'Email support', included: true },
        { title: 'Client management', included: true },
        { title: 'SEO optimization', included: true },
        { title: 'Priority support', included: true },
      ],
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that's right for you"
          description="No hidden fees, no surprises. Cancel anytime."
        />
        
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-lg">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                !annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-700'
              }`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                annual ? 'bg-white shadow-sm text-gray-900' : 'text-gray-700'
              }`}
              onClick={() => setAnnual(true)}
            >
              Annual <span className="text-blue-600 font-semibold text-xs ml-1">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 ${
                plan.highlighted 
                  ? 'shadow-xl border-2 border-blue-500 transform hover:-translate-y-1'
                  : 'shadow-sm border border-gray-200 hover:shadow-md'
              }`}
            >
              {plan.highlighted && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-500 ml-2">per month</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {annual ? 'Billed annually' : 'Billed monthly'}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mt-0.5">
                          <Check size={12} />
                        </div>
                      ) : (
                        <div className="flex-shrink-0 w-5 h-5 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mt-0.5">
                          <X size={12} />
                        </div>
                      )}
                      <span className={`ml-3 ${feature.included ? 'text-gray-700' : 'text-gray-500'}`}>
                        {feature.title}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full justify-center"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Need a custom solution?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We offer customized Enterprise plans for larger teams and businesses with specific requirements.
          </p>
          <Button variant="outline" size="md">
            Contact Our Sales Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;