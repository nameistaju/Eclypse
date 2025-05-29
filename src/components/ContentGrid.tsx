const ContentGrid = () => {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Large video - no hover effect */}
          <div className="col-span-2 row-span-2">
            <div className="aspect-square overflow-hidden">
              <video
                src="/videos/vd4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 1 */}
          <div className="aspect-square overflow-hidden relative group">
            <img
              src="/images/img1.png"
              alt="Red fabric texture"
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-125"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-lg font-medium">Fabric Texture</span>
            </div>
          </div>

          {/* Image 2 (Logo with Eclypse text) */}
          <div className="aspect-square overflow-hidden relative group">
            <img
              src="/images/logo.png"
              alt="Eclypse Logo"
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-125"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-lg font-medium">Eclypse</span>
            </div>
          </div>

          {/* Image 3 */}
          <div className="aspect-square overflow-hidden relative group">
            <img
              src="/images/img20.png"
              alt="Model detail"
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-125"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-lg font-medium">Model Style</span>
            </div>
          </div>

          {/* Image 4 */}
          <div className="aspect-square overflow-hidden relative group">
            <img
              src="/images/img3.png"
              alt="Product detail"
              className="w-full h-full object-cover transition duration-300 group-hover:brightness-125"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-lg font-medium">Craft Detail</span>
            </div>
          </div>
        </div>

        {/* Optional caption */}
        <div className="my-20 text-white text-3xl">
          Silhouette No. 1 – Vermilion 
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;
