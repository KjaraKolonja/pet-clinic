import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SpecialOffers from './components/SpecialOffers';
import Services from './components/Services';
import BookOnline from './components/BookOnline';
import Locations from './components/Locations';
import Footer from './components/Footer';
import './assets/style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SpaAndWellness from './components/SpaAndWellness';
import Surgery from './components/Surgery';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Home />
        <SpecialOffers />
        <Services />
        <Routes>
          <Route path="/spa-and-wellness" element={<SpaAndWellness />} />
          <Route path="/surgery" element={<Surgery />} />
        </Routes>
        <BookOnline/>
        <Locations />
        <Footer />
        <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
  );
}

export default App;
