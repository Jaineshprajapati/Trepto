import React from "react";
import "./marqueeGallery.css";
import g1 from "../../../../assets/images/g1.png";
import g2 from "../../../../assets/images/g2.png";
import g3 from "../../../../assets/images/g3.png";
import g4 from "../../../../assets/images/g4.png";
import g5 from "../../../../assets/images/g5.png";
import Reveal from "../../../../components/common/Reveal";

const images = [
  g1,
  g2,
  g3,
  g4,
  g5,
];

const MarqueeGallery = () => {
  return (
    <section>
      <div className="space-y-12">
        {/* Gallery Title */}
        <Reveal direction="up">
          <h2 className="font-heading font-semibold text-h2 sm:text-h1 mb-6 w-full text-text-primary text-center leading-tight">
            Our <span className="text-primary-500">Gallery</span>
          </h2>
        </Reveal>

        {/* TOP ROW */}
        <Reveal direction="up" delay={0.07}>
          <div className="marquee-wrapper">
            <div className="marquee">
              {[...images, ...images].map((src, index) => (
                <div
                  key={index}
                  className="min-w-[300px] sm:min-w-[460px] h-[180px] sm:h-[300px] sm:rounded-3xl rounded-xl overflow-hidden bg-white shadow-md"
                >
                  <img
                    src={src}
                    alt="gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* BOTTOM ROW */}
        <Reveal direction="up" delay={0.14}>
          <div className="marquee-wrapper">
            <div className="marquee-reverse">
              {[...images, ...images].map((src, index) => (
                <div
                  key={index}
                  className="min-w-[300px] sm:min-w-[460px] h-[180px] sm:h-[300px] sm:rounded-3xl rounded-xl overflow-hidden bg-white shadow-md"
                >
                  <img
                    src={src}
                    alt="gallery"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MarqueeGallery;
