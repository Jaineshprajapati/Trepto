import React from "react";
import Ring from "../../../assets/images/ring_orange.png";
import ringBlack from "../../../assets/images/ring_black.png";

const Tradefinanceservices = () => {
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
          hover:shadow-lg
        "
        >
          {/* BACKGROUND CUBE (DESKTOP ONLY, DECORATIVE) */}
          <div className="pointer-events-none absolute right-0 bottom-0 block w-[200px] h-[150px] sm:w-[240px] sm:h-[200px] lg:w-[300px] lg:h-[250px] z-0 lg:opacity-100">
            <img
              src={Ring}
              alt=""
              className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-100 group-hover:opacity-0"
            />
            <img
              src={ringBlack}
              alt=""
              className="absolute inset-0 w-full h-full transition-opacity duration-200 opacity-0 group-hover:opacity-100"
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-full lg:max-w-[68%]">
            {/* TITLE */}
            <h3 className="font-heading tracking-[0.12em] mb-4 text-h2 text-primary transition-colors duration-200 group-hover:text-white">
              Trade Finance Solutions
            </h3>

            {/* PARAGRAPH 1 */}
            <p className="mb-4 text-small lg:text-medium leading-relaxed text-text-secondary transition-colors duration-200 group-hover:text-white">
              TrePTO supports businesses in managing working capital and
              mitigating risks associated with domestic and international trade
              through structured trade finance solutions.
            </p>
            
            {/* SUB TEXT */}
            <p className="mb-4 text-small lg:text-medium  text-text-secondary transition-colors duration-200 group-hover:text-white">
              Our research services include:
            </p>

            {/* BULLETS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 ">
              {[
                "Letter of Credit (LC) advisory & structuring",
                "Bank Guarantees (BG) – financial & performance",
                "Import & Export Finance",
                "Bill Discounting / Invoice Financing",
                "Buyer’s Credit & Supplier’s Credit",
                "Trade-related working capital optimization",
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

export default Tradefinanceservices;
