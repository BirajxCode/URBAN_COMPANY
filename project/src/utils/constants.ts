export const APP_CONFIG = {
  name: 'Urban Company',
  description: 'Home services, on-demand',
  version: '1.0.0',
  supportEmail: 'help@urbancompany.com',
  supportPhone: '+91 8080808080',
  cities: [
    'Bangalore',
    'Mumbai',
    'Delhi',
    'Chennai',
    'Hyderabad',
    'Pune',
    'Kolkata',
    'Ahmedabad'
  ]
};

export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  SERVICE_DETAIL: '/service/:id',
  ABOUT: '/about',
  CONTACT: '/contact'
};

export const API_ENDPOINTS = {
  SERVICES: '/api/services',
  CATEGORIES: '/api/categories',
  PROFESSIONALS: '/api/professionals',
  BOOKINGS: '/api/bookings'
};

export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  CART_ITEMS: 'cart_items',
  RECENT_SEARCHES: 'recent_searches'
};