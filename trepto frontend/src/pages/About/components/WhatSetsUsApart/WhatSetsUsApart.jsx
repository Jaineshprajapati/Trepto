import React from "react";

import ResearchIcon from "../../../../assets/icons/category_search.svg";
import EngineeringIcon from "../../../../assets/icons/Stock chart- Rupee.svg";
import InstitutionalIcon from "../../../../assets/icons/assignment_globe.svg";
import EthicsIcon from "../../../../assets/icons/partner_exchange.svg";
import ConsistencyIcon from "../../../../assets/icons/target.svg";

const principles = [
  {
    title: "Research-first DNA",
    desc: "Every decision, model and recommendation begins with research—not opinions or market noise.",
    icon: ResearchIcon,
  },
  {
    title: "Engineering-led execution",
    desc: "Our systems, processes and insights are powered by an analytical and technology-driven backbone.",
    icon: EngineeringIcon,
  },
  {
    title: "Institutional-quality frameworks",
    desc: "We operate with the standards, discipline and depth expected from global financial institutions.",
    icon: InstitutionalIcon,
  },
  {
    title: "Ethics and compliance at the core",
    desc: "Responsibility, transparency and compliance principles guide every workflow and deliverable.",
    icon: EthicsIcon,
  },
  {
    title: "Consistency, accuracy and reliability",
    desc: "Whether it is proprietary trading, research or strategic advisory—our work is marked by precision and dependability.",
    icon: ConsistencyIcon,
  },
];

const WhatSetsUsApart = () => {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div
        className={`
          max-w-[1312px] mx-auto px-4 sm:px-6 
          flex flex-col lg:flex-row gap-10 lg:gap-16
        `}
      >
        {/* LEFT */}
        <div className="w-full max-w-full lg:w-[515px] flex-shrink-0 text-center lg:text-left mx-auto">
          <h2 className="text-[2rem] xs:text-[2.2rem] md:text-[2.6rem] lg:text-h1 font-heading leading-tight">
            WHAT SETS US <br className="hidden lg:block" />
            <span className="text-primary">APART</span>
          </h2>

          <p className="mt-5 md:mt-6 text-base sm:text-medium text-text-secondary max-w-[520px] mx-auto lg:mx-0">
            Together, these principles define how TRePTO thinks, operates and delivers—ensuring every outcome is grounded in research, executed with discipline, and trusted for its precision.
          </p>
        </div>

        {/* RIGHT */}
        <div
          className={`
            w-full max-w-full lg:w-[717px] 
            max-h-[280px] sm:max-h-[360px] md:max-h-[440px] lg:max-h-[552px]
            overflow-y-auto
            pr-0 lg:pr-2 space-y-6
            scroll-smooth
          `}
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {principles.map((item, index) => (
            <div
              key={index}
              className="
                group rounded-lg p-5 sm:p-6 transition-all duration-100
                bg-surface text-text-primary
                hover:bg-primary hover:text-white hover:shadow-sm
              "
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-[1.1rem] sm:text-h4 font-heading group-hover:text-white">
                  {item.title}
                </h3>

                {/* ICON */}
                <div className="w-10 h-10 sm:w-[50px] sm:h-[50px] flex items-center justify-center shrink-0">
                  <img
                    src={item.icon}
                    alt=""
                    className="
                      w-8 h-8 sm:w-10 sm:h-10 object-contain
                      transition duration-100
                      group-hover:invert group-hover:brightness-0
                    "
                  />
                </div>
              </div>

              <p className="mt-2 sm:mt-3 text-sm sm:text-medium leading-relaxed text-text-secondary group-hover:text-white">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
