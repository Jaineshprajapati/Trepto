import React, { useState } from "react";
import toast from "react-hot-toast";

const HomeContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      e.target.reset();
      toast.success("Thank you! We will contact you shortly.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" bg-background pb-10 py-20">
      <form
        onSubmit={handleSubmit}
        className="mt-12 max-w-xl mx-auto space-y-6"
      >
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
  );
};

export default HomeContactForm;
