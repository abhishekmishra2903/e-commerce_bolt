import React from 'react';
import { CheckCircle, Package, Home } from 'lucide-react';

interface OrderCompleteProps {
  onStartOver: () => void;
}

export const OrderComplete: React.FC<OrderCompleteProps> = ({ onStartOver }) => {
  const orderNumber = `CC${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="bg-white rounded-2xl p-12 shadow-lg">
        <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Confirmed!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Thank you for your order. We've received your customization request and will start processing it shortly.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Package className="h-5 w-5 text-indigo-600" />
            <span className="font-semibold text-gray-900">Order Number</span>
          </div>
          <p className="text-2xl font-mono font-bold text-indigo-600">
            {orderNumber}
          </p>
        </div>

        <div className="space-y-4 text-left mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mt-1">
              <span className="text-indigo-600 font-semibold text-sm">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Order Processing</h3>
              <p className="text-gray-600 text-sm">We'll review your customization and prepare your product</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mt-1">
              <span className="text-gray-600 font-semibold text-sm">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Production</h3>
              <p className="text-gray-600 text-sm">Your custom product will be created with care (3-5 business days)</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mt-1">
              <span className="text-gray-600 font-semibold text-sm">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Shipping</h3>
              <p className="text-gray-600 text-sm">Your order will be shipped and you'll receive tracking information</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">
            We'll send you email updates about your order status and tracking information once your item ships.
          </p>
          
          <button
            onClick={onStartOver}
            className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Continue Shopping</span>
          </button>
        </div>
      </div>
    </div>
  );
};