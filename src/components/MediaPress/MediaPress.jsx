import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../ui/Button";
import "./MediaPress.css";

const videos = [
  {
    id: 1,
    title: "Relationship Advice",
    image: "src/assets/relationship_advice.png",
    videoId: "z0KswlJltwY",
  },
  {
    id: 2,
    title: "Mind Coach",
    image: "src/assets/mind_coach.png",
    videoId: "ehXR4oJzKiY",
  },
  {
    id: 3,
    title: "Mental Health",
    image: "src/assets/mental_health.png",
    videoId: "t2LZsN9dLG4",
  },
];

const MediaPress = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
    });
  }, []);

  const [activeVideo, setActiveVideo] = useState(null);

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const scrollToBook = () => {
    document.getElementById("grapevine-book")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="section-page media-press-section" id="media-press">
      <div className="container">
        {/* Section heading */}
        <div className="media-press-header" data-aos="fade-up">
          <div className="media-press-heading">
            <p className="small-title">Media &amp; Press</p>
            <h2>Recognised for service to mental health</h2>
          </div>

          <Button
            variant="burgundy-outline"
            showArrow
            onClick={scrollToBook}
            className="headBtn"
          >
            All media & press
          </Button>
        </div>

        {/* YouTube video thumbnails */}

        {/* YouTube videos — inline playback */}
        <div className="media-video-grid" id="media-videos">
          {videos.map((video, index) => (
            <div
              className="media-video-card"
              key={video.id}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              {activeVideo === video.id ? (
                <iframe
                  className="media-video-iframe"
                  src={`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  className="media-video-trigger"
                  onClick={() => setActiveVideo(video.id)}
                  aria-label={`Play ${video.title} video`}
                >
                  <img
                    src={video.image}
                    alt={`${video.title} video thumbnail`}
                    loading="lazy"
                  />

                  {/* <span className="media-video-overlay">
            <span className="media-play-button" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M8 5.8c0-.8.9-1.3 1.6-.9l10 6.2a1 1 0 0 1 0 1.7l-10 6.2c-.7.4-1.6-.1-1.6-.9V5.8Z" />
              </svg>
            </span>

            <span className="media-video-title">
              {video.title}
            </span>
          </span> */}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Featured book */}
        <div
          className="media-book-feature"
          id="grapevine-book"
          data-aos="fade-up"
        >
          <div className="media-book-image">
            <img
              src="src/assets/The_Grapevine_Mind_paperback_by_Dr._Arti_S._Kumbhar.png"
              alt="The Grapevine Mind paperback by Dr. Arti S. Kumbhar"
              loading="lazy"
            />
          </div>

          <div className="media-book-content">
            <p className="small-title">A book by Dr. Arti S. Kumbhar</p>

            <h2>The Grapevine Mind</h2>

            <p className="media-book-tagline">Empowering the Powers Within</p>

            <p className="media-book-description">
              A practical guide to mental wellbeing, emotional resilience and
              self-awareness — moving from a reactive state of mind to an
              empowered one.
            </p>

            <div className="media-book-actions">
              <Button
                variant="gold"
                showArrow
                onClick={() =>
                  openLink(
                    "https://www.amazon.in/Grapevine-Mind-Empowering-Powers-within-ebook/dp/B0CCW7YL15",
                  )
                }
              >
                Buy on Amazon
              </Button>

              <Button
                variant="burgundy-outline"
                onClick={() => {
                  window.location.href = "#contact";
                }}
              >
                Book a session with the author
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPress;
