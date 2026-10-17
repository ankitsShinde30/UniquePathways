
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "./HeroSlider.css";

const galleryImages = [
  {
    id: 1,
    src: "src/assets/slider1.png",
    alt: "Peaceful mountain lake and meditation",
  },
  {
    id: 2,
    src: "src/assets/slider2.png",
    alt: "Meditation at sunset",
  },
  {
    id: 3,
    src: "src/assets/slider3.png",
    alt: "People sharing a moment together",
  },
  {
    id: 4,
    src: "src/assets/slider4.png",
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
        <span
          className="hero-slider__overlay"
          aria-hidden="true"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default HeroSlider;
