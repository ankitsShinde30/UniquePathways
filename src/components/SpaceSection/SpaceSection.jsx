import React from "react";
import Button from "../ui/Button";
import "./SpaceSection.css";

import counsellingRoom from "../../assets/counselling-room.png";
import healingCircle from "../../assets/healing-circle.png";
import meditating from "../../assets/meditating.png";
import workshop from "../../assets/workshop.png";
import awardCeremony from "../../assets/award-ceremony.png";

const spaceImages = [
  {
    id: 1,
    src: counsellingRoom,
    alt: "Calm counselling room with plum armchairs and morning light",
    className: "space-gallery__item--main",
  },
  {
    id: 2,
    src: healingCircle,
    alt: "Participants seated in a healing circle with eyes closed",
  },
  {
    id: 3,
    src: meditating,
    alt: "Woman meditating beside a window at sunrise",
  },
  {
    id: 4,
    src: workshop,
    alt: "Facilitator leading a corporate resilience workshop",
  },
  {
    id: 5,
    src: awardCeremony,
    alt: "Dr. Arti S. Kumbhar receiving an award on stage",
  },
];

const SpaceSection = () => {
  return (
    <section className="space-section">
      <div className="container">
        <div className="space-section__inner">
          {/* Section Header */}
          <div className="row align-items-end justify-content-between g-4 space-section__header">
            <div className="col-12 col-lg-7" data-aos="fade-right">
              <div className="space-section__eyebrow">
                Inside Unique Pathway
              </div>

              <h2 className="space-section__title mb-0">
                A space designed to feel safe
              </h2>
            </div>

            <div
              className="col-12 col-lg-auto"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <Button
                variant="burgundy-outline"
                onClick={() => {
                  window.location.href = "/about";
                }}
              >
                View gallery
              </Button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="row g-3 space-gallery">
            {/* Left: Main Image */}
            <div
              className="col-12 col-lg-6 space-gallery__column"
              data-aos="fade-up"
            >
              <figure className="space-gallery__item space-gallery__item--main">
                <img
                  src={spaceImages[0].src}
                  alt={spaceImages[0].alt}
                  className="img-fluid w-100"
                  loading="lazy"
                />
              </figure>
            </div>

            {/* Right: Four Images in a 2x2 Grid */}
            <div className="col-12 col-lg-6">
              <div className="row g-3 space-gallery__grid">
                {spaceImages.slice(1, 5).map((image, index) => (
                  <div
                    key={image.id}
                    className="col-6 space-gallery__column"
                    data-aos="fade-up"
                    data-aos-delay={(index + 1) * 100}
                  >
                    <figure className="space-gallery__item">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="img-fluid w-100"
                        loading="lazy"
                      />
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaceSection;
