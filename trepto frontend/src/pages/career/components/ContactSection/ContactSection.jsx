import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactSection = () => {
  const [subject, setSubject] = useState("general");

  return (
    <section className="bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* LEFT — CONTACT INFO */}
        <div className="bg-surface rounded-2xl p-14 flex flex-col justify-center shadow-sm">
          <h2 className="text-h2 font-heading text-primary">
            Contact Information
          </h2>

          <p className="mt-3 text-medium text-text-secondary max-w-sm">
            Reach out to us anytime. We usually respond within 24 hours.
          </p>

          <div className="mt-12 space-y-7 text-medium text-text-primary">
            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FiPhone />
              </span>
              <span>+1 012 3456 789</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FiMail />
              </span>
              <span>demo@gmail.com</span>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                <FiMapPin />
              </span>
              <span className="max-w-xs leading-relaxed">
                132 Dartmouth Street, Boston, Massachusetts 02156, United States
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <form className="space-y-10">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

  <div className="flex flex-wrap gap-6">
    {/* General Inquiry */}
    <label className="flex items-center gap-3 cursor-pointer group">
      <span className="relative flex items-center justify-center w-5 h-5 rounded-full border-2 border-border transition group-hover:border-primary">
        <input
          type="radio"
          name="subject"
          checked={subject === "general"}
          onChange={() => setSubject("general")}
          className="absolute opacity-0"
        />
        <span
          className={`w-2.5 h-2.5 rounded-full bg-primary transition transform ${
            subject === "general"
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }`}
        />
      </span>
      <span className="text-small text-text-primary">
        General Inquiry
      </span>
    </label>

    {/* Job Application */}
    <label className="flex items-center gap-3 cursor-pointer group">
      <span className="relative flex items-center justify-center w-5 h-5 rounded-full border-2 border-border transition group-hover:border-primary">
        <input
          type="radio"
          name="subject"
          checked={subject === "job"}
          onChange={() => setSubject("job")}
          className="absolute opacity-0"
        />
        <span
          className={`w-2.5 h-2.5 rounded-full bg-primary transition transform ${
            subject === "job"
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
          }`}
        />
      </span>
      <span className="text-small text-text-primary">
        Job Application
      </span>
    </label>
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
            className="w-full bg-primary text-white rounded-lg py-4 text-medium font-semibold hover:bg-primary-600 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
