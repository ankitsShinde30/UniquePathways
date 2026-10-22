import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../ui/Button";
import "./BookConsultation.css";
import "./validation.css";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "").replace(
  /\/+$/,
  "",
);
const ENDPOINT = `${API_BASE_URL}/send-consultation.php`;

const initialFormData = {
  concern: "",
  fullName: "",
  phone: "",
  email: "",
  sessionPreference: "in-person",
  message: "",
};

const concernOptions = [
  ["mental-health", "Psychotherapy & Mental Health"],
  ["relationship", "Relationship & Family Counselling"],
  ["child-youth", "Child & Youth Development"],
  ["manoragini", "ManoRagini Mindset Programmes"],
  ["trauma-healing", "Trauma Healing & Emotional Release"],
  ["other", "Other"],
];

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
  { type: "hours", label: "Hours", value: "Mon – Sat, 10:00 am – 7:00 pm" },
];

function ContactIcon({ type }) {
  if (type === "phone")
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
  if (type === "email")
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

const validateField = (name, value) => {
  const trimmed = value.trim();
  switch (name) {
    case "concern":
      return concernOptions.some(([key]) => key === value)
        ? ""
        : "Please select what you need help with.";
    case "fullName":
      if (!trimmed) return "Full name is required.";
      if (trimmed.length < 2 || trimmed.length > 100)
        return "Name must be between 2 and 100 characters.";
      if (!/^[\p{L}\p{M} .'-]+$/u.test(trimmed))
        return "Enter a valid name using letters, spaces, apostrophes, periods, or hyphens.";
      return "";
    case "phone": {
      if (!trimmed) return "Phone number is required.";
      const digits = trimmed.replace(/\D/g, "");
      if (
        !/^\+?[0-9()\s.-]+$/.test(trimmed) ||
        digits.length < 10 ||
        digits.length > 15
      )
        return "Enter a valid phone number with 10–15 digits.";
      return "";
    }
    case "email":
      if (!trimmed) return ""; // Email is optional
      if (
        trimmed.length > 100 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmed)
      )
        return "Enter a valid email address.";
      return "";
    case "sessionPreference":
      return ["in-person", "online"].includes(value)
        ? ""
        : "Please choose a session preference.";
    case "message":
      if (trimmed.length > 1000)
        return "Message must be 1000 characters or fewer.";
      return "";
    default:
      return "";
  }
};

const BookConsultation = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setFormData((prev) => ({ ...prev, [name]: value }));
    setStatus({ type: "", message: "" });
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    Object.keys(initialFormData).forEach((key) => {
      nextErrors[key] = validateField(key, formData[key]);
    });
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus({
        type: "error",
        message: "Please correct the highlighted fields and try again.",
      });
      return;
    }
    if (!API_BASE_URL) {
      setStatus({
        type: "error",
        message:
          "Form is not configured yet. Please contact the website administrator.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(
          result?.message ||
            "Unable to submit your request right now. Please try again.",
        );
      }
      setStatus({
        type: "success",
        message:
          result.message ||
          "Thank you. Your consultation request has been sent.",
      });
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldError = (name) =>
    errors[name] ? (
      <small className="consultation-error" role="alert">
        {errors[name]}
      </small>
    ) : null;

  return (
    <section className="book-consultation" id="contact">
      <div className="container">
        <div className="row g-4 g-xl-5 align-items-stretch">
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

          <div className="col-12 col-lg-7">
            <div
              className="consultation-form-card"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <form onSubmit={handleSubmit} noValidate>
                {status.message && (
                  <div
                    className={`consultation-form-status ${status.type}`}
                    role={status.type === "error" ? "alert" : "status"}
                    aria-live="polite"
                  >
                    {status.message}
                  </div>
                )}

                <div className="consultation-field">
                  <label htmlFor="consultationConcern">
                    What would you like help with?
                  </label>
                  <select
                    id="consultationConcern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={Boolean(errors.concern)}
                    aria-describedby={
                      errors.concern ? "concern-error" : undefined
                    }
                  >
                    <option value="">Select a concern</option>
                    {concernOptions.map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                  {fieldError("concern")}
                </div>

                <div className="consultation-field">
                  <label htmlFor="consultationName">Full name</label>
                  <input
                    id="consultationName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your name"
                    autoComplete="name"
                    maxLength={100}
                    required
                    aria-invalid={Boolean(errors.fullName)}
                  />
                  {fieldError("fullName")}
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
                        onBlur={handleBlur}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        maxLength={20}
                        inputMode="tel"
                        required
                        aria-invalid={Boolean(errors.phone)}
                      />
                      {fieldError("phone")}
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
                        onBlur={handleBlur}
                        placeholder="you@example.com"
                        autoComplete="email"
                        maxLength={100}
                        aria-invalid={Boolean(errors.email)}
                      />
                      {fieldError("email")}
                    </div>
                  </div>
                </div>

                <fieldset className="consultation-session-field">
                  <legend>Session preference</legend>
                  <div className="consultation-session-options">
                    {["in-person", "online"].map((preference) => (
                      <label
                        key={preference}
                        className={`consultation-session-option ${formData.sessionPreference === preference ? "active" : ""}`}
                      >
                        <input
                          type="radio"
                          name="sessionPreference"
                          value={preference}
                          checked={formData.sessionPreference === preference}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <span>
                          {preference === "in-person" ? "In Person" : "Online"}
                        </span>
                      </label>
                    ))}
                  </div>
                  {fieldError("sessionPreference")}
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
                    onBlur={handleBlur}
                    placeholder="Share as much or as little as you're comfortable with."
                    rows={4}
                    maxLength={1000}
                    aria-invalid={Boolean(errors.message)}
                  />
                  <small className="consultation-character-count">
                    {formData.message.length}/1000
                  </small>
                  {fieldError("message")}
                </div>

                <div className="consultation-submit">
                  <Button
                    type="submit"
                    variant="gold"
                    showArrow
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? "Sending request..."
                      : "Request my consultation"}
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
