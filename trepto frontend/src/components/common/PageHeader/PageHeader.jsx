import React from "react";
import headerBg from "../../../assets/images/titlebar.png";

const PageHeader = ({ title }) => {
  return (
    <section
      className="
        w-full
        bg-center bg-no-repeat bg-cover
        h-[96px] md:h-[152px]
        flex items-center justify-center
      "
      style={{
        backgroundImage: `url(${headerBg})`, marginTop: '80px'
      }}
    >
      <h1 className="text-2xl md:text-5xl font-semibold text-white">
        {title}
      </h1>
    </section>
  );
};

export default PageHeader;
