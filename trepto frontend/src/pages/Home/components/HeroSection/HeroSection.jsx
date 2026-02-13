import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../../../assets/images/hero_image.png";
import "./HeroSection.css";

import Reveal from "../../../../components/common/Reveal";

const HeroSection = () => {
  return (
    <section className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-content">
        <Reveal direction="up">
          <h1 className="text-h1 font-heading leading-normal">
            Transforming Data Into <br />
            <span className="text-primary">Intelligent</span> Decisions
          </h1>
        </Reveal>

        <Reveal direction="up" delay={0.15}>
          <p className="mt-6 max-w-[581px] text-big-sub text-text-secondary">
            Technology-driven research, analytics and strategic intelligence for modern investment ecosystems.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <div className="mt-10 flex gap-4 flex-wrap sm:flex-nowrap">
            <Link
              to="/about"
              className="bg-primary text-white px-6 py-3 rounded-md w-full sm:w-auto flex items-center justify-center"
            >
              Start Trading
            </Link>

            <Link
              to="/services"
              className="border border-primary text-primary bg-white px-6 py-3 rounded-md w-full sm:w-auto flex items-center justify-center"
            >
              View Strategies
            </Link>
          </div>
        </Reveal>
      </div>

      {/* RIGHT IMAGE */}
      <Reveal direction="right" delay={0.2}>
        <div className="hero-image">
          <img src={heroImage} alt="Hero visual" />
        </div>
      </Reveal>

    </section>
  );
};

export default HeroSection;
