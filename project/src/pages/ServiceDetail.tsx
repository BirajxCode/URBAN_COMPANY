import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Shield, CheckCircle, Calendar, Tag, User, Award, Phone, MessageCircle } from 'lucide-react';
import { getServiceById } from '../data/mockData';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = id ? getServiceById(id) : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
          <button
            onClick={() => navigate('/services')}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <div className="lg:flex lg:space-x-8">
          {/* Service Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
              {service.featured && (
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold">Featured</span>
                </div>
              )}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-sm p-8">
              {service.tags && service.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, index) => (
                    <span key={index} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-900">{service.rating}</span>
                  <span className="text-gray-500">({service.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-500">
                  <Clock className="w-5 h-5" />
                  <span>{service.duration}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {service.professionalName && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <img
                      src={service.professionalImage}
                      alt={service.professionalName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{service.professionalName}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span>Verified Professional</span>
                      </div>
                    </div>
                    <div className="ml-auto flex space-x-2">
                      <button className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition-colors">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {service.includes && service.includes.length > 0 && (
                <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included:</h3>
                <ul className="space-y-2">
                    {service.includes.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                </div>
              )}
              
              {service.availability && service.availability.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Available:</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.availability.map((slot, index) => (
                      <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl font-bold text-purple-600">
                        ₹{service.price}
                      </div>
                      {service.originalPrice && (
                        <div className="text-lg text-gray-500 line-through">
                          ₹{service.originalPrice}
                        </div>
                      )}
                      {service.discount && (
                        <div className="bg-red-100 text-red-700 px-2 py-1 rounded-full flex items-center">
                          <Tag className="w-3 h-3 mr-1" />
                          <span className="text-sm font-semibold">{service.discount}% OFF</span>
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">All inclusive</div>
                    {service.discount && (
                      <div className="text-sm text-green-600 font-medium">
                        You save ₹{service.originalPrice! - service.price}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span className="text-sm">Safe & Secure</span>
                  </div>
                </div>

                <button className="w-full bg-purple-600 text-white py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Now</span>
                </button>

                <p className="text-center text-sm text-gray-500 mt-3">
                  Free cancellation up to 2 hours before service
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Professionals</h3>
            <p className="text-gray-600">All our service partners are background verified and trained</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">On-Time Service</h3>
            <p className="text-gray-600">We guarantee timely service delivery or your money back</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Warranty</h3>
            <p className="text-gray-600">30-day warranty on all services for your peace of mind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;