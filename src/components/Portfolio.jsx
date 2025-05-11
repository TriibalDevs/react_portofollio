import React from "react";
import banner from "../assets/img/banner.jpg";
import fresh from "../assets/img/fresh-food.jpg";
import sushi from "../assets/img/restaurant-japonais.jpg";
import spa from "../assets/img/espace-bien-etre.jpg";
import seo from "../assets/img/seo.jpg";
import api from "../assets/img/coder.jpg";
import figma from "../assets/img/screens.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      image: fresh,
      link: "#",
      tech: "Site réalisé avec PHP et MySQL",
    },
    {
      title: "Restaurant Akira",
      description: "Site de vente de produits frais en ligne",
      image: sushi,
      link: "#",
      tech: "Site réalisé avec WordPress",
    },
    {
      title: "Espace bien-être",
      description: "Site de vente de produits frais en ligne",
      image: spa,
      link: "#",
      tech: "Site réalisé avec LARAVEL",
    },
    {
      title: "SEO",
      description: "Amélioration du référencement d’un site e-commerce",
      image: seo,
      link: "#",
      tech: "Utilisation des outils SEO",
    },
    {
      title: "Création d'une API",
      description: "Création d’une API RESTFULL publique",
      image: api,
      link: "#",
      tech: "PHP - SYMFONY",
    },
    {
      title: "Maquette d’un site web",
      description: "Réalisation de la maquette d’un site",
      image: figma,
      link: "#",
      tech: "Réalisé avec FIGMA",
    },
  ];

  return (
    <div>
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>

      {/* Contenu du portfolio */}
      <div className="portfolio-container">
        <div className="title-portfolio">
          <h1>Portfolio</h1>
          <p>Voici quelques unes de mes réalisations</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                <button className="visit-button">Voir le site</button>
              </a>
              <span className="tech">{project.tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
