import React, { useState, useEffect } from "react"; 
import "./App.css";
import AppRoutes from "./routes/Route";

import Navigation from "./components/Navbar";
import Preloader from "./components/Preloader";
import ScrollAnimator from "./components/ScrollAnimator";

function App() {
  const [loading, setLoading] = useState(true); 
  const [footerActive, setFooterActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000);
    return () => clearTimeout(timer); 
  }, []); 

  const handleFooterClick = () => {
    setFooterActive(true);
    setTimeout(() => setFooterActive(false), 1000);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <Navigation className="position-absolute w-100 outline-animation" />
      <ScrollAnimator />

      <div style={{ paddingTop: "5rem" }}>
        <AppRoutes />
      </div>

      <footer style={{ marginTop: "6rem" }}>
        <div className="container my-5 text-center">
          <p 
            className={`p-3 m-0 footer-text ${footerActive ? "active" : ""}`} 
            onClick={handleFooterClick}
            tabIndex="-1"
          >
            @2026 WelmillaCN
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
