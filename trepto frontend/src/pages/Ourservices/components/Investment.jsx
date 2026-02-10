import React from "react";
import cube from "../../../assets/images/Big_cube_orange.png";
import cubeBlack from "../../../assets/images/Big_cube_black.png";

const Investment = () => {
  return (
    <section className="w-full bg-background py-10">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
      <div
        className="
          group
          relative
          w-full
          max-w-7xl
          bg-surface
          border
          border-border
          rounded-[20px]
          px-5
          sm:px-8
          lg:px-16
          py-10
          lg:py-16
          overflow-hidden
          transition-colors
          duration-200
          hover:bg-primary
        "
      >
        {/* BACKGROUND CUBE (DESKTOP ONLY, DECORATIVE) */}
        <div className="pointer-events-none absolute right-0 bottom-0 block w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[320px] lg:h-[320px] z-0 lg:opacity-100">

          <img
            src={cube}
            alt=""
            className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-100 group-hover:opacity-0"
          />
          <img
            src={cubeBlack}
            alt=""
            className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-full lg:max-w-[68%]">
          {/* TITLE */}
          <h3 className="font-heading tracking-[0.12em] mb-4 text-h2 text-primary transition-colors duration-200 group-hover:text-white">
            INVESTMENT RESEARCH
          </h3>

          {/* PARAGRAPH 1 */}
          <p className="mb-4 text-small lg:text-medium leading-relaxed text-text-secondary transition-colors duration-200 group-hover:text-white">
            Our research capabilities support investors with structured,
            independent and decision-ready insights.
          </p>

          {/* PARAGRAPH 2 */}
          <p className="mb-6 text-small lg:text-medium  leading-relaxed text-text-secondary transition-colors duration-200 group-hover:text-white">
            By combining deep fundamental analysis with quantitative modelling,
            we help decode business performance and industry behaviour across
            sectors including Consumer, Renewables, Industrials, Healthcare,
            Technology & Mobility.
          </p>

          {/* SUB TEXT */}
          <p className="mb-4 text-small lg:text-medium  text-text-secondary transition-colors duration-200 group-hover:text-white">
            Our research services include:
          </p>

{/* BULLETS */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 ">
  {[
    "Equity & sector research",
    "Financial modelling & forecasting",
    "Competitive benchmarking",
    "Macro & thematic studies",
    "Industry structure, value chain & unit economics analysis",
  ].map((item, index) => (
    <div
      key={index}
      className={`
        grid grid-cols-[14px_1fr] items-start gap-x-3
        ${index === 4 ? "lg:col-span-2" : ""}
      `}
    >
      {/* DOT */}
      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-primary transition-colors duration-200 group-hover:bg-white" />

      {/* TEXT */}
      <span className="text-small lg:text-medium  leading-[1.55] text-text-secondary transition-colors duration-200 group-hover:text-white">
        {item}
      </span>
    </div>
  ))}
</div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;
