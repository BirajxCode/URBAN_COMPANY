import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, ArrowRight, Tag, Shield } from 'lucide-react';
import { type Service } from '../data/mockData';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/service/${service.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {service.featured && (
            <div className="bg-purple-600 text-white px-2 py-1 rounded-full">
              <span className="text-xs font-semibold">Featured</span>
            </div>
          )}
          {service.discount && (
            <div className="bg-red-500 text-white px-2 py-1 rounded-full flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              <span className="text-xs font-semibold">{service.discount}% OFF</span>
            </div>
          )}
        </div>
        {service.professionalName && (
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-full flex items-center">
            <Shield className="w-3 h-3 text-green-500 mr-1" />
            <span className="text-xs font-semibold text-gray-700">Verified</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {service.description}
        </p>
        
        {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {service.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">{tag}</span>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-semibold text-gray-900">{service.rating}</span>
            <span className="text-gray-500 text-sm">({service.reviews})</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>{service.duration}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-purple-600">
                ₹{service.price}
              </div>
              {service.originalPrice && (
                <div className="text-sm text-gray-500 line-through">
                  ₹{service.originalPrice}
                </div>
              )}
            </div>
            {service.discount && (
              <div className="text-xs text-green-600 font-medium">
                Save ₹{service.originalPrice! - service.price}
              </div>
            )}
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium inline-flex items-center space-x-1">
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;