import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Add react icons

const jobs = [
  {
    id: 1,
    title: "Portfolio Manager",
    location: "Ahmedabad, India",
    overview:
      "We are seeking a highly skilled and experienced Portfolio Manager to join our dynamic team. As a Portfolio Manager, you will be responsible for managing investment portfolios on behalf of clients or an institution. This role requires strong analytical skills, a deep understanding of financial markets, and the ability to make informed investment decisions to maximize returns while managing risk.:",
    responsibilities: [
      "Develop and implement investment strategies that align with client objectives and risk tolerance.",
      "Conduct thorough research and analysis of financial markets, sectors, and individual securities.",
      "Monitor and manage portfolio allocations and rebalance as needed to optimize performance.",
      "Stay informed about market trends, economic conditions, and regulatory changes that may impact investments.",
      "Communicate effectively with clients, providing regular updates on portfolio performance and investment strategy.",
      "Collaborate with other departments such as research, compliance, and operations to ensure seamless portfolio management.",
    ],
    requirements: [
      "Bachelor’s degree in Finance, Economics, Business Administration, or related field (Master’s degree or CFA designation preferred).",
      "Proven experience as a Portfolio Manager or in a similar role within the financial services industry.",
      "Strong analytical and quantitative skills, with proficiency in financial modeling and investment analysis.",
      "Excellent understanding of asset allocation strategies, risk management principles, and portfolio optimization techniques.",
      "Ability to make decisions independently, based on thorough research and analysis.",
      "Outstanding communication and interpersonal skills, with the ability to build and maintain relationships with clients and stakeholders.",
      "Up-to-date knowledge of financial markets, economic trends, and regulatory requirements.",
      "Proficiency in financial software and tools for portfolio management."
    ],
  },
  {
    id: 2,
    title: "Client Sourcing Specialist",
    location: "Ahmedabad, India",
    overview:
      "We are seeking a proactive and results-driven Client Sourcing Specialist with expertise in stock market investments to join our team. This role is crucial for identifying and acquiring new clients interested in investment opportunities, particularly in equities and stock market products. The ideal candidate will have a strong network within the financial services industry, excellent communication skills, and a track record of successfully sourcing and converting leads into clients.",
    responsibilities: [
      "Identify and target potential clients interested in stock market investments through various channels, including networking events, referrals, cold calling, and digital platforms.",
      "Build and maintain a robust pipeline of leads and prospects, tracking interactions and progress through CRM systems.",
      "Conduct thorough needs assessments to understand potential clients’ investment objectives, risk tolerance, and financial situations.",
      "Educate clients on stock market investment opportunities, including equities, ETFs, and other relevant financial products.",
      "Develop personalized investment proposals and presentations to articulate the benefits of our services and solutions.",
      "Collaborate with internal stakeholders, including Portfolio Managers and Client Advisors, to deliver comprehensive investment strategies tailored to clients’ needs.",
      "Stay informed about market trends, economic developments, and regulatory changes that may impact investment decisions.",
      "Meet or exceed client acquisition targets and revenue goals set by the company.",
    ],
    requirements: [
      "Bachelor’s degree in Finance, Economics, Business Administration, or related field.",
      "Proven experience in client sourcing or business development within the financial services industry, with a focus on stock market investments.",
      "Strong knowledge of equities, stock market products, and investment strategies.",
      "Demonstrated success in building and maintaining client relationships, with a proven ability to convert leads into clients.",
      "Excellent communication and negotiation skills, with the ability to present complex information in a clear and persuasive manner.",
      "Goal-oriented mindset with a strong drive to achieve and exceed targets.",
      "Ability to work independently and as part of a team, with strong organizational and time management skills.",
      "Proficiency in CRM software and Microsoft Office suite."
    ],
  },
  {
    id: 3,
    title: "Equity Research Associate",
    location: "Ahmedabad, India",
    overview:
      "RH Capital is a leading financial services firm specializing in equity research and investment advisory services. We provide expert analysis and insights to institutional and individual investors to help them make informed investment decisions. We are seeking a motivated and detail-oriented Equity Research Associate to join our dynamic team. As an Equity Research Associate, you will work closely with our senior analysts to conduct thorough research and analysis on companies within specific sectors. Your findings and recommendations will be critical in shaping our clients' investment strategies.",
    responsibilities: [
      "Conduct in-depth research and financial analysis on assigned companies and sectors.",
      "Interpret financial statements, market data, and industry reports to formulate investment theses.",
      "Build and maintain financial models to forecast company performance and valuations.",
      "Monitor and analyze industry trends, competitor performance, and regulatory developments.",
      "Prepare detailed reports, presentations, and recommendations based on research findings.",
      "Collaborate with senior analysts to discuss findings and support investment decision-making.",
      "Participate in conference calls, meetings, and industry events to gather relevant information.",
      "Respond to inquiries from clients and internal stakeholders regarding research insights.",
      "Demonstrate attention to detail and accuracy.",
      "Ability to work independently and as part of a team.",
      "Exhibit strong time management skills and handle multiple projects simultaneously.",
    ],
    requirements: [
      "Bachelor's degree in Finance, Accounting, Economics, or a related field (Master's degree or CFA candidacy preferred).",
      "Prior experience in equity research, investment banking, or financial analysis.",
      "Strong analytical skills with proficiency in financial modeling and valuation techniques.",
      "Excellent written and verbal communication skills, with the ability to present complex information clearly and concisely.",
      "Detail-oriented and organized, with the ability to manage multiple tasks and meet deadlines.",
      "Proficiency in financial databases and research tools (e.g., Bloomberg, FactSet, Capital IQ).",
      "A passion for financial markets and a commitment to continuous learning and professional development.",
    ],
  },
  {
    id: 4,
    title: "Office Executive",
    location: "Ahmedabad, India",
    overview:
      "We are looking for a proficient Office Executive to join our administration team at RH Capital. As an Office Executive, you will be responsible for office management and daily administrative tasks. You will oversee everything from human resources to finance while managing employee relations and business development. In addition, you will collaborate with other departments to identify opportunities, address challenges, and take on special projects or initiatives. You will also manage budgets, inventory levels, and compliance for various departments. If you have a passion for office administration, excellent communication and problem-solving skills, we encourage you to apply for this exciting role. We offer a competitive compensation package and opportunities for professional development within our organisation.",
    responsibilities: [
      "Act as the first point of contact for clients and stakeholders, ensuring all communication is handled promptly and professionally.",
      "Represent the company to clients, partners, and the public, creating a positive first impression for everyone interacting with the company.",
      "Find feasible solutions to everyday challenges and roadblocks that arise during business operations.",
      "Oversee administrative staff, delegating tasks and ensuring they perform their duties effectively.",
      "Work closely with other departments to ensure all projects and initiatives move smoothly.",
      "Manage the schedules of key personnel and coordinate appointments and meetings.",
      "Support the team with administrative tasks, including data entry, filing, and document preparation.",
      "Keep the office well-stocked with supplies and monitor all equipment to ensure proper functioning.",
      "Manage office budgets and expenses, ensuring spending aligns with business goals and priorities.",
      "Handle special projects and initiatives, such as office relocations or organizational restructuring.",
      "Offer critical support and guidance on a range of administrative and operational issues to senior leadership.",
      "Provide excellent customer service, answering phone calls and responding to emails promptly and professionally.",
      "Convey complex ideas and information clearly and concisely within the organization and to external stakeholders."
    ],
    requirements: [
      "1-3 years of experience in office administration or executive assistant roles.",
      "Bachelor’s degree in any field. Competence to manage multiple priorities and deadlines.",
      "Highly proficient in Microsoft Office Suite and other CRM software.",
      "Commitment to professionalism, teamwork, and integrity.",
      "High level of discretion alongside the ability to handle confidential information."
    ],
  },
];

const CurrentOpportunities = () => {
  const [activeId, setActiveId] = useState(null);

  const handleAccordionClick = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT — CONTENT (moved from right) */}
        <div className="max-w-md">
          <h2 className="text-[2rem] xs:text-[2.2rem] md:text-[2.4rem] lg:text-h1 font-heading text-text-primary text-center lg:text-left">
            Current <span className="text-primary">Opportunities</span>
          </h2>

          <p className="mt-6 text-medium font-semibold text-text-secondary">
            Build with us. Think deeper. Execute smarter.
          </p>

          <p className="mt-4 text-medium text-text-secondary">
            At TRePTO, we work on real markets, real data and real
            decisions—offering a space to learn, contribute and grow
            with purpose.
          </p>
        </div>

        {/* RIGHT — ACCORDION (moved from left) */}
        <div className="space-y-4">
          {jobs.map((job) => {
            const isActive = job.id === activeId;

            return (
              <div
                key={job.id}
                className={`bg-surface rounded-md transition-all ${
                  isActive ? "shadow-sm" : ""
                }`}
              >
                {/* HEADER */}
                <button
                  onClick={() => handleAccordionClick(job.id)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <h3
                    className={`${
                      isActive
                        ? "text-primary text-h2 font-heading"
                        : "text-text-primary text-h4 font-sans"
                    }`}
                  >
                    {job.title}
                  </h3>

                  <span className="ml-4">
                    {isActive ? (
                      <FaChevronUp className="text-primary transition-transform duration-200" />
                    ) : (
                      <FaChevronDown className="text-text-primary transition-transform duration-200" />
                    )}
                  </span>
                </button>

                {/* BODY */}
                {isActive && job.overview && (
                  <div className="px-6 pb-6 space-y-6 text-text-secondary text-large font-sans">
                    <p>
                      <span className="font-semibold text-text-primary">
                        Location:
                      </span>{" "}
                      {job.location}
                    </p>

                    <p>
                      <span className="font-semibold text-text-primary">
                        Overview:
                      </span>{" "}
                      {job.overview}
                    </p>

                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.responsibilities &&
                          job.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">
                        Requirements:
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.requirements &&
                          job.requirements.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurrentOpportunities;
