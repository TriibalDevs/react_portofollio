import React, { useState, useEffect } from "react";
import bannerImage from "../assets/img/hero-bg.jpg";
import profileImage from "../assets/img/john-doe-about.jpg";
import imgGithub from "../assets/img/img_git.png";

const Home = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <>
      {/* MODAL GITHUB */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-github">
            <div className="modal-github-header">
              <strong>Mon profil GitHub</strong>
              <span className="modal-close" onClick={() => setShowModal(false)}>
                &times;
              </span>
            </div>

            <hr />

            <div className="modal-github-body">
              <img
                src={imgGithub}
                alt="avatar"
                className="github-avatar-img"
              />

              <div className="github-info-section">
                <p>
                  <i className="fas fa-user"></i>{" "}
                  <a
                    href="https://github.com/octocat"
                    target="_blank"
                    rel="noreferrer"
                  >
                    John Doe
                  </a>
                </p>
                <p>
                  <i className="fas fa-map-marker-alt"></i> Identité inconnue
                </p>
                <p>
                  <i className="fas fa-comment-dots"></i> As we all know, John
                  Doe’s identity is unknown. I just wanted to contribute without
                  being known.
                </p>
                <p>
                  <i className="fas fa-folder-open"></i> Repositories : <b>1</b>
                </p>
                <p>
                  <i className="fas fa-users"></i> Followers : <b>16</b>
                </p>
                <p>
                  <i className="fas fa-user-plus"></i> Following : <b>0</b>
                </p>
              </div>
            </div>

            <div className="modal-github-footer">
              <button onClick={() => setShowModal(false)}>Fermer</button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION BANNIÈRE */}
      <div
        className="banner_homepage"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            necessitatibus...
          </p>
        </div>
        <div className="about-right">
          <h2>Mes compétences</h2>
          <div className="skill">
            <span>HTML5</span>
            <div className="bar html">
              <div className="fill" style={{ width: "90%" }} />
            </div>
          </div>
          <div className="skill">
            <span>CSS3</span>
            <div className="bar css">
              <div className="fill" style={{ width: "80%" }} />
            </div>
          </div>
          <div className="skill">
            <span>JAVASCRIPT</span>
            <div className="bar js">
              <div className="fill" style={{ width: "70%" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
