import { ChevronLeft } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs font-light tracking-widest uppercase mb-16">Our Customers</h2>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          {/* Left: Quote and Info */}
          <div className="max-w-2xl">
            <div className="text-5xl leading-snug font-light mb-8 relative pl-8">
              <span className="absolute text-6xl left-0 -top-4 text-white">“</span>
              Understated, but unforgettable. It feels like it was made for me
            </div>
            <div className="mt-6">
              <p className="text-base text-white">Random Woman</p>
              <p className="text-sm text-gray-400 mt-1">NY, USA</p>
            </div>
          </div>

          {/* Right: Image & Thumbnails */}
          <div className="relative flex flex-col items-center">
            {/* Chevron left */}
            <button className="absolute left-[-2rem] top-1/2 transform -translate-y-1/2 bg-transparent text-white hover:text-gray-400">
              <ChevronLeft size={20} />
            </button>

            {/* Main profile image */}
            <div className="w-36 h-36 rounded-full overflow-hidden mb-6">
              <img
                src="/images/img6.png"
                alt="Main profile"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Smaller avatars */}
            <div className="flex flex-col gap-4">
              {["/images/img25.png", "/images/img25.png"].map((src, idx) => (
                <div key={idx} className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={src}
                    alt={`Avatar ${idx}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
