import React from "react";

const PrivacyPolicy = () => {
  return (
    <main className="bg-background py-20 px-4">
      <div className="max-w-5xl mx-auto bg-surface rounded-lg shadow-sm p-8 md:p-12">

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-h1 font-heading text-text-primary mb-2">
            Privacy Policy
          </h1>
        </header>

        {/* Content */}
        <section className="space-y-10 text-text-secondary text-medium leading-relaxed">

          {/* 1 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy explains how TrePTO ("we", "us", or "our")
              collects, uses, and protects your personal information when you
              access or use our website and services.
            </p>
            <p className="mt-3">
              We are committed to safeguarding your privacy and handling your
              data in accordance with applicable laws and regulations.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              2. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact details (email, phone number, address)</li>
              <li>Information you provide while using our services</li>
              <li>
                Technical data such as IP address, browser type, and device
                information
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and improve our services</li>
              <li>To communicate with you regarding updates or support</li>
              <li>For internal records, analytics, and performance monitoring</li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              4. Sharing of Information
            </h2>
            <p>
              We do not sell your personal information. We may share your data
              only with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Trusted service providers assisting in operations</li>
              <li>Legal or regulatory authorities when required by law</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              5. Cookies
            </h2>
            <p>
              We use cookies and similar technologies to enhance user
              experience, analyze traffic, and improve our platform
              functionality. You can disable cookies through your browser
              settings, though some features may not function properly.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              6. Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or
              deletion of your personal information, subject to applicable
              legal requirements.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-h2 font-heading text-text-primary mb-3">
              7. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="mt-2">
              <span className="font-medium text-text-primary">Email:</span>{" "}
              <a
                href="mailto:support@trepto.in"
                className="underline"
              >
                support@trepto.in
              </a>
            </p>
          </div>

        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
