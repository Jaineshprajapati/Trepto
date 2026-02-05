import serviceImage from "../../../assets/images/servicespage-01.svg"
const ServicesSection = () => {
  return (
   
    <section className="py-16">
      <div className="w-full flex justify-center gap-12">
        {/* LEFT CONTENT */}
        <div className="max-w-[670px] flex flex-col gap-6">
          <h1 className="text-h1 font-heading font-semibold">
            OUR <span className="text-primary">SERVICES</span>
          </h1>

          <p className="text-big-sub font-normal text-text-secondary leading-snug">
            <span className="text-text-black font-semibold">TRePTO</span> is primarily a proprietary stock trading firm driven by
            research, technology, and disciplined execution.
          </p>

          <p className="text-big-sub font-normal text-text-secondary leading-snug">
            Our trading philosophy is built on structured analytical frameworks,
            quantitative depth, and sector-specific insight.
          </p>

          <p className="text-big-sub font-normal text-text-secondary leading-snug">
            Alongside our proprietary trading operations, we extend our
            research, analytical, and technological expertise through the
            following services:
          </p>
        </div>


        {/* RIGHT CHART */}
        <div className="max-w-[617px]">
        <img src={serviceImage} alt="Services Image"/>
        </div>
      </div>
    </section>

  );
};

export default ServicesSection;
