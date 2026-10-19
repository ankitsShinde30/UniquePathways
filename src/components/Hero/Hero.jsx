import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "../ui/Button";
import HeroSlider from "./HeroSlider";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="hero pb-0 pb-md-5">
      <div className="hero__background">
        <div className="container">
          <div className="hero__content text-center">
            <div className="hero__intro" data-aos="fade-up">
              <h1 className="hero__title">
                Healing that reaches
                <br className="hero__title-break" /> the <em>root</em> of the
                mind.
              </h1>

              <p className="hero__description">
                Where psychological expertise meets spiritual wisdom — creating
                pathways to genuine, lasting change.
              </p>
            </div>

            <div
              className="hero__actions d-flex flex-column flex-sm-row justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <Button
                variant="gold"
                showArrow
                className="hero__primary-button"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                About Dr. Arti Kumbhar
              </Button>

              <Button
                variant="burgundy-outline"
                className="hero__secondary-button"
                onClick={() => {
                  document.getElementById("service-section")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slider is now outside the cream background */}
      <div className="container hero__slider-container">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
