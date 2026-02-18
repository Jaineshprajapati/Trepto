import React from "react";

const AmlPolicy = () => {
  return (
    <main className="bg-background py-20 px-4">
      <div className="max-w-5xl mx-auto bg-surface rounded-lg shadow-sm p-8 md:p-12">
        <header className="mb-10">
          <h1 className="text-h1 font-heading text-text-primary mb-4">
            AML Policy
          </h1>
        </header>

        <section className="space-y-8 text-text-secondary text-medium leading-relaxed">
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              What is this for?
            </h2>
            <p>
              We work hard to prevent money laundering and other financial crimes on our platform.
            </p>
          </div>

          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              Who does this apply to?
            </h2>
            <p>
              Everyone who uses TrePTO, including users, our team, and anyone using our services.
            </p>
          </div>

          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              What we do
            </h2>
            <p>
              We do not allow money laundering or terrorist financing. We follow the law and report any suspicious activity.
            </p>
          </div>

          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              Checking identities
            </h2>
            <p>
              We check who our users are (KYC) and keep records to make sure everyone is who they say they are.
            </p>
          </div>

          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              Monitoring
            </h2>
            <p>
              We watch for unusual transactions. If something looks suspicious, we may report it to authorities.
            </p>
          </div>

          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              Consequences
            </h2>
            <p>
              If someone breaks these rules, we may suspend or close their account and report it if required.
            </p>
          </div>

          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              Updates
            </h2>
            <p>
              We review and update this policy regularly.
            </p>
          </div>

          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              Contact us
            </h2>
            <p>
              Questions? Email:{" "}
              <a href="mailto:support@trepto.in" className="underline">
                support@trepto.in
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AmlPolicy;
