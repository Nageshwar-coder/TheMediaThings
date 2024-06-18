import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Loading from './components/Loading'; // Import the Loading component

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading content (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed

    // Show the loading screen on page reload
    const handleBeforeUnload = () => {
      setIsLoading(true);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contactUs" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
