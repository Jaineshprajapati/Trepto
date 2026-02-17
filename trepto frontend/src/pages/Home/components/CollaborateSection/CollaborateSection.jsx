import React from "react";

const CollaborateSection = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-24 px-6">
      
      {/* Soft background glow (theme-safe) */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="font-heading text-h2 md:text-h1 text-text-primary leading-tight">
          Collaborate with Us & <br />
          <span className="text-primary">
            Get Funded to Trade Big
          </span>
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-large text-text-secondary max-w-3xl mx-auto">
          Bring your trading expertise and collaborate with us using our
          capital, infrastructure, and margin facilities. We do not provide
          trading tips or advisory services.
        </p>

        {/* Stats */}
        <div className="mt-14 flex justify-center">
          <div className="flex flex-col sm:flex-row gap-6 max-w-5xl w-full justify-center items-center">
            <div className="rounded-lg border border-border bg-surface p-8 shadow-sm flex-1 min-w-[220px] text-center transition duration-200 hover:bg-primary hover:text-white group">
              <p className="text-xs uppercase tracking-wider text-text-secondary group-hover:text-white transition">
                Assets Under Management
              </p>
              <p className="mt-2 text-h2 font-heading text-text-primary group-hover:text-white transition">
                ₹20 CR
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface p-8 shadow-sm flex-1 min-w-[220px] text-center transition duration-200 hover:bg-primary hover:text-white group">
              <p className="text-xs uppercase tracking-wider text-text-secondary group-hover:text-white transition">
                Margin Availability
              </p>
              <p className="mt-2 text-h2 font-heading text-text-primary group-hover:text-white transition">
                UP TO 10x
              </p>
            </div>
          </div>
        </div>


        {/* Disclaimer */}
        <p className="mt-10 text-xs text-text-secondary max-w-4xl mx-auto leading-relaxed">
          Disclaimer: Trepto is a proprietary trading firm and does not provide
          investment advice, tips, or guaranteed returns. This collaboration
          opportunity is not a solicitation for any financial product.
        </p>

      </div>
    </section>
  );
};

export default CollaborateSection;
