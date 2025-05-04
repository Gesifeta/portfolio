import React from 'react';


const SectionHeading= ({ title, subtitle, description }) => {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
        {subtitle}
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-xl text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;