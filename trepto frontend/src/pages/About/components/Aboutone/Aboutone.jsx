import React from "react";
import aboutImg from "../../../../assets/images/aboutus_img.png";

const AboutOne = () => {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[60px] py-10 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="About TRePTO"
              className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[440px] rounded-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="max-w-full lg:max-w-[665px] mt-10 lg:mt-0">
            <h2 className="font-heading text-[2rem] xs:text-[2.2rem] md:text-[2.6rem] lg:text-h1 leading-tight mb-6 md:mb-8">
              <span className="text-primary">Who</span>{" "}
              <span className="text-text-primary">we are</span>
            </h2>

            <p className="text-base md:text-sub font-normal text-text-secondary leading-snug mb-4 md:mb-6">
              <span className="font-medium text-text-primary">TRePTO</span> is a proprietary stock trading and financial intelligence
              company operating at the confluence of advanced research,
              analytical engineering, and market strategy.
            </p>

            <p className="text-base md:text-sub font-normal text-text-secondary leading-snug mb-4 md:mb-6">
              We specialise in decoding market behaviour by integrating deep
              domain expertise with data-driven methodologies.
            </p>

            <p className="text-base md:text-sub font-normal text-text-secondary leading-snug">
              Our identity is built on the belief that markets reward clarity,
              discipline, and structured decision making and our work reflects
              that philosophy through every model, framework and insight we build.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOne;
