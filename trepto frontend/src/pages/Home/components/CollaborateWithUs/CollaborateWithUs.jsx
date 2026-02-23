import React, { useState } from "react";
import toast from "react-hot-toast";
import Reveal from "../../../../components/common/Reveal";

const CollaborateWithUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    // Ensure Web3Forms access key is configured
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      toast.error("Form is not configured. Please try again later.");
      setIsSubmitting(false);
      return;
    }
    formData.set("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        form.reset();
        toast.success("Thank you! We will contact you shortly.");
      } else {
        toast.error(
          result.message || "Something went wrong. Please try again.",
        );
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="collaboratewithus"
      className="relative overflow-hidden bg-background py-24 px-6"
    >
      {/* Soft background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* ================= LEFT : Collaborate Section ================= */}
        <Reveal direction="left">
          <div>
            <h2 className="font-heading text-h2 md:text-h1 text-text-primary leading-tight">
              Collaborate with Us &{" "}
              <span className="text-primary">Get Funded to Trade Big</span>
            </h2>

            <p className="mt-6 text-large text-text-secondary max-w-xl">
              Bring your trading expertise and collaborate with us using our
              capital, infrastructure, and margin facilities. We do not provide
              trading tips or advisory services.
            </p>

            {/* Stats */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 max-w-xl">
              <div className="rounded-lg border border-border bg-surface p-8 shadow-sm flex-1 text-center transition duration-200 hover:bg-primary hover:text-white group">
                <p className="text-xs uppercase tracking-wider text-text-secondary group-hover:text-white transition">
                  Assets Under Management
                </p>
                <p className="mt-2 text-h2 font-heading text-text-primary group-hover:text-white transition">
                  ₹20 CR
                </p>
              </div>

              <div className="rounded-lg border border-border bg-surface p-8 shadow-sm flex-1 text-center transition duration-200 hover:bg-primary hover:text-white group">
                <p className="text-xs uppercase tracking-wider text-text-secondary group-hover:text-white transition">
                  Margin Availability
                </p>
                <p className="mt-2 text-h2 font-heading text-text-primary group-hover:text-white transition">
                  UP TO 10x
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-10 text-xs text-text-secondary max-w-xl leading-relaxed">
              Disclaimer: Trepto is a proprietary trading firm and does not
              provide investment advice, tips, or guaranteed returns. This
              collaboration opportunity is not a solicitation for any financial
              product.
            </p>
          </div>
        </Reveal>

        {/* ================= RIGHT : Contact Form ================= */}
        <Reveal direction="right" delay={0.15}>
          <div className="bg-surface border border-border rounded-xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Web3Forms Hidden Fields */}
              <input
                type="hidden"
                name="access_key"
                value={import.meta.env.VITE_WEB3FORMS_KEY}
              />
              <input type="hidden" name="from_name" value="Trepto Website" />
              <input
                type="hidden"
                name="subject"
                value="Homepage Contact Form"
              />
              <input
                type="hidden"
                name="form_source"
                value="Homepage Contact Form"
              />

              {/* Name */}
              <div>
                <label className="block text-small font-medium text-text-secondary mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-small font-medium text-text-secondary mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-small font-medium text-text-secondary mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 9876543210"
                  pattern="^[0-9+\s()-]*$"
                  title="Please enter numbers only."
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[A-Za-z]/g, "");
                  }}
                  className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-small font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  rows="3"
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full border-b border-border bg-transparent py-2 focus:outline-none focus:border-primary transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white rounded-lg py-4 text-medium font-semibold border-2 border-primary transition hover:bg-white hover:text-primary disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CollaborateWithUs;
