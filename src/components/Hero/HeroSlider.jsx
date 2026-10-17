import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "./HeroSlider.css";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";

const galleryImages = [
  {
    id: 1,
    src: slider1,
    alt: "Peaceful mountain lake and meditation",
  },
  {
    id: 2,
    src: slider2,
    alt: "Meditation at sunset",
  },
  {
    id: 3,
    src: slider3,
    alt: "People sharing a moment together",
  },
  {
    id: 4,
    src: slider4,
    alt: "Hands reaching out in support",
  },
];

const HeroSlider = () => {
  return (
    <div className="hero-slider" data-aos="fade-up" data-aos-delay="250">
      <Swiper
        modules={[Autoplay, A11y]}
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        speed={800}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
        }}
        watchOverflow={false}
        observer={true}
        observeParents={true}
        aria-label="Healing and therapy gallery"
      >
        {galleryImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="hero-slider__item">
              <img
                src={image.src}
                alt={image.alt}
                className="hero-slider__image"
                loading="lazy"
              />
              <span className="hero-slider__overlay" aria-hidden="true" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
