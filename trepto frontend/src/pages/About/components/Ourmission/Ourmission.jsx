import React from "react";
import missionBg from "../../../../assets/images/ourmission_img.png";

const OurMission = () => {
  return (
    <section className="w-full bg-background py-10 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[60px]">
        <div
          className="
            rounded-[20px]
            bg-cover bg-center
            text-white
            flex items-center justify-center
            px-6 sm:px-10 md:px-16
            py-14 md:py-20
          "
          style={{ backgroundImage: `url(${missionBg})` }}
        >
          {/* Content */}
          <div className="max-w-[918px] text-center">
            {/* Title */}
            <h2 className="font-heading text-[2rem] xs:text-[2.2rem] md:text-[2.6rem] lg:text-h1 leading-tight mb-6">
              Our Mission
            </h2>
            {/* Paragraph 1 */}
            <p className="text-base md:text-sub leading-relaxed mb-5 text-justify">
              To empower investors, institutions and businesses by delivering
              market intelligence and proprietary insights that are timely,
              objective, deeply researched and built for real world decision
              making.
            </p>
            {/* Paragraph 2 */}
            <p className="text-base md:text-sub leading-relaxed text-white/90 text-justify">
              Our mission is to bridge the gap between raw information and
              actionable strategy helping stakeholders operate with clarity in an
              increasingly complex financial landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
