import React, { useEffect, useRef, useState } from "react";

import one from "../../../../assets/icons/1.svg";
import two from "../../../../assets/icons/2.svg";
import three from "../../../../assets/icons/3.svg";
import four from "../../../../assets/icons/4.svg";
import five from "../../../../assets/icons/5.svg";

/* 👀 Viewport Hook that supports both enter and exit (reverse animation) */
function useInView(options = { threshold: 0.5 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
    // eslint-disable-next-line
  }, []);

  return [ref, isVisible];
}

/* 🔢 Number Image */
function NumberImage({ src, position = "bottom", isVisible, style = {} }) {
  // SLOW DOWN: Increase transition duration from 700ms to 1400ms
  const animationClass =
    position === "bottom"
      ? isVisible
        ? "translate-y-0 opacity-100"
        : "translate-y-10 opacity-0"
      : isVisible
      ? "translate-y-0 opacity-100"
      : "-translate-y-10 opacity-0";

  return (
    <img
      src={src}
      alt=""
      className={`
        pointer-events-none select-none absolute right-0
        max-w-[80px] w-auto h-auto
        transition-all duration-[1400ms] ease-out delay-100
        ${position === "top" ? "top-0" : "bottom-0"}
        ${animationClass}
      `}
      style={{ maxWidth: 120, ...style }}
    />
  );
}

/* 🧩 Card */
function ApproachCard({
  title,
  description,
  numberImage,
  numberPosition = "bottom",
  contentBottomLeft = false,
  numberImageStyle = {},
}) {
  const [ref, isVisible] = useInView();

  // SLOW DOWN: Increase transition duration from 700ms to 1400ms
  const textAnimation =
    numberPosition === "bottom"
      ? isVisible
        ? "translate-y-0 opacity-100"
        : "-translate-y-10 opacity-0"
      : isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0";

  return (
    <div
      ref={ref}
      className={`
        relative w-[315px] h-[385px]
        bg-surface border border-border
        rounded-[20px]
        overflow-hidden
        px-6 pt-6
        transition-all duration-300 ease-in-out
        hover:bg-primary hover:text-white
        hover:shadow-[2px_5px_12px_rgba(0,0,0,0.1),9px_20px_22px_rgba(0,0,0,0.09),21px_44px_29px_rgba(0,0,0,0.05)]
        group
        ${numberPosition === "top" ? "pt-20" : ""}
      `}
    >
      <NumberImage
        src={numberImage}
        position={numberPosition}
        isVisible={isVisible}
        style={numberImageStyle}
      />

      {contentBottomLeft ? (
        <div
          className={`
            absolute left-6 bottom-6 z-10 flex flex-col gap-3
            transition-all duration-[1400ms] ease-out
            ${textAnimation}
          `}
        >
          <h3 className="text-h4 font-semibold group-hover:text-white">
            {title}
          </h3>
          <p className="text-medium leading-6 text-text-secondary group-hover:text-white">
            {description}
          </p>
        </div>
      ) : (
        <div
          className={`
            relative z-10 flex flex-col gap-3
            transition-all duration-[1400ms] ease-out
            ${textAnimation}
          `}
        >
          <h3 className="text-h4 font-semibold group-hover:text-white">
            {title}
          </h3>
          <p className="text-medium leading-6 text-text-secondary group-hover:text-white">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

const approachCards = [
  {
    numberImage: one,
    numberPosition: "bottom",
    title: "Deep sector and macro research",
    description:
      "Understanding fundamentals, industry structures, business models and economic drivers.",
    numberImageStyle: { right: 12 },
  },
  {
    numberImage: two,
    numberPosition: "top",
    title: "Quantitative and statistical analysis",
    description:
      "Using models, pattern recognition and risk analytics to support trading and investment frameworks.",
    contentBottomLeft: true,
  },
  {
    numberImage: three,
    numberPosition: "bottom",
    title: "Proprietary data systems",
    description:
      "Internal tools, datasets and engineered workflows that strengthen accuracy and speed of insight generation.",
  },
  {
    numberImage: four,
    numberPosition: "bottom",
    title: "Structured strategic thinking",
    description:
      "Frameworks that convert financial signals into strategic clarity for trading, investing or business decisions.",
  },
  {
    numberImage: five,
    numberPosition: "top",
    title: "Transparent communication",
    description:
      "Insights delivered in a way that is meaningful, concise and directly usable without jargon or opacity.",
    contentBottomLeft: true,
  },
];

function OurApproach() {
  return (
    <section className="w-full bg-background py-12">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-[2rem] md:text-[2.6rem] lg:text-h1">
            <span className="text-text-primary">OUR </span>
            <span className="text-primary">APPROACH</span>
          </h2>
          <p className="mt-4 text-text-secondary">
            Our process is built on a multidisciplinary integration of:
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center gap-10">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {approachCards.slice(0, 3).map((card, index) => (
              <div
                key={card.title}
                className={
                  index === 2
                    ? "md:col-span-2 md:flex md:justify-center lg:col-span-1"
                    : ""
                }
              >
                <ApproachCard {...card} />
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {approachCards.slice(3).map((card) => (
              <ApproachCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurApproach;
