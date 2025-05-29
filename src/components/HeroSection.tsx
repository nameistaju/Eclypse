const HeroSection = () => {
  return (
    <section className="bg-black text-white font-sans">
      {/* Top bar with title and year */}
      <div className="flex justify-between items-center w-full px-10 pt-24 text-white">
        <h1 className="text-[42px] font-normal tracking-tight">
          Eclypse<span className="align-super text-sm">®</span>
        </h1>
        <p className="text-sm opacity-80">© 2025</p>
      </div>

      {/* Hero video */}
      <div className="relative w-full mt-6">
        <video
          src="/videos/vd1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[480px] object-cover"
        />
        <p className="absolute bottom-6 right-6 bg-transparent text-white text-base font-light">
          A silhouette worth remembering
        </p>
      </div>

      {/* Body text */}
      <div className="max-w-4xl mx-auto px-10 pt-20 pb-10">
        <p className="text-[20px] md:text-[22px] leading-[1.75] font-light">
          Rooted in a philosophy of quiet luxury, our garments are designed to speak softly<br />
          in cut, in movement, in presence.
        </p>

        <div className="mt-10">
          <a
            href="#"
            className="text-sm underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Learn more about Eclypse ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
