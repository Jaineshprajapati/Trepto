import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-heading text-text-primary mb-3 text-center">
        Privacy Policy
      </h1>
      <p className="text-sm text-text-secondary text-center mb-10">
        Last updated: 3 May 2024
      </p>

      <section className="mb-8 text-text-secondary space-y-3">
        <p>
          This Privacy Policy explains how TrePTO ("we", "us", or "our") collects and uses your personal information when you use our website or services.
        </p>
        <p>
          We are committed to protecting your privacy in line with applicable laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-text-primary mb-2">
          What Information We Collect
        </h2>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>Name and contact details (email, phone, address)</li>
          <li>Information you provide when using our services</li>
          <li>Technical data (IP address, browser, device info)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-text-primary mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>To provide and improve our services</li>
          <li>To communicate with you</li>
          <li>For records and analysis</li>
          <li>To comply with laws</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-text-primary mb-2">
          Sharing Your Information
        </h2>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>Service providers that help us operate</li>
          <li>Legal authorities if needed</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-text-primary mb-2">
          Cookies
        </h2>
        <p className="text-text-secondary">
          We use cookies to improve your experience. You can disable cookies in your browser, but it may affect site usage.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold text-text-primary mb-2">
          Your Rights
        </h2>
        <p className="text-text-secondary">
          You can contact us to access, correct, or delete your information, subject to law.
        </p>
      </section>

      <footer className="text-center mt-12 text-text-secondary text-xs">
        © {new Date().getFullYear()} TrePTO. All rights reserved.
      </footer>
    </div>
  );
}
