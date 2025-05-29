// src/components/CartDisplay.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { ChevronLeft } from 'lucide-react';

const CartDisplay = () => {
  const { items, state, removeItem, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleBackToShopping = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBackToShopping}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-light">Shopping Cart</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {items.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <button
              onClick={handleBackToShopping}
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-xl font-medium mb-6">Cart Items</h2>
                
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 pb-6 border-b border-gray-200 last:border-b-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-24 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">{item.name}</h3>
                        <p className="text-gray-500 mt-1">Size: {item.size}</p>
                        <p className="font-semibold text-lg mt-2">₹{item.price.toLocaleString('en-IN')}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors ml-4"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button
                    onClick={clearCart}
                    className="text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-100 rounded-lg p-6">
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-4">
                    By placing your order, you agree to our company{' '}
                    <span className="text-gray-900 font-medium">Privacy policy</span> and{' '}
                    <span className="text-gray-900 font-medium">Conditions of use</span>.
                  </p>
                </div>

                <h3 className="text-xl font-medium mb-6">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Items ({state.itemCount}):</span>
                    <span>₹{state.total.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping and handling:</span>
                    <span>₹200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Before tax:</span>
                    <span>₹{(state.total + 200).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax Collected:</span>
                    <span>₹{Math.round((state.total + 200) * 0.18).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="border-t border-gray-300 pt-4 mb-6">
                  <div className="flex justify-between text-xl font-medium">
                    <span>Order Total:</span>
                    <span>₹{(state.total + 200 + Math.round((state.total + 200) * 0.18)).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition-colors font-medium"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDisplay;