import React from "react";
import headerBg from "../../../assets/images/titlebar.png";

const NAVBAR_HEIGHT = 80;

const PageHeader = ({ title }) => {
  return (
    <section
      className="w-full bg-center bg-cover"
      style={{
        backgroundImage: `url(${headerBg})`,
        marginTop: `${NAVBAR_HEIGHT}px`,
      }}
    >
      <div
        className="
          mx-auto max-w-[1320px] px-6
          flex items-center justify-center
          h-[96px] md:h-[152px]
        "
      >
        <h1 className="font-heading text-2xl md:text-5xl font-semibold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHeader;
