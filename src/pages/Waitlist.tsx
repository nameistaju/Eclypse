import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log('Waitlist signup:', email);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-12">
          <div>
            <h1 className="text-4xl lg:text-6xl font-light mb-8">Join the Waitlist</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Be the first to know about new collections, exclusive releases,<br />
              and special events from Eclypse.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-transparent border border-gray-600 rounded-md text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-4 px-8 text-lg font-medium hover:bg-gray-200 transition-colors rounded-md"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-black rounded-full"></div>
              </div>
              <h2 className="text-2xl font-light">Thank you for joining!</h2>
              <p className="text-gray-300">
                We'll be in touch soon with updates about our latest collections.
              </p>
            </div>
          )}

          <div className="pt-12">
            <h3 className="text-2xl font-light mb-6">What to Expect</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-medium mb-3">Early Access</h4>
                <p className="text-gray-300 text-sm">
                  Get exclusive access to new collections before they're available to the public.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-3">Special Events</h4>
                <p className="text-gray-300 text-sm">
                  Invitations to private showings, trunk shows, and designer meet-and-greets.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-3">Curated Updates</h4>
                <p className="text-gray-300 text-sm">
                  Thoughtfully crafted newsletters with style inspiration and brand stories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Waitlist;