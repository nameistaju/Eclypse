import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext"; // Ensure this path matches your project

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useCart(); // ✅ use 'items', not 'cartItems'

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/images/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
            <Link to="/waitlist" className="hover:text-gray-300 transition-colors">Waitlist</Link>

            <Link to="/cart" className="relative flex items-center space-x-1">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-1 relative">
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                    {cartCount}
                  </span>
                )}
              </Button>
              <span className="text-white font-medium hover:text-gray-300 transition-colors">Cart</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center ml-auto">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4 text-white">
              <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
              <Link to="/waitlist" className="hover:text-gray-300 transition-colors">Waitlist</Link>
              <Link to="/cart" className="font-medium relative">
                Cart
                {cartCount > 0 && (
                  <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
