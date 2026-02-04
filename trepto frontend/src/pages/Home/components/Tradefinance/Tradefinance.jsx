import React from "react";
import "./tradefinance.css";

import indiaMap from "../../../../assets/images/india_map.svg";
import userImg from "../../../../assets/images/userimg.png";

const offerings = [
  "Letter of Credit (LC) advisory & structuring",
  "Bank Guarantees (BG) – financial & performance",
  "Import & Export Finance",
  "Bill Discounting / Invoice Financing",
  "Buyer’s Credit & Supplier’s Credit",
  "Trade-related working capital optimization",
];

const TradeFinance = () => {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="relative flex justify-center">
            {/* India Map */}
            <img
              src={indiaMap}
              alt="India map"
              className="w-full max-w-[540px]"
            />


            {/* Testimonial Card */}
            <div className="trade-testimonial absolute top-0 left-0">
              <p className="text-medium sm:text-small  sm:text-base text-text-secondary leading-relaxed">
                TrePTO’s research-driven approach and disciplined execution
                really stand out. The clarity in their analysis and consistency
                in decision-making gives strong confidence in their trading
                framework.
              </p>

              <div className="flex items-center gap-3 mt-5 sm:mt-3">
                <img
                  src={userImg}
                  alt="Ajay Pandya"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-medium font-medium text-text-primary">
                    Ajay Pandya
                  </p>
                  <p className="text-small text-text-secondary">
                    Businessman
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h2 className="font-heading font-semibold text-h2 sm:text-h1 mb-6 w-full">
              <span className="text-primary">Trade Finance</span> Solutions
            </h2>

            <p className="text-large text-text-secondary font-normal mb-6">
              <span className="font-semibold text-text-primary">TrePTO</span>{" "}
              supports businesses in managing working capital and mitigating
              risks associated with domestic and international trade through
              structured trade finance solutions.
            </p>

            <p className="text-large text-text-secondary mb-5">
              Our offerings include:
            </p>

            <ul className="space-y-4">
              {offerings.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="trade-bullet"></span>
                  <span className="font-normal sm:text-large text-text-secondary text-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TradeFinance;
