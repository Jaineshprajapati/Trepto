import React from "react";
import ctaBg from "../../../assets/images/CTA.png";

const CommonCTA = ({
  title,
  subtitle,
  buttonText,
  backgroundImage = ctaBg,
  onButtonClick,
}) => {
  return (
    <section
      className={`
        relative w-full 
        h-[280px] sm:h-[319px] 
        flex items-center justify-center
        overflow-hidden
        py-8 sm:py-0
      `}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text contrast on small screens */}
      <div className="absolute sm:bg-transparent z-0 pointer-events-none" aria-hidden />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[918px] px-4 sm:px-6 text-center">
        <h2 className="text-h2 md:text-h2 lg:text-h1 font-heading text-white leading-tight">
          {title}
        </h2>

        <p className="mt-3 sm:mt-4 text-medium sm:text-sub text-white font-sans">
          {subtitle}
        </p>

        <div className="mt-5 sm:mt-7 flex justify-center">
          <button
            onClick={onButtonClick}
            className="
              inline-flex items-center justify-center
              px-5 sm:px-[18px] py-[10px] sm:py-[12px]
              min-w-[160px] sm:min-w-[231px]
              rounded-md
              border border-primary
              bg-white
              text-primary
              text-medium sm:text-sub
              font-regular
              transition-all duration-200
              hover:bg-transparent
              hover:text-white
              hover:border-white
            "
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommonCTA;
