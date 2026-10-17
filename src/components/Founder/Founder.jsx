import React from "react";
import Button from "../ui/Button";
import "./Founder.css";
import "aos/dist/aos.css";
import founderimg from "../../assets/founder.png";

function Founder() {
  return (
    <section className="founder-section">
      <div className="container founder-container">
        <div className="row founder-row">
          {/* Founder Image */}
          <div
            className="col-12 col-lg-5 founder-image-column"
            data-aos="fade-right"
          >
            <img
              src={founderimg}
              className="founder-image"
              alt="Dr. Arti S. Kumbhar, founder of Unique Pathway"
              loading="lazy"
            />
          </div>

          {/* Founder Content */}
          <div className="col-12 col-lg-7">
            <div className="founder-content">
              <div className="founder-intro" data-aos="fade-up">
                <h6 className="founder-eyebrow">Meet the founder</h6>

                <h2 className="founder-heading">Dr. Arti S. Kumbhar</h2>

                <p className="founder-description">
                  Dr. Arti S. Kumbhar is a Clinical Psychologist, Mental Health
                  Expert and the founder of Unique Pathway™ and ManoRagini™. Her
                  work bridges professional psychological treatment with
                  holistic, subconscious healing — built on over 30 years of
                  research on the human mind.
                </p>
              </div>

              {/* Founder Quote */}
              <blockquote
                className="founder-tagline"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <h3>
                  “You don’t heal by controlling the outside world. You heal by
                  becoming someone new inside it.”
                </h3>
              </blockquote>

              {/* Awards */}
              <div
                className="founder-awards"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="row">
                  <div className="col-12 col-md-6 award_one">
                    <div className="founder-award-item">
                      <h4>Rashtriya Abhiman Puraskar</h4>
                      <h6>
                        National-level mega award ceremony · Mumbai, 25 March
                        2023
                      </h6>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="founder-award-item">
                      <h4>Samaj Ratna Puraskar</h4>
                      <h6>Government of Maharashtra</h6>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className="founder-actions"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Button variant="gold" showArrow>
                  Read her story
                </Button>

                <Button
                  variant="burgundy-outline"
                  onClick={() => {
                    window.location.href = "#contact";
                  }}
                >
                  Book with Dr. Arti
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
