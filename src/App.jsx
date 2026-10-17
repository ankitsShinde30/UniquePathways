import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";

import Navbar from "./components/common/Navbar/Navbar.jsx";
import Footer from "./components/common/Footer/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Add more routes here */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/services" element={<ServicesPage />} /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
