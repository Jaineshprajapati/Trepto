import React from "react";
import heroImage from "../../../../assets/images/hero_image.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      
      {/* LEFT CONTENT */}
      <div className="hero-content">
        <h1 className="text-h1 font-heading leading-normal">
          Transforming Data Into <br />
          <span className="text-primary">Intelligent</span> Decisions
        </h1>

        <p className="mt-6 max-w-[581px] text-big-sub text-text-secondary">
          Technology-driven research, analytics and strategic intelligence for modern investment ecosystems.
        </p>

        <div className="mt-10 flex gap-4 flex-wrap sm:flex-nowrap">
          <button className="bg-primary text-white px-6 py-3 rounded-md w-full sm:w-auto">
            Start Trading
          </button>
          <button className="border border-primary text-primary bg-white px-6 py-3 rounded-md w-full sm:w-auto">
            View Strategies
          </button>
        </div>
        </div>
   

      {/* RIGHT IMAGE */}
      <div className="hero-image">
        <img src={heroImage} alt="Hero visual" />
      </div>

    </section>
  );
};

export default HeroSection;
