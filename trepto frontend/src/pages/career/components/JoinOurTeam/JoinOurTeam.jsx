import React from "react";
import aboutImg from "../../../../assets/images/aboutus_img.png";

const Joinourteam = () => {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[60px] py-10 md:py-16 lg:py-20">
        {/* On mobile/tablet: image first, then content. On large screens: content left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">
          {/* Right Image (FIRST on mobile/tablet, SECOND on desktop) */}
          <div className="flex justify-center order-1 lg:order-2">
            <img
              src={aboutImg}
              alt="About TRePTO"
              className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[400px] lg:max-w-[440px] rounded-lg object-cover"
            />
          </div>
          {/* Left Content (SECOND on mobile/tablet, FIRST on desktop) */}
          <div className="max-w-full lg:max-w-[665px] mt-10 lg:mt-0 order-2 lg:order-1">
            <h2 className="font-heading text-[2rem] xs:text-[2.2rem] md:text-[2.6rem] lg:text-h1 leading-tight mb-6 md:mb-8">
              <span className="text-text-primary">Join Our Team:</span>{" "}
              <span className=" text-primary">Grow with RH Capital</span>
            </h2>

            <p className="text-base md:text-sub font-normal text-text-secondary leading-snug mb-4 md:mb-6">
              Are you passionate about finance, driven by a desire to make a
              meaningful impact, and eager to be part of a dynamic team at the
              forefront of the industry? If so, we invite you to embark on an
              exciting journey with us as we expand our team and welcome
              talented individuals who share our vision for excellence.
            </p>

            <p className="text-base md:text-sub font-normal text-text-secondary leading-snug mb-4 md:mb-6">
              At RH Capital, we're not just offering jobs; we're offering
              opportunities to shape the future of finance, to drive innovation,
              and to make a difference in the lives of our clients and
              communities. As we continue to grow and evolve, we are seeking
              exceptional individuals who embody our core values of integrity,
              collaboration, excellence, and inclusivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Joinourteam;
