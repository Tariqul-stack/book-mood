import React from "react";

const Banner = () => {
  return (
    <div className="relative container mx-auto my-10">
      {/* Stronger glow - left */}
      <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#23BE0A]/30 blur-[120px] rounded-full"></div>

      {/* Stronger glow - right (FIXED TOP RIGHT) */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-[#59C6D2]/30 blur-[120px] rounded-full"></div>

      {/* Bottom glow */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#C084FC]/20 blur-[140px] rounded-full"></div>

      {/* Main card */}
      <div
        className="relative hero min-h-[70vh] rounded-3xl bg-[#F9F9F9] 
        shadow-[0_25px_80px_rgba(0,0,0,0.12)] 
        border border-white/50 
        backdrop-blur-xl px-6 lg:px-12 py-10"
      >
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between gap-10">
          {/* Image */}
          <img
            src="/book.png"
            className="max-w-xs md:max-w-sm rounded-2xl 
            shadow-[0_20px_60px_rgba(0,0,0,0.25)] 
            hover:scale-[1.03] transition duration-300"
          />

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#131313]">
              Books to freshen up <br /> your bookshelf
            </h1>

            <button
              className="btn bg-[#23BE0A] text-white font-semibold 
              hover:bg-[#1faa0a] mt-6 px-6 rounded-xl 
              shadow-[0_10px_25px_rgba(35,190,10,0.35)] 
              hover:shadow-[0_12px_30px_rgba(35,190,10,0.45)] 
              transition"
            >
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
