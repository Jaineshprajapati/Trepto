import serviceImage from "../../../assets/images/servicespage-01.svg";

const ServicesSection = () => {
  return (
    // (..............Section 1................)
    <section className="py-16">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* CONTENT WRAPPER */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* LEFT CONTENT */}
          <div className="flex-1 flex flex-col gap-6">
            <h1
              className="font-heading font-semibold text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-h1">
              <span className="text-text-primary">OUR </span>
              <span className="text-primary">SERVICES</span>
            </h1>

            <p className="text-medium sm:text-large lg:text-big-sub text-text-secondary">
              <span className="text-text-primary font-semibold">TRePTO</span> is
              primarily a proprietary stock trading firm driven by research,
              technology, and disciplined execution.
            </p>

            <p className="text-medium sm:text-large lg:text-big-sub text-text-secondary">
              Our trading philosophy is built on structured analytical
              frameworks, quantitative depth, and sector-specific insight.
            </p>

            <p className="text-medium sm:text-large lg:text-big-sub text-text-secondary">
              Alongside our proprietary trading operations, we extend our
              research, analytical, and technological expertise through the
              following services:
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src={serviceImage}
              alt="Services Image"
              className="w-full h-auto mx-auto"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
