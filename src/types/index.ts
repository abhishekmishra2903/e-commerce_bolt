export interface Product {
  id: string;
  name: string;
  category: string;
  basePrice: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
}

export interface CartItem {
  id: string;
  product: Product;
  customization: {
    text?: string;
    textColor?: string;
    uploadedImage?: string;
    selectedSize: string;
    selectedColor: string;
  };
  quantity: number;
  price: number;
}

export interface CustomizationState {
  text: string;
  textColor: string;
  uploadedImage: string | null;
  selectedSize: string;
  selectedColor: string;
}