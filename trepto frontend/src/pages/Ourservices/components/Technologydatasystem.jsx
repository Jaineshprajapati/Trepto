import React from "react";
import Phantom from "../../../assets/images/Big_ast_orange.png";
import BlackPlantom from "../../../assets/images/Big_ast_black.png";

const Technologydatasystem = () => {
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
          {/* BACKGROUND SHAPE */}
          <div className="pointer-events-none absolute -right-16 -bottom-2 sm:-right-16 sm:-bottom-8 lg:-right-18 lg:-bottom-2 block w-[260px] h-[140px] sm:w-[320px] sm:h-[170px] lg:w-[420px] lg:h-[220px] z-0 lg:opacity-100">

            <img
              src={Phantom}
              alt=""
              className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-100 group-hover:opacity-0 object-contain"
            />
            <img
              src={BlackPlantom}
              alt=""
              className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-0 group-hover:opacity-100 object-contain"
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-full lg:max-w-[68%]">
            {/* TITLE */}
            <h3 className="font-heading tracking-[0.12em] mb-4 text-h2 text-primary transition-colors duration-200 group-hover:text-white">
              TECHNOLOGY & DATA SYSTEMS
            </h3>

            {/* PARA 1 */}
            <p className="mb-4 text-small lg:text-medium leading-relaxed text-text-secondary transition-colors duration-200 group-hover:text-white">
              To empower faster and more accurate decisions, we build data and
              intelligence infrastructure for investors and businesses.
            </p>

            {/* PARA 2 */}
            <p className="mb-6 text-small lg:text-medium leading-relaxed text-text-secondary transition-colors duration-200 group-hover:text-white">
              Our engineering capability converts fragmented datasets into
              clean, usable, and continuously updated intelligence.
            </p>

            {/* SUB TEXT */}
            <p className="mb-4 text-small lg:text-medium text-text-secondary transition-colors duration-200 group-hover:text-white">
              We build:
            </p>

            {/* BULLETS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
              {[
                "Automated data pipelines",
                "Dashboarding & visualization layers",
                "API-integrated reporting systems",
                "Portfolio tracking & analytics engines",
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

export default Technologydatasystem;
