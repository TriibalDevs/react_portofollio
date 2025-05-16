import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Contact from './pages/Contact'; 
import Mentions from './pages/Mentions';
import Error404 from './pages/404';

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
