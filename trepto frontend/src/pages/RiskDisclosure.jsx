import React from "react";

export default function RiskDisclosure() {
  return (
    <main className="bg-background py-20 px-4">
    <div className="max-w-3xl mx-auto py-12 px-4 text-text-secondary space-y-8">

      <h1 className="text-h1 font-heading text-text-primary text-center">
        Risk Disclosure
      </h1>

      <p>
        Please read this Risk Disclosure carefully before using our services.
      </p>

      <div className="space-y-4">

        <div>
          <p className="font-semibold text-text-primary">General Information Only:</p>
          <p>
            The information on this website and its subdomains is provided
            solely for informational purposes and should not be considered
            financial, investment, legal, tax, or professional advice.
            Nothing on our site constitutes an offer, solicitation,
            recommendation, or endorsement of any specific investment strategy,
            security, or financial instrument. 
            {/* Reference: oaicite:1 */}
          </p>
        </div>

        <div>
          <p className="font-semibold text-text-primary">No Investment Advice:</p>
          <p>
            We do not provide personalized investment advice. Content on this
            platform is not tailored to individual financial situations,
            needs, or objectives, and does not constitute a personal
            recommendation. 
            {/* Reference: oaicite:2 */}
          </p>
        </div>

        <div>
          <p className="font-semibold text-text-primary">No Guarantee of Performance:</p>
          <p>
            Past performances, examples, or testimonials presented on our
            website are for illustrative purposes only and do not guarantee
            future results. There is no assurance that similar outcomes will
            occur.
            {/* Reference: oaicite:3 */}
          </p>
        </div>

        <div>
          <p className="font-semibold text-text-primary">Use at Your Own Risk:</p>
          <p>
            By accessing or using our services, you acknowledge that all
            decisions you make are at your own risk. We, along with our
            affiliates, partners, employees, or agents, are not liable for any
            direct or indirect loss or damage resulting from your reliance on
            the information provided. 
            {/* Reference: oaicite:4 */}
          </p>
        </div>

        <div>
          <p className="font-semibold text-text-primary">Third-Party Links:</p>
          <p>
            Our website may contain links to external websites or content
            provided by third parties. We do not endorse, verify, or bear
            responsibility for the accuracy or reliability of information on
            external sites. 
            {/* Reference: oaicite:5 */}
          </p>
        </div>

        <div>
          <p className="font-semibold text-text-primary">Regulatory and Market Risk Notice:</p>
          <p>
            Trading and investing in financial markets carries inherent
            risks. You should be aware that trading in leveraged instruments
            such as futures or options involves a high level of risk. It is
            recommended that you only trade with capital you can afford to
            lose. 
            {/* Reference: oaicite:6 */}
          </p>
        </div>

        <div>
          <p className="font-semibold text-text-primary">Jurisdictional Limitations:</p>
          <p>
            Our services and the information on this website are not intended
            for use in jurisdictions where such use would violate local laws
            or regulations. You should seek independent legal, financial, or
            tax advice before engaging in any investment activities. 
            {/* Reference: oaicite:7 */}
          </p>
        </div>

      </div>

      <footer className="text-center text-xs text-text-secondary pt-4">
        © {new Date().getFullYear()} TrePTO. All rights reserved.
      </footer>
    </div>
    </main>
  );
}
