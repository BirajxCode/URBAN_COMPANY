import React from 'react';
import { Users, Award, MapPin, Clock, Shield, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '1M+', color: 'text-blue-500' },
    { icon: Award, label: 'Service Partners', value: '50K+', color: 'text-green-500' },
    { icon: MapPin, label: 'Cities Covered', value: '50+', color: 'text-purple-500' },
    { icon: Clock, label: 'Services Completed', value: '10M+', color: 'text-orange-500' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'All our professionals are background verified and trained to ensure your safety and satisfaction.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards of service quality with continuous training and monitoring.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond to exceed your expectations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About Urban Company
          </h1>
          <p className="text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to make home services accessible, reliable, and delightful for everyone.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${stat.color} bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our team"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2014, Urban Company started with a simple vision: to make home services 
                as easy as ordering food online. We recognized that finding reliable, skilled 
                professionals for home services was a major pain point for millions of people.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we're proud to be India's largest home services platform, connecting 
                customers with verified professionals across multiple categories. Our technology-driven 
                approach ensures quality, reliability, and convenience at every step.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're not just a service platform; we're building a community of skilled professionals 
                and satisfied customers, creating economic opportunities and making lives easier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;