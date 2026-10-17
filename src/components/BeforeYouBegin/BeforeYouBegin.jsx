import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../ui/Button";
import "./BeforeYouBegin.css";

const questions = [
  {
    question: "Is this therapy or coaching?",
    answer:
      "Both, depending on what you need. Unique Pathway™ is a clinical psychology practice first. Clinical concerns are treated with structured psychotherapy, and subconscious coaching and holistic methods are added where they genuinely help.",
  },
  {
    question: "What happens in the first consultation?",
    answer:
      "Your first consultation is an opportunity to discuss your concerns, personal goals and current challenges. Together, we explore your needs and identify an appropriate path forward.",
  },
  {
    question: "Do I need a diagnosis or referral to book?",
    answer:
      "No diagnosis or referral is required to get started. You can book a consultation directly and discuss your concerns with us to understand the support that may be appropriate for you.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Online sessions may be available depending on your needs and location. Contact us directly to discuss the available options and find a suitable format for your consultation.",
  },
  {
    question: "How many sessions will I need?",
    answer:
      "The number of sessions depends on your individual goals, concerns and progress. We discuss your needs during the consultation and work together to determine a suitable approach.",
  },
];

const BeforeYouBegin = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="section-page before-you-begin">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Introduction */}
          <div className="col-12 col-lg-4">
            <div className="before-you-begin-intro" data-aos="fade-up">
              <div className="common-title">
                <h6>Questions</h6>
                <h2>Before you begin</h2>
              </div>

              <p>
                Taking the first step is often the hardest. Here’s what people
                usually ask.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Button variant="burgundy-outline">All FAQs</Button>

                <Button variant="gold" showArrow>
                  Ask us directly
                </Button>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="col-12 col-lg-8">
            <div
              className="accordion before-you-begin-accordion"
              id="beforeYouBeginAccordion"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {questions.map((item, index) => {
                const isFirst = index === 0;

                return (
                  <div className="accordion-item" key={item.question}>
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          isFirst ? "" : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#question-${index}`}
                        aria-expanded={isFirst ? "true" : "false"}
                        aria-controls={`question-${index}`}
                      >
                        <span>{item.question}</span>
                        <span className="accordion-icon" aria-hidden="true" />
                      </button>
                    </h3>

                    <div
                      id={`question-${index}`}
                      className={`accordion-collapse collapse ${
                        isFirst ? "show" : ""
                      }`}
                      data-bs-parent="#beforeYouBeginAccordion"
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeYouBegin;
