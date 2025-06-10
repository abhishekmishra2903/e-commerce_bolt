import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductGrid } from './components/ProductGrid';
import { CustomizationPanel } from './components/CustomizationPanel';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { OrderComplete } from './components/OrderComplete';
import { SellerDashboard } from './components/Seller/SellerDashboard';
import { Product, CartItem, CustomizationState } from './types';
import { useAuth } from './hooks/useAuth';

type AppState = 'products' | 'customize' | 'cart' | 'checkout' | 'complete' | 'seller-dashboard';

function App() {
  const [currentState, setCurrentState] = useState<AppState>('products');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { loading } = useAuth();
  
  const [customization, setCustomization] = useState<CustomizationState>({
    text: '',
    textColor: '#000000',
    uploadedImage: null,
    selectedSize: '',
    selectedColor: ''
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCustomization({
      text: '',
      textColor: '#000000',
      uploadedImage: null,
      selectedSize: product.sizes[0],
      selectedColor: product.colors[0]
    });
    setCurrentState('customize');
  };

  const handleCustomizationChange = (updates: Partial<CustomizationState>) => {
    setCustomization(prev => ({ ...prev, ...updates }));
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    
    const newItem: CartItem = {
      id: `${selectedProduct.id}-${Date.now()}`,
      product: selectedProduct,
      customization: { ...customization },
      quantity: 1,
      price: selectedProduct.basePrice
    };
    
    setCartItems(prev => [...prev, newItem]);
    setCurrentState('products');
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentState('checkout');
  };

  const handleOrderComplete = () => {
    setCurrentState('complete');
  };

  const handleStartOver = () => {
    setCartItems([]);
    setCurrentState('products');
    setSelectedCategory('all');
    setSelectedProduct(null);
  };

  const renderCurrentView = () => {
    switch (currentState) {
      case 'products':
        return (
          <ProductGrid
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onProductSelect={handleProductSelect}
          />
        );
      
      case 'customize':
        return selectedProduct ? (
          <CustomizationPanel
            product={selectedProduct}
            customization={customization}
            onCustomizationChange={handleCustomizationChange}
            onBack={() => setCurrentState('products')}
            onAddToCart={handleAddToCart}
          />
        ) : null;
      
      case 'checkout':
        return (
          <Checkout
            cartItems={cartItems}
            onBack={() => setIsCartOpen(true)}
            onComplete={handleOrderComplete}
          />
        );
      
      case 'complete':
        return <OrderComplete onStartOver={handleStartOver} />;
      
      case 'seller-dashboard':
        return <SellerDashboard />;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={() => setCurrentState('products')}
        onSellerDashboard={() => setCurrentState('seller-dashboard')}
      />
      
      {renderCurrentView()}
      
      <Cart
        isOpen={isCartOpen}
        cartItems={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
    </div>
  );
}

export default App;