import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import Button from "../../ui/Button";
import "./Navbar.css";
import logo from "../../../assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Who We Help", to: "/who-we-help" },
  { label: "Products", to: "/products" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Media", to: "/media" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Lock the page behind the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    // Avoid layout shift when the scrollbar disappears.
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Close the menu whenever the route or hash changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleConsultation = () => {
    setMenuOpen(false);
    navigate("#contact");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container navbar-container">
          {/* <Link
            className="navbar-brand"
            to="/"
            aria-label="Unique Pathways home"
            onClick={() => setMenuOpen(false)}
          >
            <img src={logo} alt="Unique Pathways" />
          </Link> */}
          <a
            className="navbar-brand"
            href="/"
            onClick={() => setMenuOpen(false)}
          >
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
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 5L19 19M19 5L5 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                width="30"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 3H32M1 12H32M1 21H32"
                  stroke="#6E1423"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>

          <div
            className={`collapse navbar-collapse ${
              menuOpen ? "show mobile-menu-open" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
              {navItems.map((item) => (
                <li className="nav-item" key={item.to}>
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="navbar-consultation">
              <Button variant="gold" showArrow onClick={handleConsultation}>
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <button
          className="mobile-menu-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          tabIndex={-1}
        />
      )}
    </>
  );
}

export default Navbar;
