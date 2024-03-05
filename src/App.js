import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Dek from "./pages/Dek";
import Mob from "./pages/Mob";
import Aboutus from "./pages/Aboutus"; // Import the Aboutus page

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Assuming 768px is your mobile breakpoint

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/mob":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update isMobile state based on screen width
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<>{isMobile ? <Mob /> : <Dek />}</>} />
      <Route path="/aboutus" element={<Aboutus />} /> {/* Add a route for the Aboutus page */}
    </Routes>
  );
}

export default App;

