export type Page = 'home' | 'about' | 'products' | 'services' | 'shop' | 'gallery' | 'testimonials' | 'contact';

export type ProductCategory = 'semences' | 'engrais' | 'pesticides' | 'herbicides' | 'fongicides' | 'outils' | 'materiels' | 'arrosage';

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  unit: string;
  description: string;
  image: string;
  available: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  details: string[];
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}
