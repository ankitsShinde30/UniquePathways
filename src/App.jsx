import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";

import Navbar from "./components/common/Navbar/Navbar.jsx";
import Footer from "./components/common/Footer/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
// import WhoWeHelpPage from "./pages/WhoWeHelpPage.jsx";
// import ProductsPage from "./pages/ProductsPage.jsx";
// import TestimonialsPage from "./pages/TestimonialsPage.jsx";
// import MediaPage from "./pages/MediaPage.jsx";
// import GalleryPage from "./pages/GalleryPage.jsx";
// import FAQPage from "./pages/FAQPage.jsx";
// import ContactPage from "./pages/ContactPage.jsx";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));

      // Wait for the destination page to render.
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* <Route path="/who-we-help" element={<WhoWeHelpPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}

          <Route
            path="*"
            element={
              <section className="not-found-page">
                <h1>404 — Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <a href="/">Return Home</a>
              </section>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
