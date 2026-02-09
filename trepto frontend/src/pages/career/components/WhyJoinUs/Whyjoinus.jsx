import React from "react";

import Dynamic from "../../../../assets/icons/travel_explore.svg";
import EngineeringIcon from "../../../../assets/icons/Stock chart- Rupee.svg";
import CuttingEdge from "../../../../assets/icons/cached.svg";
import EthicsIcon from "../../../../assets/icons/partner_exchange.svg";
import ConsistencyIcon from "../../../../assets/icons/target.svg";

const principles = [
  {
    title: "Dynamic Work Environment",
    desc: "Join a team of passionate professionals who thrive in a dynamic, fast-paced environment. From analysts and portfolio managers to client advisors and support staff, our team is comprised of diverse talents united by a shared commitment to excellence.",
    icon: Dynamic,
  },
  {
    title: "Opportunities for Growth",
    desc: "We believe in investing in our team members' growth and development. Whether you're a seasoned professional or just starting your career in finance, we offer ample opportunities for advancement, mentorship, and continuous learning.",
    icon: EngineeringIcon,
  },
  {
    title: "Cutting-Edge Technology",
    desc: "As a forward-thinking investment firm, we harness the power of cutting-edge technology to drive innovation and stay ahead of the curve. Join us in leveraging data analytics, machine learning, and other advanced tools to unlock new insights and opportunities for our clients.",
    icon: CuttingEdge,
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

const Whyjoinus = () => {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div
        className={`
          max-w-[1312px] mx-auto px-4 sm:px-6 
          flex flex-col lg:flex-row gap-10 lg:gap-16
        `}
      >
        {/* Heading block for mobile/tablet - visible below lg */}
        <div className="block lg:hidden w-full max-w-full text-center mx-auto mb-6">
          <h2 className="text-[2rem] xs:text-[2.2rem] md:text-[2.6rem] font-heading leading-tight">
            Why <br className="hidden lg:block" />
            <span className="text-primary">Join Us?</span>
          </h2>
          <p className="mt-5 md:mt-6 text-base sm:text-medium text-text-secondary max-w-[520px] mx-auto">
            We offer a focused, high-trust environment for people who value precision over volume.
          </p>
        </div>
        {/* RIGHT (now on left due to order swap) */}
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

        {/* LEFT (now on right due to order swap) - only show in desktop */}
        <div className="hidden lg:block w-full max-w-full lg:w-[515px] flex-shrink-0 text-left mx-auto">
          <h2 className="text-h1 font-heading leading-tight">
            Why <br className="hidden lg:block" />
            <span className="text-primary">Join Us?</span>
          </h2>
          <p className="mt-6 text-medium text-text-secondary max-w-[520px] lg:mx-0">
            We offer a focused, high-trust environment for people who value precision over volume.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Whyjoinus;
