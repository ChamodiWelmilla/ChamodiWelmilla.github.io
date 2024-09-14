import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "./App.css";
import AppRoutes from "./routes/Route";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navbar";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
    }, 3000);
    return () => clearTimeout(timer); // Cleanup timeout when component unmounts
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Show Preloader while loading is true
  if (loading) {
    return <Preloader />;
  }

  return (
    <div>
      <Navigation className="position-absolute w-100 outline-animation" />

      <div style={{ paddingTop: "5rem" }}>
        <AppRoutes />
      </div>

      <footer>
        <div className="container my-5">
          <div className="container">
            <p className="p-3 m-0 text-center">@2024 WelmillaCN</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
