import React from 'react';

const testimonials = [
  {
    name: 'Dr. Jane Smith',
    title: 'Cardiologist',
    quote: 'This platform transformed how I manage my practice. The AI tools save me so much time!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'John Doe',
    title: 'Healthcare Agent',
    quote: 'The AI front office is a game changer. It helps me stay organized and grow my business.',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Emily Johnson',
    title: 'Clinic Manager',
    quote: 'Easy to use and very effective. Our patient engagement has improved significantly.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const SocialProofSection: React.FC = () => {
  return (
    <section className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
