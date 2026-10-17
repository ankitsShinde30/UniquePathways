import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../ui/Button";
import "./ManoRagini.css";
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

const ManoRagini = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="section-dark manoragini-section">
      <div className="manoragini-vector">
        <svg
          width="211"
          height="216"
          viewBox="0 0 211 216"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.65418 92.0988L2.0032 117.637C1.86678 122.99 5.86768 127.766 10.7829 127.891L76.0302 129.554L74.5274 132.404L45.7419 186.969L45.7358 186.98C45.176 188.025 44.8319 189.171 44.7247 190.351C44.6175 191.531 44.7489 192.721 45.1113 193.85C45.4737 194.978 46.0597 196.022 46.8344 196.92C47.6091 197.817 48.5571 198.55 49.6212 199.075L49.6656 199.097L72.3803 211.004L72.3813 211.004C74.5679 212.138 77.1149 212.364 79.4672 211.631C81.6725 210.944 83.5391 209.468 84.7139 207.495L84.9391 207.094L109.238 160.735L111.1 157.181L112.817 160.806L135.224 208.12L135.228 208.129L135.232 208.137C136.267 210.376 138.148 212.115 140.464 212.973C142.635 213.777 145.022 213.746 147.164 212.895L147.589 212.713L170.741 201.868L170.751 201.863L170.76 201.86C171.853 201.361 172.836 200.65 173.651 199.768C174.465 198.887 175.095 197.851 175.504 196.723C175.913 195.595 176.094 194.396 176.034 193.198C175.974 192 175.674 190.826 175.155 189.744L175.153 189.738L148.789 134.449L147.386 131.505L212.24 133.158C214.914 133.106 217.475 132.073 219.433 130.254C221.387 128.439 222.603 125.969 222.852 123.317L223.503 97.7879C223.565 95.3538 222.428 92.9732 220.508 91.1411C218.585 89.3061 216.005 88.1523 213.443 88.087L148.165 86.4231L149.659 83.5764L178.452 28.7103L178.453 28.7093C179.014 27.6406 179.359 26.4713 179.466 25.2692C179.574 24.0669 179.442 22.855 179.08 21.7035C178.717 20.5521 178.13 19.483 177.352 18.5589C176.575 17.6348 175.621 16.8736 174.547 16.3187L174.537 16.3135L151.813 4.4025C149.628 3.27152 147.085 3.04775 144.735 3.77955C142.386 4.51134 140.42 6.13874 139.266 8.30865L139.267 8.30965L114.907 54.6766L113.042 58.225L111.329 54.602L88.9446 7.29946C87.8841 5.08842 85.9945 3.38204 83.684 2.55157C81.5178 1.77298 79.1457 1.82198 77.0214 2.67968L76.5996 2.86235L53.4597 13.7675L53.4557 13.7693C52.3546 14.2849 51.366 15.0125 50.5477 15.9107C49.8318 16.6966 49.2582 17.5993 48.8512 18.5783L48.687 19.003C48.2768 20.1461 48.0968 21.359 48.1574 22.5717C48.2105 23.6326 48.4465 24.6754 48.8545 25.654L49.0403 26.07L75.4911 81.6458L76.8912 84.5877L11.9289 82.9318C10.7253 82.9254 9.53207 83.154 8.41644 83.6052C7.29063 84.0606 6.26577 84.7339 5.40112 85.5857C4.53658 86.4373 3.84853 87.4508 3.3772 88.5683C2.90583 89.6859 2.6604 90.8862 2.65418 92.0988Z"
            stroke="url(#paint0_linear_169_454)"
            strokeWidth="4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_169_454"
              x1="59.6014"
              y1="5.80872"
              x2="121.673"
              y2="148.232"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* Left Content */}
          <div className="col-12 col-lg-5">
            <div className="manoragini-intro">
              <div className="common-title" data-aos="fade-up">
                <h6>Signature programme</h6>
                <h2>The ManoRagini Programme</h2>
              </div>

              <p className="manoragini-description" data-aos="fade-up">
                Built on Dr. Kumbhar’s ManoRagini Mind 5 Element – The Power of
                Creation. Clinical psychology meets holistic healing to
                restructure thought patterns at their source.
              </p>

              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="manoraginiImage"
              >
                <img
                  src={signatureProgramme}
                  alt="ManoRagini Angel Hub healing circle"
                  className="img-fluid rounded-4"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-12 col-lg-7 ps-0 ps-md-5">
            <div className="manoragini-content ps-0 ps-sm-4">
              <div className="row g-0 manoragini-features">
                {programmeFeatures.map((feature, index) => (
                  <div
                    className="col-6 manoragini-feature-col"
                    key={feature.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <article
                      className={`manoragini-feature ${
                        index >= 2 ? "has-border-top" : ""
                      }`}
                    >
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </article>
                  </div>
                ))}
              </div>

              <div
                className="manoragini-actions d-flex flex-wrap align-items-center gap-3"
                data-aos="fade-up"
              >
                <Button variant="white" showArrow>
                  Explore the programme
                </Button>

                <Button variant="light-outline">Join the Hub</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManoRagini;
