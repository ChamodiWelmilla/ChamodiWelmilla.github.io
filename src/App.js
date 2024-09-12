import React from "react";
import "./App.css";
import AppRoutes from "./routes/Route"; 
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navbar";

function App() {
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
