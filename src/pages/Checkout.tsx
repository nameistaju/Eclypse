import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import AddressForm from '../components/AddressForm';
import OrderSummary from '../components/OrderSummary';
import { useCart } from '../contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const [shippingAddress, setShippingAddress] = useState(null);

  const handleAddressSubmit = (address: any) => {
    setShippingAddress(address);
    toast({
      title: "Address saved",
      description: "Your shipping address has been saved successfully.",
    });
  };

  const handlePlaceOrder = () => {
    if (!shippingAddress) {
      toast({
        title: "Address required",
        description: "Please add a shipping address to continue.",
        variant: "destructive",
      });
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Add items to your cart before placing an order.",
        variant: "destructive",
      });
      return;
    }

    // Simulate order processing
    clearCart();
    toast({
      title: "Order placed successfully!",
      description: "Thank you for your order. You will receive a confirmation email shortly.",
    });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-light">Shipping Address</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Address Form */}
          <div className="lg:col-span-2">
            <AddressForm onSubmit={handleAddressSubmit} />
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary onPlaceOrder={handlePlaceOrder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
