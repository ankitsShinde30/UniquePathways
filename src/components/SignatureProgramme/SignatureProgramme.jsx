import React from "react";
import Button from ".././ui/Button";
import "./SignatureProgramme.css";
import signatureProgramme from "../../assets/signatureProgramme.png";

const programmeFeatures = [
  {
    title: "Mind Frequency Reset",
    description:
      "Shift deep-seated subconscious blocks and reprogramme thoughts to align with your goals and manifestation.",
  },
  {
    title: "Angel Hub & Community",
    description:
      "Transformational group support and structured modules where participants share progress and undergo healing alignments.",
  },
  {
    title: "Spreading Unconditional Love",
    description:
      "The soul mission of the curriculum — fostering self-acceptance, healing trauma and resolving relationship friction.",
  },
  {
    title: "The 5 Elements Framework",
    description:
      "Dr. Kumbhar’s proprietary “Power of Creation” concept, bridging emotional wellness with natural mental archetypes.",
  },
];

export default function SignatureProgramme() {
  return (
    <section className="section-dark signature-programme">
      <div className="container">
     <div className="row align-items-center gy-5 gx-4">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="common-title mb-4">
              <h6>Signature programme</h6>

              <h2>The ManoRagini Programme</h2>

              <p>
                Built on Dr. Kumbhar’s ManoRagini Mind 5 Element – The
                Power of Creation. Clinical psychology meets holistic
                healing to restructure thought patterns at their source.
              </p>
            </div>

            <img
              src={signatureProgramme}
              alt="ManoRagini Angel Hub healing circle"
              className="img-fluid rounded-4"
            />
          </div>

          <div className="col-lg-7" data-aos="fade-left">
            <div className="row g-4">
              {programmeFeatures.map((feature, index) => (
                <div
                  className="col-md-6"
                  key={feature.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className={`programme-feature ${
                      index > 1 ? "programme-feature-border" : ""
                    }`}
                  >
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="programme-actions"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Button variant="white" showArrow>
                Explore the programme
              </Button>

              <Button variant="light-outline">
                Join the Hub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}