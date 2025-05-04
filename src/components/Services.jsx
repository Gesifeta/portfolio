import React from 'react';
import { Layout, Code, PenTool, LineChart, Shield, Database, Globe } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';



const ServiceCard= ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
    <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-lg mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <Layout size={24} />,
      title: 'Portfolio Creation',
      description: 'Build a stunning portfolio to showcase your work and attract potential clients.'
    },
    {
      icon: <Code size={24} />,
      title: 'Custom Development',
      description: 'Get a tailor-made portfolio with custom features and functionality.'
    },
    {
      icon: <PenTool size={24} />,
      title: 'UI/UX Design',
      description: 'Create a visually appealing portfolio with intuitive user experience design.'
    },
    {
      icon: <LineChart size={24} />,
      title: 'Analytics Integration',
      description: 'Track visitor behavior and portfolio performance with detailed analytics.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Security & Compliance',
      description: 'Ensure your portfolio is secure, compliant, and protected against threats.'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Management',
      description: 'Efficiently store and manage all your portfolio data with PostgreSQL.'
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive solutions for your portfolio needs"
          description="We offer a range of services to help you create, manage, and grow your professional presence online."
        />
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-4">Need something custom for your portfolio?</p>
          <div className="inline-flex items-center px-5 py-3 bg-blue-50 border border-blue-200 rounded-full text-blue-600 font-medium hover:bg-blue-100 transition-colors duration-300">
            <Globe size={18} className="mr-2" />
            <span>Custom solutions available. Contact us for details.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;