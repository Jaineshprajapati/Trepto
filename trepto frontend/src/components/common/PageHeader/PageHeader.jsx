import React from "react";
import headerBg from "../../../assets/images/titlebar.png"; 
// ← use your exported PNG here

const NAVBAR_HEIGHT = 80; // px

const PageHeader = ({ title }) => {
  return (
    <section
      className="w-full bg-center bg-cover"
      style={{
        backgroundImage: `url(${headerBg})`,
        marginTop: `${NAVBAR_HEIGHT}px`,
        height: `calc(152px)`,
      }}
    >
      <div className="mx-auto max-w-[1320px] px-6 h-[152px] md:h-[152px] flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default PageHeader;
