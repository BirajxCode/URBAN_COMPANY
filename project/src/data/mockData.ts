export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  duration: string;
  category: string;
  featured: boolean;
  discount?: number;
  tags: string[];
  includes: string[];
  professionalName?: string;
  professionalImage?: string;
  availability: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  image: string;
  serviceCount: number;
  description: string;
  trending?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  comment: string;
  service: string;
  location: string;
}

export interface Professional {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  experience: string;
  specialization: string[];
  verified: boolean;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'cleaning',
    name: 'Home Cleaning',
    icon: '🏠',
    image: 'https://images.pexels.com/photos/4239088/pexels-photo-4239088.jpeg?auto=compress&cs=tinysrgb&w=400',
    serviceCount: 15,
    description: 'Professional home cleaning services',
    trending: true
  },
  {
    id: 'repairs',
    name: 'Repairs & Maintenance',
    icon: '🔧',
    image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=400',
    serviceCount: 22,
    description: 'Expert repair and maintenance solutions'
  },
  {
    id: 'beauty',
    name: 'Beauty & Wellness',
    icon: '💆‍♀️',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
    serviceCount: 28,
    description: 'Premium beauty and wellness treatments',
    trending: true
  },
  {
    id: 'appliance',
    name: 'Appliance Repair',
    icon: '🔌',
    image: 'https://images.pexels.com/photos/4254553/pexels-photo-4254553.jpeg?auto=compress&cs=tinysrgb&w=400',
    serviceCount: 18,
    description: 'Quick appliance repair services'
  },
  {
    id: 'painting',
    name: 'Painting & Decor',
    icon: '🎨',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400',
    serviceCount: 12,
    description: 'Professional painting and decoration'
  },
  {
    id: 'pest',
    name: 'Pest Control',
    icon: '🐛',
    image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=400',
    serviceCount: 8,
    description: 'Safe and effective pest control'
  },
  {
    id: 'shifting',
    name: 'Packers & Movers',
    icon: '📦',
    image: 'https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=400',
    serviceCount: 10,
    description: 'Reliable packing and moving services'
  },
  {
    id: 'massage',
    name: 'Massage Therapy',
    icon: '💆‍♂️',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400',
    serviceCount: 14,
    description: 'Relaxing massage and therapy'
  }
];

export const professionals: Professional[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.9,
    reviews: 234,
    experience: '5+ years',
    specialization: ['Deep Cleaning', 'Kitchen Cleaning'],
    verified: true
  },
  {
    id: '2',
    name: 'Priya Sharma',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 4.8,
    reviews: 189,
    experience: '4+ years',
    specialization: ['Facial', 'Hair Care', 'Manicure'],
    verified: true
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Anita Desai',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Excellent service! The cleaning was thorough and the staff was very professional. Highly recommend!',
    service: 'Deep Home Cleaning',
    location: 'Bangalore'
  },
  {
    id: '2',
    name: 'Rohit Mehta',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Quick and efficient AC repair. The technician was knowledgeable and fixed the issue in no time.',
    service: 'AC Repair',
    location: 'Mumbai'
  },
  {
    id: '3',
    name: 'Kavya Nair',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100',
    rating: 5,
    comment: 'Amazing salon experience at home! The beautician was skilled and used quality products.',
    service: 'Beauty Services',
    location: 'Chennai'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Deep Home Cleaning',
    description: 'Comprehensive deep cleaning for your entire home including kitchen, bathrooms, bedrooms, and living areas with eco-friendly products',
    image: 'https://images.pexels.com/photos/4239088/pexels-photo-4239088.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 1247,
    duration: '3-4 hours',
    category: 'cleaning',
    featured: true,
    discount: 25,
    tags: ['Most Popular', 'Eco-friendly', 'Same Day'],
    includes: [
      'Kitchen deep cleaning',
      'Bathroom sanitization',
      'Floor mopping and vacuuming',
      'Dusting all surfaces',
      'Balcony cleaning'
    ],
    professionalName: 'Rajesh Kumar',
    professionalImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    availability: ['Today', 'Tomorrow', 'This Week']
  },
  {
    id: '2',
    title: 'AC Repair & Service',
    description: 'Complete AC repair, maintenance, gas refilling, and filter cleaning by certified technicians with 1-year warranty',
    image: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 799,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 856,
    duration: '1-2 hours',
    category: 'appliance',
    featured: true,
    discount: 33,
    tags: ['Quick Service', 'Warranty', 'Certified'],
    includes: [
      'Complete AC diagnosis',
      'Gas refilling if needed',
      'Filter cleaning/replacement',
      'Coil cleaning',
      '1-year service warranty'
    ],
    availability: ['Today', 'Tomorrow']
  },
  {
    id: '3',
    title: 'Salon at Home for Women',
    description: 'Professional beauty services at your home including facial, cleanup, hair care, manicure, pedicure with premium products',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 1499,
    originalPrice: 2199,
    rating: 4.9,
    reviews: 2134,
    duration: '2-3 hours',
    category: 'beauty',
    featured: true,
    discount: 32,
    tags: ['Premium', 'At Home', 'Trending'],
    includes: [
      'Facial with cleanup',
      'Hair wash and styling',
      'Manicure and pedicure',
      'Eyebrow threading',
      'Premium product usage'
    ],
    professionalName: 'Priya Sharma',
    professionalImage: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
    availability: ['Tomorrow', 'This Week']
  },
  {
    id: '4',
    title: 'Plumbing Services',
    description: 'Expert plumbing solutions for leaks, blockages, installations, and emergency repairs with quality materials',
    image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 599,
    originalPrice: 899,
    rating: 4.6,
    reviews: 634,
    duration: '1-2 hours',
    category: 'repairs',
    featured: false,
    discount: 33,
    tags: ['Emergency', '24/7', 'Quality Parts'],
    includes: [
      'Problem diagnosis',
      'Leak repair',
      'Pipe installation',
      'Quality materials',
      '6-month warranty'
    ],
    availability: ['Today', 'Tomorrow', 'This Week']
  },
  {
    id: '5',
    title: 'Wall Painting',
    description: 'Professional interior and exterior painting with premium quality paints, primer, and expert color consultation',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 4999,
    originalPrice: 6999,
    rating: 4.7,
    reviews: 423,
    duration: '1-2 days',
    category: 'painting',
    featured: false,
    discount: 29,
    tags: ['Premium Paint', 'Color Consultation', 'Warranty'],
    includes: [
      'Surface preparation',
      'Premium paint application',
      'Color consultation',
      'Furniture covering',
      '2-year warranty'
    ],
    availability: ['This Week', 'Next Week']
  },
  {
    id: '6',
    title: 'Cockroach Control',
    description: 'Safe and effective cockroach elimination with gel treatment and spray, 3-month guarantee with follow-up visits',
    image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 1299,
    originalPrice: 1799,
    rating: 4.5,
    reviews: 278,
    duration: '2-3 hours',
    category: 'pest',
    featured: false,
    discount: 28,
    tags: ['Safe Treatment', 'Guarantee', 'Follow-up'],
    includes: [
      'Gel treatment application',
      'Spray treatment',
      'Follow-up visit',
      '3-month guarantee',
      'Safe for pets and children'
    ],
    availability: ['Tomorrow', 'This Week']
  },
  {
    id: '7',
    title: 'Bathroom Deep Cleaning',
    description: 'Intensive bathroom cleaning and sanitization with specialized products, tile cleaning, and mold removal',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 899,
    originalPrice: 1299,
    rating: 4.6,
    reviews: 512,
    duration: '1-2 hours',
    category: 'cleaning',
    featured: false,
    discount: 31,
    tags: ['Deep Clean', 'Sanitization', 'Mold Removal'],
    includes: [
      'Tile and grout cleaning',
      'Toilet deep cleaning',
      'Shower area sanitization',
      'Mirror and fixture cleaning',
      'Mold and mildew removal'
    ],
    availability: ['Today', 'Tomorrow']
  },
  {
    id: '8',
    title: 'Electrical Repair',
    description: 'Safe electrical repairs and installations by certified electricians including wiring, switches, and appliance connections',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 699,
    originalPrice: 999,
    rating: 4.7,
    reviews: 389,
    duration: '1-2 hours',
    category: 'repairs',
    featured: false,
    discount: 30,
    tags: ['Certified', 'Safety First', 'Quality Parts'],
    includes: [
      'Electrical diagnosis',
      'Switch/socket repair',
      'Wiring installation',
      'Safety testing',
      'Quality components'
    ],
    availability: ['Today', 'Tomorrow', 'This Week']
  },
  {
    id: '9',
    title: 'Full Home Shifting',
    description: 'Complete packing and moving service with professional packers, quality materials, and safe transportation',
    image: 'https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 8999,
    originalPrice: 12999,
    rating: 4.4,
    reviews: 156,
    duration: '1 day',
    category: 'shifting',
    featured: false,
    discount: 31,
    tags: ['Professional Packers', 'Safe Transport', 'Insurance'],
    includes: [
      'Professional packing',
      'Quality packing materials',
      'Safe transportation',
      'Unpacking service',
      'Transit insurance'
    ],
    availability: ['This Week', 'Next Week']
  },
  {
    id: '10',
    title: 'Relaxing Body Massage',
    description: 'Therapeutic full body massage at home with trained therapists using premium oils and techniques',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 1999,
    originalPrice: 2999,
    rating: 4.8,
    reviews: 445,
    duration: '1 hour',
    category: 'massage',
    featured: false,
    discount: 33,
    tags: ['Therapeutic', 'Premium Oils', 'Trained Therapists'],
    includes: [
      'Full body massage',
      'Premium massage oils',
      'Relaxation techniques',
      'Stress relief therapy',
      'Professional therapist'
    ],
    availability: ['Today', 'Tomorrow', 'This Week']
  }
];

export const getServicesByCategory = (categoryId: string): Service[] => {
  return services.filter(service => service.category === categoryId);
};

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.featured);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getTrendingCategories = (): ServiceCategory[] => {
  return serviceCategories.filter(category => category.trending);
};

export const getTopRatedServices = (): Service[] => {
  return services.filter(service => service.rating >= 4.7).slice(0, 6);
};