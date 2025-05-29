import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
   <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-light mb-8">About Eclypse</h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
            </p>
            
            <p>
              Eclypse represents a new paradigm in fashion - one that values subtlety over statement, quality over quantity, and timeless design over fleeting trends. Each piece in our collection is meticulously crafted to embody the essence of understated elegance.
            </p>
            
            <p>
              Our design philosophy centers around the belief that true luxury lies not in ostentation, but in the perfect harmony of form, function, and feeling. Every garment tells a story of careful consideration, from the selection of premium materials to the final stitch.
            </p>
            
            <p>
              We believe in creating pieces that transcend seasons and trends, becoming cherished components of a thoughtfully curated wardrobe. Our commitment to sustainability and ethical production ensures that each garment not only looks beautiful but also aligns with our values of responsible fashion.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
