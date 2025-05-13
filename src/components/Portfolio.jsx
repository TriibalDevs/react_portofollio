// import React from "react";
import banner from "../assets/img/banner.jpg";
import Datas from "./Datas.jsx";

const Portfolio = () => {
  const dataProjects = Datas();
    console.log(dataProjects);
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
          {dataProjects.map((project, index) => (
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
