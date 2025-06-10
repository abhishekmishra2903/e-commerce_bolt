import React, { useState } from 'react';
import { ShoppingCart, Palette, User, LogOut, Store } from 'lucide-react';
import { CartItem } from '../types';
import { useAuth } from '../hooks/useAuth';
import { AuthModal } from './Auth/AuthModal';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
  onLogoClick: () => void;
  onSellerDashboard?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  cartItems, 
  onCartClick, 
  onLogoClick,
  onSellerDashboard 
}) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, profile, signOut } = useAuth();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleSignOut = async () => {
    try {
      await signOut();
      setShowUserMenu(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={onLogoClick}
            >
              <Palette className="h-8 w-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">CustomCraft</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Products
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                How It Works
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                Gallery
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <User className="h-5 w-5" />
                    <span className="hidden sm:inline">{profile?.full_name}</span>
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{profile?.full_name}</p>
                        <p className="text-xs text-gray-500 capitalize">{profile?.user_type}</p>
                      </div>
                      
                      {profile?.user_type === 'seller' && onSellerDashboard && (
                        <button
                          onClick={() => {
                            onSellerDashboard();
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                        >
                          <Store className="h-4 w-4" />
                          <span>Seller Dashboard</span>
                        </button>
                      )}
                      
                      <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                >
                  <User className="h-5 w-5" />
                  <span>Sign In</span>
                </button>
              )}

              <button
                onClick={onCartClick}
                className="relative flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:inline">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-semibold">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  );
};