import React from "react";
import bannerImage from "../assets/img/hero-bg.jpg";
import profileImage from "../assets/img/john-doe-about.jpg"; // Ajoute ton image de profil ici

const Home = () => {
  return (
    <>
      {/* SECTION BANNIÈRE */}
      <div className="banner_homepage" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="overlay"></div>
        <div className="content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button className="btn">En savoir plus</button>
        </div>
      </div>

      {/* SECTION À PROPOS + COMPÉTENCES */}
      <div className="about-section">
        <div className="about-left">
          <h2>À propos</h2>
          <img src={profileImage} alt="profil" className="about-img" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus...</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus...</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus...</p>
        </div>
        <div className="about-right">
          <h2>Mes compétences</h2>
          <div className="skill"><span>HTML5</span><div className="bar html"><div className="fill" style={{ width: '90%' }} /></div></div>
          <div className="skill"><span>CSS3</span><div className="bar css"><div className="fill" style={{ width: '80%' }} /></div></div>
          <div className="skill"><span>JAVASCRIPT</span><div className="bar js"><div className="fill" style={{ width: '70%' }} /></div></div>
          <div className="skill"><span>PHP</span><div className="bar php"><div className="fill" style={{ width: '60%' }} /></div></div>
          <div className="skill"><span>REACT</span><div className="bar react"><div className="fill" style={{ width: '50%' }} /></div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
