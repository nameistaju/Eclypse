import React from 'react';
import { useCart } from '../contexts/CartContext';

interface OrderSummaryProps {
  onPlaceOrder: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ onPlaceOrder }) => {
  const { items, total } = useCart();
  
  const shippingFee = 200;
  const beforeTax = total + shippingFee;
  const taxAmount = Math.round(beforeTax * 0.18); // 18% tax
  const orderTotal = beforeTax + taxAmount;

  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-4">
          By placing your order, you agree to our company{' '}
          <span className="font-medium">Privacy policy</span> and{' '}
          <span className="font-medium">Conditions of use</span>.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-medium">Order Summary</h2>
        
        <div className="space-y-4">
          {items.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex justify-between">
              <span className="text-gray-600">
                Items - {item.name} (Size: {item.size}) × {item.quantity}
              </span>
              <span>{(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
          
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping and handling:</span>
            <span>{shippingFee}</span>
          </div>
          
          <div className="flex justify-between font-medium border-t pt-4">
            <span>Before tax:</span>
            <span>{beforeTax.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Tax Collected:</span>
            <span>{taxAmount.toLocaleString()}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-xl font-medium">
            <span>Order Total:</span>
            <span>{orderTotal.toLocaleString()}</span>
          </div>
        </div>

        <button
          onClick={onPlaceOrder}
          className="w-full bg-black text-white py-4 px-6 text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
