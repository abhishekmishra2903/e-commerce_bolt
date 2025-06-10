import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  user_type: 'buyer' | 'seller';
  avatar_url?: string;
  phone?: string;
  address?: any;
  created_at: string;
  updated_at: string;
}

export interface DatabaseProduct {
  id: string;
  seller_id: string;
  name: string;
  description: string;
  category: string;
  base_price: number;
  images: string[];
  sizes: string[];
  colors: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  buyer_id: string;
  total_amount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shipping_address: any;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  customization: any;
  quantity: number;
  unit_price: number;
  total_price: number;
}