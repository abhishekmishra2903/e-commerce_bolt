import React, { useRef } from 'react';
import { ArrowLeft, Upload, Palette, Type, Package } from 'lucide-react';
import { Product, CustomizationState } from '../types';

interface CustomizationPanelProps {
  product: Product;
  customization: CustomizationState;
  onCustomizationChange: (updates: Partial<CustomizationState>) => void;
  onBack: () => void;
  onAddToCart: () => void;
}

export const CustomizationPanel: React.FC<CustomizationPanelProps> = ({
  product,
  customization,
  onCustomizationChange,
  onBack,
  onAddToCart
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onCustomizationChange({ uploadedImage: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const textColors = [
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Red', value: '#EF4444' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Green', value: '#10B981' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Orange', value: '#F97316' },
    { name: 'Pink', value: '#EC4899' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Products</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Preview */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-xl p-8 relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            
            {/* Text Overlay */}
            {customization.text && (
              <div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold text-2xl pointer-events-none z-10"
                style={{ color: customization.textColor }}
              >
                {customization.text}
              </div>
            )}
            
            {/* Image Overlay */}
            {customization.uploadedImage && (
              <div className="absolute top-1/4 right-8 w-24 h-24 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                <img
                  src={customization.uploadedImage}
                  alt="Custom upload"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-indigo-600">
                ${product.basePrice}
              </span>
              <div className="text-sm text-gray-500">
                Selected: {customization.selectedColor} • {customization.selectedSize}
              </div>
            </div>
          </div>
        </div>

        {/* Customization Options */}
        <div className="space-y-6">
          {/* Text Customization */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center space-x-2 mb-4">
              <Type className="h-5 w-5 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-900">Add Text</h3>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your custom text..."
                value={customization.text}
                onChange={(e) => onCustomizationChange({ text: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Text Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {textColors.map(color => (
                    <button
                      key={color.value}
                      onClick={() => onCustomizationChange({ textColor: color.value })}
                      className={`w-8 h-8 rounded-full border-2 ${
                        customization.textColor === color.value
                          ? 'border-indigo-600 scale-110'
                          : 'border-gray-300'
                      } transition-all`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image Upload */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center space-x-2 mb-4">
              <Upload className="h-5 w-5 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-900">Upload Image</h3>
            </div>
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-indigo-400 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              {customization.uploadedImage ? (
                <div className="space-y-2">
                  <img
                    src={customization.uploadedImage}
                    alt="Uploaded preview"
                    className="w-16 h-16 object-cover rounded-lg mx-auto"
                  />
                  <p className="text-sm text-gray-600">Click to change image</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                  <p className="text-gray-600">Click to upload your image</p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Size Selection */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center space-x-2 mb-4">
              <Package className="h-5 w-5 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-900">Size</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => onCustomizationChange({ selectedSize: size })}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    customization.selectedSize === size
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="h-5 w-5 text-indigo-600" />
              <h3 className="text-lg font-semibold text-gray-900">Color</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => onCustomizationChange({ selectedColor: color })}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    customization.selectedColor === color
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={onAddToCart}
            className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg"
          >
            Add to Cart - ${product.basePrice}
          </button>
        </div>
      </div>
    </div>
  );
};