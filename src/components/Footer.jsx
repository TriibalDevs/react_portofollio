import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_column">
          <h3>John Doe</h3>
          <p>40 rue Laure Diebold<br />
             69009 Lyon, France<br />
             10 20 30 40 50<br />
             john.doe@gmail.com
          </p>
          <div className="social_icons">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        <div className="footer_column">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Me contacter</a></li>
            <li><a href="#">Mentions légales</a></li>
          </ul>
        </div>

        <div className="footer_column">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li><a href="#">Fresh Food</a></li>
            <li><a href="#">Restaurant Akira</a></li>
            <li><a href="#">Espace bien-être</a></li>
            <li><a href="#">SEO</a></li>
            <li><a href="#">Création d'une API</a></li>
            <li><a href="#">Maquette d'un site</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
