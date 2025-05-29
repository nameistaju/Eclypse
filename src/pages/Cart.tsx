
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddressForm from "../components/AddressForm";
import OrderSummary from "../components/OrderSummary";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" className="mr-4">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-medium">Shipping Address</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <AddressForm />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
