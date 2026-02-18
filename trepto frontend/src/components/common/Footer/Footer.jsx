import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/footer_treptologo.svg";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "About Us", to: "/about" },
  { name: "Career", to: "/career" },
  { name: "Contact Us", to: "/career#contact" },
];

const legalLinks = [
  { name: "Terms of Service", href: "/termsofservices" },
  { name: "Privacy Policy", href: "/privacypolicy" },
  { name: "Aml Policy", href: "/amlpolicy" },
  { name: "Disclaimer", href: "/disclaimer" },
  { name: "Risk Disclaimer", href: "/riskdisclosure" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/trepto_official/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1320px] px-6 py-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <img src={logo} alt="TrePTO Logo" className="w-36" />
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              TrePTO builds transparent, reliable investment and digital
              solutions for a growing India.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-white/60">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-white/80 transition hover:text-orange-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-white/60">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.to}
                    className="text-white/80 transition hover:text-orange-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-xs font-medium uppercase tracking-widest text-white/60">
              Social
            </h4>
            <ul className="space-y-3 text-sm mb-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.target}
                    rel={link.rel}
                    className="text-white/80 transition hover:text-orange-500"
                    target={link.target}
                    rel={link.rel}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Email Us below Instagram */}
            <div className="pt-2">
              <h4 className="mb-1 text-xs font-medium uppercase tracking-widest text-white/60">
                Email us
              </h4>
              <a
                href="mailto:info@trepto.in"
                className="text-white/80 transition hover:text-orange-500 text-sm"
              >
                info@trepto.in
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} TrePTO. All rights reserved.</p>
          <p>Crafted with expertise and dedication.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
