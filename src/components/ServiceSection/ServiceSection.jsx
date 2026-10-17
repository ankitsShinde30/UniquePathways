import React from "react";
import "./ServiceSection.css";
import Button from ".././ui/Button";

const servicePaths = [
  {
    label: "PERSONALIZED MENTORSHIP",
    title: "Clinical Psychology & Counselling",
    description:
      "Evidence-based therapy for the mind's most difficult seasons.",
    services: [
      "Psychotherapy & mental health support",
      "Relationship & family counselling",
      "Child & youth development",
    ],
    theme: "coral",
  },
  {
    label: "PERSONALIZED MENTORSHIP",
    title: "Subconscious Coaching & Manifestation",
    description: "Rewire the patterns beneath conscious thought.",
    services: [
      "ManoRagini™ mindset programmes",
      "Mind frequency resetting",
      "Trauma healing & emotional release",
    ],
    theme: "sage",
  },
  {
    label: "PERSONALIZED MENTORSHIP",
    title: "Community Support & Mentorship",
    description: "Heal alongside others walking the same path.",
    services: ["Group healing circles", "Corporate & professional coaching"],
    theme: "gold",
  },
];

function ServiceCard({ path, index }) {
  return (
    <div
      className="col-12 col-lg-4"
      data-aos="fade-up"
      data-aos-delay={index * 150}
    >
      <article className={`service-card service-card--${path.theme}`}>
        <div className="service-card__intro">
          <div className="service-card__label">{path.label}</div>

          <h3 className="service-card__title">{path.title}</h3>

          <p className="service-card__description">{path.description}</p>
        </div>

        <div className="service-card__services">
          {path.services.map((service) => (
            <div className="service-card__item" key={service}>
              {service}
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

export default function ServiceSection() {
  return (
    <section className="service-section" id="service-section">
      <div className="container service-section__container">
        <div className="service-section__content">
          {/* Editorial introduction */}
          <header
            className="service-section__header d-flex justify-content-between align-items-end"
            data-aos="fade-up"
          >
            <h2 className="service-section__heading">
              Three ways we walk the path with you.
            </h2>

            <div className="interwoven-circles" aria-hidden="true">
              <span className="interwoven-circles__filled" />
              <span className="interwoven-circles__outline" />
            </div>
          </header>

          {/* Service cards */}
          <div className="service-section__main">
            <div className="row g-4 service-section__cards">
              {servicePaths.map((path, index) => (
                <ServiceCard key={path.theme} path={path} index={index} />
              ))}
            </div>

            {/* Consultation callout */}
            <div
              className="consultation-callout d-flex flex-column flex-md-row justify-content-between align-items-md-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="consultation-callout__text">
                Not sure which path fits? The first consultation helps you
                decide.
              </p>

              <Button
                variant="gold"
                showArrow
                onClick={() => {
                  window.location.href = "#contact";
                }}
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
