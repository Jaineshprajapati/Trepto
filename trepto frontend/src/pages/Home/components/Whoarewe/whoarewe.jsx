import React from "react";
import "./whoarewe.css";
import auditImg from "../../../../assets/images/whoweare_1.png";
import researchImg from "../../../../assets/images/whoweare_2.png";
import chartImg from "../../../../assets/images/whoweare_3.png";

import Reveal from "../../../../components/common/Reveal";
import RevealGroup from "../../../../components/common/RevealGroup";

// Define card data in an array for industry standard practice
const whoWeAreCards = [
  {
    img: auditImg,
    alt: "Research audit",
    imgFirst: true,
    content: (
      <p className="mt-3 text-medium font-normal text-text-secondary">
        <span className="text-text-primary font-medium">TRePTO</span> is a
        proprietary stock trading firm powered by deep research, technology
        driven analytics and disciplined execution and committed towards our
        goals.
      </p>
    ),
    isActive: false,
  },
  {
    img: researchImg,
    alt: "Data research",
    imgFirst: false,
    content: (
      <p className="mt-3 text-medium text-text-secondary font-normal">
        We operate at the{" "}
        <span className="text-text-primary font-medium">
          intersection of data engineering{" "}
        </span>
        quantitative research and sector intelligence to generate robust,
        research backed trading outcomes.
      </p>
    ),
    isActive: true,
  },
  {
    img: chartImg,
    alt: "Analytics",
    imgFirst: true,
    content: (
      <p className="mt-3 text-medium text-text-secondary font-normal">
        We build structured{" "}
        <span className="text-text-primary font-medium">
          analytical frameworks
        </span>
        , trading models and sector insights by integrating advanced data
        processing, automation and domain expertise.
      </p>
    ),
    isActive: false,
  },
];

const WhoWeAre = () => {
  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-[941px] text-center mb-14">
            <h2 className="font-heading font-semibold text-h2 sm:text-h1">
              <span className="text-primary">Who</span> we are
            </h2>

            <p className="mt-2 text-medium sm:text-big-sub text-text-secondary">
              Turning deep research and data intelligence into disciplined
              trading decisions.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <RevealGroup
          stagger={0.2}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          {whoWeAreCards.map(
            ({ img, alt, content, imgFirst, isActive }, idx) => (
              <Reveal key={idx}>
                <div
                  className={`who-card${
                    isActive ? " who-card-active" : ""
                  }`}
                >
                  {imgFirst && (
                    <Reveal direction="left" delay={0.1}>
                      <img
                        src={img}
                        alt={alt}
                        className="w-[300px] h-[300px] object-contain mx-auto"
                      />
                    </Reveal>
                  )}

                  <Reveal direction="up" delay={0.15}>
                    {content}
                  </Reveal>

                  {!imgFirst && (
                    <Reveal direction="right" delay={0.1}>
                      <img
                        src={img}
                        alt={alt}
                        className="w-[300px] h-[300px] object-contain mx-auto"
                      />
                    </Reveal>
                  )}
                </div>
              </Reveal>
            )
          )}
        </RevealGroup>
      </div>
    </section>
  );
};

export default WhoWeAre;
