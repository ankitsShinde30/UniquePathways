import React, { useState } from "react";
import Button from "../../ui/Button";
import "./Navbar.css";

import logo from "../../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleConsultation = () => {
    setMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Unique Pathways" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1.75 16.4792L16.4833 1.75M1.75 1.75L16.4833 16.4792"
                stroke="black"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="33"
              height="24"
              viewBox="0 0 33 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.2917 11.9792C32.2917 11.5648 32.127 11.1673 31.834 10.8743C31.541 10.5813 31.1436 10.4167 30.7292 10.4167H1.5625C1.1481 10.4167 0.750671 10.5813 0.457646 10.8743C0.16462 11.1673 0 11.5648 0 11.9792C0 12.3936 0.16462 12.791 0.457646 13.084C0.750671 13.377 1.1481 13.5417 1.5625 13.5417H30.7292C31.1436 13.5417 31.541 13.377 31.834 13.084C32.127 12.791 32.2917 12.3936 32.2917 11.9792ZM32.2917 1.5625C32.2917 1.1481 32.127 0.750671 31.834 0.457646C31.541 0.16462 31.1436 0 30.7292 0H1.5625C1.1481 0 0.750671 0.16462 0.457646 0.457646C0.16462 0.750671 0 1.1481 0 1.5625C0 1.9769 0.16462 2.37433 0.457646 2.66735C0.750671 2.96038 1.1481 3.125 1.5625 3.125H30.7292C31.1436 3.125 31.541 2.96038 31.834 2.66735C32.127 2.37433 32.2917 1.9769 32.2917 1.5625ZM32.2917 22.3958C32.2917 21.9814 32.127 21.584 31.834 21.291C31.541 20.998 31.1436 20.8333 30.7292 20.8333H1.5625C1.1481 20.8333 0.750671 20.998 0.457646 21.291C0.16462 21.584 0 21.9814 0 22.3958C0 22.8102 0.16462 23.2077 0.457646 23.5007C0.750671 23.7937 1.1481 23.9583 1.5625 23.9583H30.7292C31.1436 23.9583 31.541 23.7937 31.834 23.5007C32.127 23.2077 32.2917 22.8102 32.2917 22.3958Z"
                fill="#6E1423"
              />
            </svg>
          )}
        </button>

        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul
            className="navbar-nav ms-auto me-3 mb-2 mb-lg-0"
            onClick={() => setMenuOpen(false)}
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#who-we-help">
                Who We Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#media-press">
                Media
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <form className="d-flex" onSubmit={(event) => event.preventDefault()}>
            <Button variant="gold" showArrow onClick={handleConsultation}>
              Book a Consultation
            </Button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
