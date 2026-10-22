import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "./ClientStories.css";

import Button from "../ui/Button";

const stories = [
  {
    quote:
      "I came in for panic attacks I’d lived with for years. Dr. Arti didn’t just help me cope — she helped me find where it was coming from. For the first time I feel calm without trying to be.",
    name: "Priya M.",
    details: "IT professional · Anxiety & stress therapy",
  },
  {
    quote:
      "I came in for panic attacks I’d lived with for years. Dr. Arti didn’t just help me cope — she helped me find where it was coming from. For the first time I feel calm without trying to be.",
    name: "Priya M.",
    details: "IT professional · Anxiety & stress therapy",
  },
  {
    quote:
      "I came in for panic attacks I’d lived with for years. Dr. Arti didn’t just help me cope — she helped me find where it was coming from. For the first time I feel calm without trying to be.",
    name: "Priya M.",
    details: "IT professional · Anxiety & stress therapy",
  },
  {
    quote:
      "I came in for panic attacks I’d lived with for years. Dr. Arti didn’t just help me cope — she helped me find where it was coming from. For the first time I feel calm without trying to be.",
    name: "Priya M.",
    details: "IT professional · Anxiety & stress therapy",
  },
  {
    quote:
      "I came in for panic attacks I’d lived with for years. Dr. Arti didn’t just help me cope — she helped me find where it was coming from. For the first time I feel calm without trying to be.",
    name: "Priya M.",
    details: "IT professional · Anxiety & stress therapy",
  },
  {
    quote:
      "I came in for panic attacks I’d lived with for years. Dr. Arti didn’t just help me cope — she helped me find where it was coming from. For the first time I feel calm without trying to be.",
    name: "Priya M.",
    details: "IT professional · Anxiety & stress therapy",
  },
];

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={direction === "left" ? "client-stories__arrow--left" : ""}
    >
      <path
        d="M2.5 8H13.5M8 2.5L13.5 8L8 13.5"
        stroke="currentColor"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ClientStories() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="client-stories">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Left Content */}
          <div className="col-12 col-lg-4" data-aos="fade-right">
            <div className="client-stories__intro">
              <div>
                <div className="client-stories__eyebrow">Client stories</div>

                <h2 className="client-stories__title">
                  Quiet, lasting
                  <br className="client-stories__heading-break" /> change
                </h2>
              </div>

              <Button
                variant="burgundy-outline"
                onClick={() => {
                  window.location.href = "/testimonials";
                }}
              >
                More stories
              </Button>
            </div>
          </div>

          {/* Right Content: Swiper */}
          <div
            className="col-12 col-lg-8"
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <div className="client-stories__content" id="client-stories-slider">
              <Swiper
                modules={[Autoplay, A11y]}
                slidesPerView={1}
                spaceBetween={24}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
                a11y={{
                  prevSlideMessage: "Previous client story",
                  nextSlideMessage: "Next client story",
                }}
              >
                {stories.map((story, index) => (
                  <SwiperSlide key={index}>
                    <figure className="client-stories__slide">
                      <blockquote className="client-stories__quote">
                        “{story.quote}”
                      </blockquote>

                      <figcaption className="client-stories__caption">
                        <div className="client-stories__name">{story.name}</div>

                        <div className="client-stories__details">
                          {story.details}
                        </div>
                      </figcaption>
                    </figure>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Slider Controls */}
              <div
                className="client-stories__controls"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="client-stories__navigation">
                  <button
                    type="button"
                    className="client-stories__nav-button"
                    aria-label="Previous story"
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <ArrowIcon direction="left" />
                  </button>

                  <button
                    type="button"
                    className="client-stories__nav-button"
                    aria-label="Next story"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <ArrowIcon />
                  </button>
                </div>

                <div
                  className="client-stories__pagination"
                  aria-label="Choose a client story"
                >
                  {stories.map((story, index) => (
                    <button
                      key={`${story.name}-${index}`}
                      type="button"
                      className={`client-stories__dot ${
                        activeIndex === index
                          ? "client-stories__dot--active"
                          : ""
                      }`}
                      aria-label={`Show story ${index + 1}`}
                      aria-current={activeIndex === index ? "true" : undefined}
                      onClick={() => swiperRef.current?.slideTo(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
