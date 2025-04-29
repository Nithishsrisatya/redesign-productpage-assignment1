import React from 'react';

const features = [
  {
    title: 'Customizable AI Store',
    description: 'Create your own AI-powered store in minutes with easy customization options.',
    icon: '🛒',
  },
  {
    title: 'Digital Marketing Tools',
    description: 'Scale your business with integrated digital marketing features.',
    icon: '📈',
  },
  {
    title: 'Lead Management',
    description: 'Manage patient leads efficiently with AI-powered automation.',
    icon: '📋',
  },
  {
    title: 'Appointment Scheduling',
    description: 'Automate appointment bookings and reminders seamlessly.',
    icon: '📅',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Key Features
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Discover the powerful features that make our platform the best choice for healthcare agents.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow break-normal">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
