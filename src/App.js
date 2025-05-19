import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
<<<<<<< HEAD
import Contact from './pages/Contact';
import Mentions from './pages/Mentions';
import NotFound from './pages/NotFound';
=======
import Contact from './pages/Contact'; 
import Mentions from './pages/Mentions';
import Error404 from './pages/404';
>>>>>>> 37b8524889f9015d8a081e486ed8c02a80a59112

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
<<<<<<< HEAD
            <Route path="*" element={<NotFound />} />
=======
>>>>>>> 37b8524889f9015d8a081e486ed8c02a80a59112
          </Routes>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
