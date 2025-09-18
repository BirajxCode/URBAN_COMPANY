import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { serviceCategories, type ServiceCategory } from '../data/mockData';

const ServiceCategories: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/services?category=${categoryId}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What are you looking for?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of professional home services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="group cursor-pointer bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative"
            >
              {category.trending && (
                <div className="absolute -top-2 -right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Hot
                </div>
              )}
              <div className="mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-16 h-16 mx-auto rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-purple-600 font-medium mb-3">
                {category.serviceCount} services
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-4 h-4 mx-auto text-purple-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;