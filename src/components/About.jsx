import React from 'react';
import { CheckCircle, Award, Users, Briefcase } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';



const About= () => {
  const teamMembers = [
    {
      name: 'Alex Morgan',
      title: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Jamie Taylor',
      title: 'CTO',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sam Rivera',
      title: 'Head of Design',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Taylor Kim',
      title: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const stats= [
    {
      value: '5+',
      label: 'Years of Experience',
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />
    },
    {
      value: '10,000+',
      label: 'Portfolios Created',
      icon: <Briefcase className="h-6 w-6 text-blue-600" />
    },
    {
      value: '99%',
      label: 'Client Satisfaction',
      icon: <Award className="h-6 w-6 text-blue-600" />
    },
    {
      value: '24',
      label: 'Countries Served',
      icon: <Users className="h-6 w-6 text-blue-600" />
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="About Our Company"
          subtitle="The team behind the platform"
          description="We're a passionate team of designers, developers, and creative thinkers dedicated to helping professionals showcase their work."
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2018, our company began with a simple mission: to help creative professionals showcase their work beautifully online. We noticed that many talented individuals struggled with creating an online presence that matched the quality of their work.
            </p>
            <p className="text-gray-700 mb-6">
              What started as a small project has grown into a comprehensive platform used by thousands of professionals worldwide. Our team has expanded, but our core values remain the same: exceptional design, user-friendly interfaces, and outstanding customer support.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                <span className="text-gray-700 font-medium">Quality First</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                <span className="text-gray-700 font-medium">Client Success</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-teal-600"></div>
                <span className="text-gray-700 font-medium">Continuous Innovation</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden transform translate-y-4">
              <img 
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Office environment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Design discussion" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden transform translate-y--4">
              <img 
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Planning session" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 mx-auto w-40 h-40 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                <p className="text-gray-600">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;