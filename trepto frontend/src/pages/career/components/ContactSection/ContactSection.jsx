import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactSection = () => {
  const [subject, setSubject] = useState("general");

  return (
    <section className="bg-background pt-10 pb-20 lg:pt-12 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        
        {/* LEFT — CONTACT INFO */}
        <div className="bg-surface rounded-2xl p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center shadow-sm">
          <h2 className="text-h2 sm:text-h2 font-heading text-primary">
            Contact Information
          </h2>

          <p className="mt-3 text-medium text-text-secondary max-w-full sm:max-w-sm">
            Reach out to us anytime. We usually respond within 24 hours.
          </p>

          <div className="mt-8 sm:mt-10 space-y-6 text-medium text-text-primary">
            
            {/* Phone */}
            <div className="flex items-center gap-4">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <FiPhone />
              </span>
              <span className="break-all sm:break-normal">
                +1 012 3456 789
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <FiMail />
              </span>
              <span className="break-all sm:break-normal">
                demo@gmail.com
              </span>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0">
                <FiMapPin />
              </span>
              <span className="leading-relaxed text-left max-w-full sm:max-w-xs">
                132 Dartmouth Street, Boston, Massachusetts 02156, United States
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM (unchanged desktop behavior) */}
        <form className="space-y-8 sm:space-y-10">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <label className="block text-small font-medium text-text-secondary mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition"
              />
            </div>

            <div>
              <label className="block text-small font-medium text-text-secondary mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <label className="block text-small font-medium text-text-secondary mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition"
              />
            </div>

            <div>
              <label className="block text-small font-medium text-text-secondary mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 012 3456 789"
                className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <p className="text-small font-medium text-text-secondary mb-4">
              Select Subject
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              {["general", "job"].map((type) => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                  <span className="relative flex items-center justify-center w-5 h-5 rounded-full border-2 border-border transition group-hover:border-primary">
                    <input
                      type="radio"
                      name="subject"
                      checked={subject === type}
                      onChange={() => setSubject(type)}
                      className="absolute opacity-0"
                    />
                    <span
                      className={`w-2.5 h-2.5 rounded-full bg-primary transition transform ${
                        subject === type
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                    />
                  </span>
                  <span className="text-small text-text-primary">
                    {type === "general" ? "General Inquiry" : "Job Application"}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Attach file */}
          <div>
            <label className="block text-small font-medium text-text-secondary mb-2">
              Attach File (optional)
            </label>
            <input
              type="file"
              className="w-full text-small text-text-secondary file:text-small file:border-0 file:bg-primary file:text-white file:px-4 file:py-2 file:rounded-md cursor-pointer"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-small font-medium text-text-secondary mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`
              w-full bg-primary text-white rounded-lg py-4 text-medium font-semibold
              border-2 border-primary
              transition-all duration-200
              hover:bg-white hover:text-primary hover:border-primary
            `}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
