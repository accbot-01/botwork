export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  link: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  link: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  industry: string;
}

export interface Testimonial {
  videoId: string;
  title: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Office {
  city: string;
  address: string;
  phone: string;
  email: string;
}
