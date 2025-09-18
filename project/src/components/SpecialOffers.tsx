import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Percent, Clock, Gift, ArrowRight } from 'lucide-react';

const SpecialOffers: React.FC = () => {
  const navigate = useNavigate();

  const offers = [
    {
      id: '1',
      title: 'First Time User',
      discount: '40% OFF',
      description: 'Get 40% off on your first booking',
      code: 'FIRST40',
      color: 'from-pink-500 to-rose-500',
      icon: Gift
    },
    {
      id: '2',
      title: 'Limited Time',
      discount: '₹500 OFF',
      description: 'On orders above ₹2000',
      code: 'SAVE500',
      color: 'from-green-500 to-emerald-500',
      icon: Clock
    },
    {
      id: '3',
      title: 'Weekend Special',
      discount: '25% OFF',
      description: 'Book any service this weekend',
      code: 'WEEKEND25',
      color: 'from-blue-500 to-cyan-500',
      icon: Percent
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Special Offers
          </h2>
          <p className="text-lg text-gray-600">
            Don't miss out on these amazing deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`bg-gradient-to-br ${offer.color} rounded-xl p-6 text-white relative overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300`}
              onClick={() => navigate('/services')}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-20 rounded-full -mr-10 -mt-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white bg-opacity-20 rounded-full -ml-8 -mb-8"></div>
              
              <div className="relative z-10">
                <offer.icon className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <div className="text-3xl font-bold mb-2">{offer.discount}</div>
                <p className="text-white text-opacity-90 mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">Code: {offer.code}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;