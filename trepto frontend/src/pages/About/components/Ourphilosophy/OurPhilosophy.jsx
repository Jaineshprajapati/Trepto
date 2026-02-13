import React, { useEffect, useRef, useState } from "react";

import cubeOrange from "../../../../assets/icons/small_cube_orange.png";
import cubeBlack from "../../../../assets/icons/small_cube_black.png";
import coneOrange from "../../../../assets/icons/small_cone_orange.png";
import coneBlack from "../../../../assets/icons/small_cone_black.png";
import asteriskOrange from "../../../../assets/icons/small_ast_orange.png";
import asteriskBlack from "../../../../assets/icons/small_ast_black.png";
import diamondOrange from "../../../../assets/icons/small_diamond_orange.png";
import diamondBlack from "../../../../assets/icons/small_diamond_black.png";
import "./OurPhilosophy.css";

/* 👀 Viewport Hook */
function useInView(options = { threshold: 0.3 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

const philosophy = [
  {
    title: "Clarity over complexity",
    desc: "We transform scattered information into structured intelligence that drives decisions, not confusion.",
    iconOrange: cubeOrange,
    iconBlack: cubeBlack,
  },
  {
    title: "Data over assumptions",
    desc: "Every insight is grounded in evidence, quantitative rigour and verifiable logic—not narratives or guesswork.",
    iconOrange: coneOrange,
    iconBlack: coneBlack,
  },
  {
    title: "Precision over volume",
    desc: "We prioritise depth, relevance and accuracy over noise, excess data or unnecessary analysis.",
    iconOrange: asteriskOrange,
    iconBlack: asteriskBlack,
  },
  {
    title: "Integrity over shortcuts",
    desc: "We operate with strict ethical discipline. Our long-term reputation and the trust of our partners is our greatest asset.",
    iconOrange: diamondOrange,
    iconBlack: diamondBlack,
  },
];

// Card presentation moved out to avoid hook call in map and to orchestrate animation
function PhilosophyCard({ item, revealed }) {
  // Each card manages its own animation sequencing:
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (revealed) {
      setShowImage(true);
      const textTimeout = setTimeout(() => {
        setShowText(true);
      }, 450); // Images reveal, then after 450ms, text reveals
      return () => clearTimeout(textTimeout);
    } else {
      setShowImage(false);
      setShowText(false);
    }
  }, [revealed]);

  return (
    <div
      className={`
        philosophy-card group w-[315px] h-[385px]
        flex flex-col items-center justify-center text-center
        rounded-[20px] border border-border p-4 bg-surface
        transition-all duration-300
        hover:bg-primary-500
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div
        className={`
          flex justify-center mb-10
          transition-all duration-700 ease-out
          ${showImage ? "opacity-100 scale-100" : "opacity-0 scale-90"}
        `}
      >
        <img
          src={item.iconOrange}
          alt=""
          className={
            `w-[100px] h-[100px] transition-all duration-300 group-hover:hidden `
            + (isHovered ? "rotate-image" : "")
          }
          style={{
            transform: isHovered ? "rotateZ(360deg)" : "rotateZ(0deg)",
            transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1), opacity 0.3s"
          }}
        />
        <img
          src={item.iconBlack}
          alt=""
          className={
            `w-[100px] h-[100px] hidden group-hover:block transition-all duration-300 `
            + (isHovered ? "rotate-image" : "")
          }
          style={{
            transform: isHovered ? "rotateZ(360deg)" : "rotateZ(0deg)",
            transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1), opacity 0.3s"
          }}
        />
      </div>

      {/* Text */}
      <div
        className={`
          transition-all duration-700 ease-out delay-100
          ${showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <h3
          className={`
            text-h4 font-heading mb-4 transition-colors
            text-text-primary group-hover:text-white
          `}
          style={{ letterSpacing: "0.06em" }}
        >
          {item.title}
        </h3>

        <p
          className={`
            text-medium font-sans transition-colors font-regular
            text-text-secondary group-hover:text-white
          `}
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

const OurPhilosophy = () => {
  // Only one ref to trigger reveal for all cards
  const [ref, inView] = useInView({ threshold: 0.3 });

  // All 4 cards animate with stagger for effect (but reveal images first, then text)
  // Optionally, stagger can be added for cascading feel; keeping simple for now

  return (
    <section className="bg-background md:py-20 py-10">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-center font-heading text-[2rem] xs:text-[2.2rem] md:text-[2.6rem] lg:text-h1 leading-tight mb-6 md:mb-14">
          OUR <span className="text-primary-500">PHILOSOPHY</span>
        </h2>

        {/* Cards */}
        <div
          ref={ref}
          className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
            justify-center
            sm:justify-center md:justify-center lg:justify-normal
            place-items-center md:place-items-center lg:place-items-stretch
          `}
        >
          {philosophy.map((item, i) => (
            <PhilosophyCard
              key={i}
              item={item}
              revealed={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;
