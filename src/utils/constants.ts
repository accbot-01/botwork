// Routes
export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

// Contact Information
export const CONTACT_INFO = {
  EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'info@appliedcloudcomputing.com',
  PHONE: '+91 22 6666 7777',
  ADDRESS: 'Tower A, Peninsula Business Park, Lower Parel, Mumbai 400013',
};

// Social Media Links
export const SOCIAL_LINKS = {
  LINKEDIN: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/company/10403765',
  INSTAGRAM: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/appliedcloudcomputing/',
  FACEBOOK: import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/AppliedCloudComputing',
  YOUTUBE: import.meta.env.VITE_YOUTUBE_URL || 'https://www.youtube.com/@appliedcloudcomputing',
};

// Brand Colors
export const COLORS = {
  PRIMARY: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
  },
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
};
