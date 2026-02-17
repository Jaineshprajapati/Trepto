import React from "react";

export default function Disclaimer() {
  return (
    <main className="bg-background py-20 px-4">
      <div className="max-w-3xl mx-auto py-12 px-4 text-text-secondary space-y-8">
        <h1 className="text-h1 font-heading text-text-primary text-center">
          Disclaimer
        </h1>

        <p>
          TRePTO / RH Capital is not a registered investment advisor or broker-dealer
          with the Securities and Exchange Board of India (SEBI) or any stock exchange.
          We do not make recommendations as to specific securities or investment products,
          and nothing on our website should be construed as investment advice.
        </p>

        <p>
          By accessing or using the TRePTO website or services, you acknowledge and agree
          to the following conditions:
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>Authorisation to Trade:</strong> You authorize TRePTO / RH Capital
            to trade in your connected broker account, but this does not guarantee
            performance or returns.
          </li>

          <li>
            <strong>No Guarantee of Performance:</strong> Registration with regulatory bodies
            or certifications, if any, do not guarantee results or returns.
          </li>

          <li>
            <strong>Illustrative Content Only:</strong> Any financial instruments,
            securities, or products displayed on the site are for illustrative purposes
            only and should not be considered solicitation to buy or sell.
          </li>

          <li>
            <strong>Market Risk:</strong> Investments are subject to market risks including
            price fluctuations, economic events, and geopolitical conditions. Users should
            evaluate their own financial situation and risk tolerance before investing.
          </li>

          <li>
            <strong>No Personalized Advice:</strong> Content on this site is for general
            informational purposes and does not substitute professional financial
            consultation.
          </li>

          <li>
            <strong>Limitation of Liability:</strong> RH Capital / TRePTO and its affiliates
            are not liable for any losses, damages, or expenses arising from use of the
            website or reliance on the information provided.
          </li>

          <li>
            <strong>Disclaimer of Warranties:</strong> All content and services are provided
            on an “as is” and “as available” basis without any warranties, express or
            implied regarding accuracy, completeness, or reliability.
          </li>

          <li>
            <strong>Personal Use Only:</strong> The information provided is intended for
            personal use and may not be reproduced or shared without written permission.
          </li>
        </ul>

        <p>
          You agree that your use of the site and services is at your own risk, and you
          should seek independent financial advice where necessary.
        </p>

        <footer className="text-center text-xs text-text-secondary pt-4">
          © {new Date().getFullYear()} TrePTO. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
