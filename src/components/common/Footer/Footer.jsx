import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../../ui/Button";
import "./Footer.css";

const exploreLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Media & Press", href: "#media-press" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "#contact" },
  { label: "ManoRagini Programme", href: "#manoragini" },
];

const serviceLinks = [
  { label: "Psychotherapy & Mental Health Support", href: "#psychotherapy" },
  { label: "Relationship & Family Counselling", href: "#relationship-counselling" },
  { label: "Child & Youth Development", href: "#child-development" },
  { label: "ManoRagini Mindset Programmes", href: "#manoragini" },
  { label: "Mind Frequency Reset", href: "#mind-frequency-reset" },
  { label: "Trauma Healing & Emotional Release", href: "#trauma-healing" },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 40,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top call to action */}
        <div className="footer-cta" data-aos="fade-up">
          <div className="footer-cta-content">
            <h2>
              Your pathway begins with a single, honest conversation.
            </h2>
          </div>

          <div className="footer-cta-action">
            <Button
              variant="white"
              showArrow
              onClick={() => {
                window.location.href = "#contact";
              }}
            >
              Let’s talk about your journey
            </Button>
          </div>
        </div>

        {/* Main footer columns */}
        <div className="footer-main">
          <div className="row gy-5 gx-lg-5">
            {/* Brand */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="footer-brand" data-aos="fade-up">
                <a href="/" className="footer-logo-link" aria-label="Unique Pathway home">
                  <img
                    src="src/assets/footerlogo.png"
                    alt="Unique Pathway"
                    className="footer-logo"
                  />
                </a>

                <p className="footer-description">
                  Bridging clinical psychology with holistic, subconscious
                  healing — founded by Clinical Psychologist &amp; Mind Coach
                  Dr. Arti S. Kumbhar.
                </p>

                <p className="footer-tagline">
                  My Life. My Rules. My Responsibility. My Success.
                </p>
              </div>
            </div>

            {/* Explore */}
            <div className="col-6 col-md-6 col-lg-2">
              <div className="footer-column" data-aos="fade-up" data-aos-delay="100">
                <h3>Explore</h3>
                <ul className="footer-links">
                  {exploreLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer-column" data-aos="fade-up" data-aos-delay="200">
                <h3>Services</h3>
                <ul className="footer-links">
                  {serviceLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer-column" data-aos="fade-up" data-aos-delay="300">
                <h3>Visit or call</h3>
                <ul className="footer-links footer-contact-links">
                  <li>Mon – Sat · 10:00 am – 7:00 pm</li>
                  <li>
                    <a href="tel:+919833963776">+91 9833963776</a>
                  </li>
                  <li>
                    <a href="mailto:contact@unique-pathway.com">
                      contact@unique-pathway.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Unique Pathway ManoRagini is a
            trademark of Dr. Arti S. Kumbhar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;