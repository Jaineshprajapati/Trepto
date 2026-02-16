import React from "react";

const TermsOfService = () => {
  return (
    <main className="bg-background py-20 px-4">
      <div className="max-w-5xl mx-auto bg-surface rounded-lg shadow-sm p-8 md:p-12">
        
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-h1 font-heading text-text-primary mb-4">
            Terms of Service
          </h1>
        </header>

        {/* Content */}
        <section className="space-y-10 text-text-secondary text-medium leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Trepto website, platform, tools, or any
              related services (collectively referred to as the “Services”),
              you agree to be bound by these Terms of Service. If you do not
              agree with these terms, you must discontinue use of the Services.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              2. Eligibility
            </h2>
            <p>
              You must be at least 18 years of age and legally capable of
              entering into a binding agreement to use our Services. By using
              Trepto, you confirm that all information provided by you is
              accurate and complete.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              3. Nature of Services
            </h2>
            <p>
              Trepto provides technology-driven tools such as algorithmic
              trading systems, AI-based market insights, analytics, and
              educational information. These tools are designed to assist
              users in understanding market behavior and making independent
              decisions.
            </p>
            <p className="mt-3">
              Trepto does not act as a broker, investment advisor, or portfolio
              manager. No content provided through the platform should be
              considered financial, legal, or investment advice.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              4. Market Risk Disclaimer
            </h2>
            <p>
              Trading and investing in financial markets involve substantial
              risk. Market conditions may change rapidly, and losses may exceed
              expectations. Past performance of any strategy or system does not
              guarantee future results.
            </p>
            <p className="mt-3">
              You acknowledge that you are solely responsible for any trades,
              decisions, or outcomes resulting from your use of the Services.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              5. User Responsibilities
            </h2>
            <p>
              You agree to use the Services only for lawful purposes and in
              compliance with all applicable laws and regulations. You are
              responsible for maintaining the confidentiality of your account
              credentials and for all activity occurring under your account.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              6. Fees and Payments
            </h2>
            <p>
              Certain features of Trepto may require payment. All applicable
              fees will be clearly communicated prior to purchase. Unless
              stated otherwise, all payments are non-refundable.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              7. Intellectual Property
            </h2>
            <p>
              All content, software, designs, trademarks, and materials on the
              Trepto platform are owned by Trepto or its licensors. You may not
              copy, modify, distribute, or exploit any part of the Services
              without prior written permission.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              Trepto shall not be liable for any direct, indirect, incidental,
              or consequential damages arising from your use of or inability to
              use the Services, including loss of profits, data, or market
              opportunities.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              9. Modifications
            </h2>
            <p>
              Trepto reserves the right to modify or update these Terms at any
              time. Updated terms will be posted on this page, and continued
              use of the Services constitutes acceptance of the revised Terms.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              10. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and interpreted in accordance
              with the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of the courts located in India.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              11. Contact Information
            </h2>
            <p>
              For questions regarding these Terms, please contact us at:
            </p>
            <p className="mt-2">
              <span className="font-medium text-text-primary">Email:</span>{" "}
              support@trepto.in
            </p>
          </div>

        </section>
      </div>
    </main>
  );
};

export default TermsOfService;
