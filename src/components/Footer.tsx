
const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            
            <img src="/images/logo.png" alt="Logo" className="w-20 h-20 object-contain" />
                       
         
            <p className="text-gray-400 text-sm">
              Eclypse - Philosophy of quiet luxury
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-medium">Help</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Size Chart</p>
              <p>About</p>
              <p>FAQ</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>+91 020 2555 7999</p>
              <p>info@eclypse.in</p>
              <p>Contact us</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Legal</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Shipping & Returns</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 Eclypse. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
