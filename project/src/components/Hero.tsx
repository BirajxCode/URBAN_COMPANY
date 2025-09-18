import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Shield, Clock, Play, Zap, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Home services,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                on-demand
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed">
              Trusted professionals for all your home needs. Book instantly, get served amazingly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={() => navigate('/services')}
                className="bg-white text-purple-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Book a Service</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-700 transition-all duration-300 inline-flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold flex items-center justify-center">
                  <Zap className="w-6 h-6 mr-2 text-yellow-400" />
                  1M+
                </div>
                <div className="text-purple-200 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold flex items-center justify-center">
                  <Award className="w-6 h-6 mr-2 text-yellow-400" />
                  50K+
                </div>
                <div className="text-purple-200 text-sm">Service Partners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold flex items-center justify-center">
                  <Star className="w-6 h-6 mr-2 text-yellow-400 fill-current" />
                  4.8
                </div>
                <div className="text-purple-200 text-sm">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-12">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4239088/pexels-photo-4239088.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional cleaning service"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating cards */}
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="text-sm text-gray-600">1,247 reviews</div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white text-gray-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="font-semibold">100% Verified</span>
                </div>
                <div className="text-sm text-gray-600">Professional</div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 p-3 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer">
                <Play className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-8 border-t border-purple-500">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-purple-200">
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Background Verified Professionals</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>On-time Service Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Rated & Reviewed by Customers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;