import React from 'react';
import { Zap, Clock, Smartphone, PaintBucket, ShieldCheck, Settings, Users, Bookmark } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';


const Feature = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 mt-1">
      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Features = () => {
  const featuresList = [
    {
      icon: <Zap size={20} />,
      title: 'Performance Optimized',
      description: 'Lightning-fast portfolio sites designed for optimal performance and load speeds.'
    },
    {
      icon: <Clock size={20} />,
      title: 'Quick Setup',
      description: 'Get your portfolio up and running in minutes with our intuitive setup process.'
    },
    {
      icon: <Smartphone size={20} />,
      title: 'Responsive Design',
      description: 'Portfolios that look and work perfectly on any device, from desktop to mobile.'
    },
    {
      icon: <PaintBucket size={20} />,
      title: 'Customizable Themes',
      description: 'Choose from a variety of themes or create your own custom design.'
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Secure Platform',
      description: "Built with security in mind to protect your data and your clients' information."
    },
    {
      icon: <Settings size={20} />,
      title: 'Easy Management',
      description: 'Simple yet powerful tools to manage and update your portfolio content.'
    },
    {
      icon: <Users size={20} />,
      title: 'Client Portal',
      description: 'Give clients exclusive access to their project updates and deliverables.'
    },
    {
      icon: <Bookmark size={20} />,
      title: 'SEO Friendly',
      description: 'Optimized for search engines to help clients find your portfolio.'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Powerful Features"
          subtitle="Everything you need for a professional portfolio"
          description="Our platform includes all the features you need to create a stunning portfolio and manage your client relationships effectively."
        />
        
        <div className="mt-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="grid grid-cols-1 gap-y-8">
              {featuresList.slice(0, 4).map((feature, index) => (
                <Feature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Portfolio Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
            </div>
            
            {/* Feature badge */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white py-2 px-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Real-time Updates</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.slice(4).map((feature, index) => (
            <Feature
              key={index + 4}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;