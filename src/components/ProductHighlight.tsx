// src/components/ProductHighlight.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import Accordion from './Accordion';

const ProductHighlight = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [showSizeError, setShowSizeError] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 'tailored-wool-jacket',
    name: 'Tailored Wool Jacket',
    price: 7999,
    image: '/images/img21.png'
  };

  const sizes = ["XS", "S", "M", "L", "XL"];

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    setShowSizeError(false);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setShowSizeError(true);
      return;
    }

    addItem({
      id: `${product.id}-${selectedSize}`,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image
    });

    // Show success message
    alert(`Added ${product.name} (${selectedSize}) to cart!`);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      setShowSizeError(true);
      return;
    }

    // Add to cart first
    addItem({
      id: `${product.id}-${selectedSize}`,
      name: product.name,
      price: product.price,
      size: selectedSize,
      image: product.image
    });

    // Navigate to checkout page
    navigate('/checkout');
  };

  return (
    <div>
      {/* Two-column layout */}
      <div className="relative min-h-screen lg:grid lg:grid-cols-2">
        {/* Left Side - Sticky Video */}
        <div className="hidden lg:block sticky top-0 h-screen">
          <video
            src="/videos/vd2.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Right Side - Product Info */}
        <div className="px-10 py-16 flex flex-col space-y-8">
          <p className="text-lg font-semibold text-gray-700 leading-relaxed">
            A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem,
            this piece captures presence <br />without force. Worn here in the stillness of a city in motion.
          </p>

          <div className="flex space-x-8">
            <img src="/images/img21.png" alt="Look 1" className="w-40 h-56 object-cover" />
            <img src="/images/img22.png" alt="Look 2" className="w-40 h-56 object-cover" />
            <img src="/images/img13.png" alt="Look 3" className="w-40 h-56 object-cover" />
          </div>

          <div className="text-2xl font-semibold text-black">
            ₹ {product.price.toLocaleString('en-IN')}{" "}
            <span className="text-sm text-gray-500 font-normal">MRP incl. of all taxes</span>
          </div>

          <div>
            <p className="mb-4 font-semibold text-lg">
              Please select a size{" "}
              <span className="ml-2 text-gray-500 text-sm cursor-pointer underline">
                Size chart
              </span>
            </p>
            
            {/* Size Selection Error */}
            {showSizeError && (
              <p className="text-red-500 text-sm mb-4">Please select a size before proceeding.</p>
            )}
            
            <div className="flex space-x-6">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`w-32 h-20 font-semibold rounded-sm transition-colors ${
                    selectedSize === size
                      ? 'bg-black text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            
            {/* Selected Size Display */}
            {selectedSize && (
              <p className="mt-4 text-sm text-gray-600">
                Selected size: <span className="font-semibold">{selectedSize}</span>
              </p>
            )}
          </div>

          <div className="flex space-x-6 pt-10">
            <button 
              onClick={handleAddToCart}
              className="w-1/2 border border-gray-400 py-6 text-black text-xl rounded-md hover:bg-gray-100 transition-colors"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleBuyNow}
              className="w-1/2 bg-black text-white py-6 text-xl rounded-md hover:bg-gray-800 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Accordion Full Width - No max width constraint */}
      <div className="w-full bg-black text-white">
        <Accordion />
      </div>
    </div>
  );
};

export default ProductHighlight;