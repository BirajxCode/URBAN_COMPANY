import React from 'react';
import { Shield, Clock, Award, Users, Headphones, CreditCard } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Professionals',
      description: 'All service partners are background verified and trained',
      color: 'text-green-500'
    },
    {
      icon: Clock,
      title: 'On-Time Service',
      description: 'Guaranteed timely service or get your money back',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: '30-day warranty on all services for peace of mind',
      color: 'text-purple-500'
    },
    {
      icon: Users,
      title: '1M+ Happy Customers',
      description: 'Trusted by millions across major cities',
      color: 'text-orange-500'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for assistance',
      color: 'text-pink-500'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Multiple payment options with secure transactions',
      color: 'text-indigo-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why choose Urban Company?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best home service experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className={`w-12 h-12 ${feature.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;