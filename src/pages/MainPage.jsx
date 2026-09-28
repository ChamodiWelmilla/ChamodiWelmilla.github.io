import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';

import Contact from './Contact';

function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="contact" style={{ paddingTop: '50px' }}>
        <Contact />
      </div>
    </div>
  );
}

export default MainPage;
