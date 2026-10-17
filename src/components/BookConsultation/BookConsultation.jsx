import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../ui/Button";
import "./BookConsultation.css";

const initialFormData = {
  concern: "",
  fullName: "",
  phone: "",
  email: "",
  sessionPreference: "in-person",
  message: "",
};

const contactDetails = [
  {
    type: "phone",
    label: "Call or WhatsApp",
    value: "+91 9833963776",
    href: "tel:+919833963776",
  },
  {
    type: "email",
    label: "Email",
    value: "contact@unique-pathway.com",
    href: "mailto:contact@unique-pathway.com",
  },
  {
    type: "hours",
    label: "Hours",
    value: "Mon – Sat, 10:00 am – 7:00 pm",
  },
];

function ContactIcon({ type }) {
  if (type === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 3.5h10A2.5 2.5 0 0 1 19.5 6v12a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 18V6A2.5 2.5 0 0 1 7 3.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10 17.5h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7v5l3.5 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1.49445 11.5064C1.60473 11.7845 1.62928 12.0894 1.56495 12.3816L0.7662 14.8491C0.713872 15.1035 0.796912 15.3669 0.9857 15.5453C1.17449 15.7237 1.44214 15.7917 1.6932 15.7251L4.25295 14.9766C4.52874 14.9219 4.81435 14.9458 5.0772 15.0456C8.38358 16.5897 12.3214 15.5299 14.4062 12.5349C16.491 9.53988 16.1176 5.47903 13.5215 2.9145C10.9254 0.349964 6.86034 0.0261462 3.89103 2.14735C0.921722 4.26856 -0.0898962 8.21908 1.49445 11.5064"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const BookConsultation = () => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Connect this form to your backend/API to submit consultation requests.
    console.log("Consultation request:", formData);
  };

  return (
    <section className="book-consultation" id="contact">
      <div className="container">
        <div className="row g-4 g-xl-5 align-items-stretch">
          {/* Contact information */}
          <div className="col-12 col-lg-5">
            <div className="consultation-intro" data-aos="fade-up">
              <div className="consultation-heading">
                <span className="consultation-eyebrow">
                  Book a consultation
                </span>

                <h2>Take the first step on your path.</h2>

                <p>
                  Share a few details and our team will call you within one
                  working day to confirm a time.
                </p>
              </div>

              <div className="consultation-contact-list">
                {contactDetails.map((detail) => (
                  <div className="consultation-contact-item" key={detail.type}>
                    <span className="consultation-contact-icon">
                      <ContactIcon type={detail.type} />
                    </span>

                    <div className="consultation-contact-copy">
                      <span>{detail.label}</span>

                      {detail.href ? (
                        <a href={detail.href}>{detail.value}</a>
                      ) : (
                        <strong>{detail.value}</strong>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="consultation-whatsapp">
                <a
                  href="https://wa.me/919833963776"
                  target="_blank"
                  rel="noreferrer"
                  className="consultation-whatsapp-btn"
                >
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Consultation form */}
          <div className="col-12 col-lg-7">
            <div
              className="consultation-form-card"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <form onSubmit={handleSubmit}>
                <div className="consultation-field">
                  <label htmlFor="consultationConcern">
                    What would you like help with?
                  </label>

                  <select
                    id="consultationConcern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a concern
                    </option>
                    <option value="mental-health">
                      Psychotherapy & Mental Health
                    </option>
                    <option value="relationship">
                      Relationship & Family Counselling
                    </option>
                    <option value="child-youth">
                      Child & Youth Development
                    </option>
                    <option value="manoragini">
                      ManoRagini Mindset Programmes
                    </option>
                    <option value="trauma-healing">
                      Trauma Healing & Emotional Release
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="consultation-field">
                  <label htmlFor="consultationName">Full name</label>
                  <input
                    id="consultationName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="consultation-field">
                      <label htmlFor="consultationPhone">Phone</label>
                      <input
                        id="consultationPhone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91"
                        autoComplete="tel"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="consultation-field">
                      <label htmlFor="consultationEmail">
                        Email <span className="optional">(optional)</span>
                      </label>
                      <input
                        id="consultationEmail"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                </div>

                <fieldset className="consultation-session-field">
                  <legend>Session preference</legend>

                  <div className="consultation-session-options">
                    <label
                      className={`consultation-session-option ${
                        formData.sessionPreference === "in-person"
                          ? "active"
                          : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="sessionPreference"
                        value="in-person"
                        checked={formData.sessionPreference === "in-person"}
                        onChange={handleChange}
                      />
                      <span>In Person</span>
                    </label>

                    <label
                      className={`consultation-session-option ${
                        formData.sessionPreference === "online" ? "active" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="sessionPreference"
                        value="online"
                        checked={formData.sessionPreference === "online"}
                        onChange={handleChange}
                      />
                      <span>Online</span>
                    </label>
                  </div>
                </fieldset>

                <div className="consultation-field consultation-message-field">
                  <label htmlFor="consultationMessage">
                    Anything you’d like us to know?{" "}
                    <span className="optional">(optional)</span>
                  </label>

                  <textarea
                    id="consultationMessage"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share as much or as little as you're comfortable with."
                    rows={4}
                  />
                </div>

                <div className="consultation-submit">
                  <Button type="submit" variant="gold" showArrow>
                    Request my consultation
                  </Button>

                  <p>Your details stay strictly confidential.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookConsultation;
