import React from "react";
import Diamond from "../../../assets/images/Big_diamond_orange.png";
import BlackDiamond from "../../../assets/images/Big_diamond_black.png";

const Stategicadvisory = () => {
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
          {/* BACKGROUND SHAPE (BOTTOM-RIGHT) */}
          <div className="pointer-events-none absolute -right-6 -bottom-6 sm:-right-8 sm:-bottom-8 lg:-right-10 lg:-bottom-8 block w-[260px] h-[160px] sm:w-[320px] sm:h-[200px] lg:w-[420px] lg:h-[260px] z-0">
            <img
              src={Diamond}
              alt=""
              className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-100 group-hover:opacity-0 object-contain"
            />
            <img
              src={BlackDiamond}
              alt=""
              className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-0 group-hover:opacity-100 object-contain"
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-full lg:max-w-[68%]">
            {/* TITLE */}
            <h3 className="font-heading tracking-[0.12em] mb-4 text-h2 text-primary transition-colors duration-200 group-hover:text-white">
              STRATEGIC ADVISORY
            </h3>

            {/* PARA 1 */}
            <p className="mb-4 text-small lg:text-medium leading-relaxed text-text-secondary transition-colors duration-200 group-hover:text-white">
              For founders, investors and CXOs, we provide structured strategic
              guidance rooted in financial intelligence and sector insight.
            </p>

            {/* PARA 2 */}
            <p className="mb-6 text-small lg:text-medium leading-relaxed text-text-secondary transition-colors duration-200 group-hover:text-white">
              Our advisory work extends across domains such as consumer markets,
              industrials, energy, healthcare, technology and mobility.
            </p>

            {/* SUB TEXT */}
            <p className="mb-4 text-small lg:text-medium text-text-secondary transition-colors duration-200 group-hover:text-white">
              Our advisory includes:
            </p>

            {/* BULLETS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {[
                "Business model evaluation",
                "Go-to-market & scale-up frameworks",
                "Investment strategy design",
                "Market positioning & competitive analysis",
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[14px_1fr] items-start gap-x-3"
                >
                  {/* DOT */}
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-primary transition-colors duration-200 group-hover:bg-white" />

                  {/* TEXT */}
                  <span className="text-small lg:text-medium leading-[1.55] text-text-secondary transition-colors duration-200 group-hover:text-white">
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

export default Stategicadvisory;
