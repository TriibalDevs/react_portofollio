import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Contact from './components/Contact'; 
import Mentions from './components/Mentions';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions" element={<Mentions />} />
          </Routes>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
