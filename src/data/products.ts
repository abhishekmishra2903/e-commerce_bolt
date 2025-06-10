import { Product } from '../types';

export const products: Product[] = [
  // Clothing
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    category: 'clothing',
    basePrice: 24.99,
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Soft, comfortable cotton t-shirt perfect for custom designs',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Navy', 'Gray', 'Red']
  },
  {
    id: '2',
    name: 'Classic Hoodie',
    category: 'clothing',
    basePrice: 39.99,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Cozy hoodie with front pocket and adjustable drawstring',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Gray', 'Navy', 'Maroon', 'White']
  },
  {
    id: '3',
    name: 'Baseball Cap',
    category: 'clothing',
    basePrice: 19.99,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Adjustable baseball cap with curved brim',
    sizes: ['One Size'],
    colors: ['Black', 'White', 'Navy', 'Red', 'Green']
  },
  
  // Accessories
  {
    id: '4',
    name: 'Phone Case',
    category: 'accessories',
    basePrice: 14.99,
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Durable phone case with custom design space',
    sizes: ['iPhone 13', 'iPhone 14', 'iPhone 15', 'Samsung Galaxy'],
    colors: ['Clear', 'Black', 'White', 'Blue', 'Pink']
  },
  {
    id: '5',
    name: 'Tote Bag',
    category: 'accessories',
    basePrice: 16.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Eco-friendly canvas tote bag with reinforced handles',
    sizes: ['Standard'],
    colors: ['Natural', 'Black', 'Navy', 'Red', 'Forest Green']
  },
  {
    id: '6',
    name: 'Water Bottle',
    category: 'accessories',
    basePrice: 22.99,
    image: 'https://images.pexels.com/photos/3999944/pexels-photo-3999944.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Stainless steel water bottle with custom engraving area',
    sizes: ['16oz', '20oz', '32oz'],
    colors: ['Silver', 'Black', 'Blue', 'Pink', 'Green']
  },
  
  // Gifts
  {
    id: '7',
    name: 'Ceramic Mug',
    category: 'gifts',
    basePrice: 12.99,
    image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Classic white ceramic mug perfect for custom designs',
    sizes: ['11oz', '15oz'],
    colors: ['White', 'Black', 'Blue', 'Red', 'Green']
  },
  {
    id: '8',
    name: 'Canvas Print',
    category: 'gifts',
    basePrice: 29.99,
    image: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'High-quality canvas print for your custom artwork',
    sizes: ['8x10', '11x14', '16x20', '18x24'],
    colors: ['White Canvas']
  },
  {
    id: '9',
    name: 'Custom Pillow',
    category: 'gifts',
    basePrice: 24.99,
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Soft throw pillow with custom design printing',
    sizes: ['16x16', '18x18', '20x20'],
    colors: ['White', 'Beige', 'Gray', 'Black']
  }
];

export const categories = [
  { id: 'clothing', name: 'Clothing', icon: '👕' },
  { id: 'accessories', name: 'Accessories', icon: '🎒' },
  { id: 'gifts', name: 'Gifts', icon: '🎁' }
];