import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<div>Portfolio</div>} />
            <Route path="/contact" element={<div>Contact</div>} />
            <Route path="/mentions" element={<div>Mentions Légales</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
