import React from "react";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h1>Contact</h1>
        <p>
          Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.
        </p>
        <div className="underline"></div>
      </div>

      <div className="contact-box">
        <div className="contact-form">
          <h2>Formulaire de contact</h2>
          <div className="form-line"></div>
          <form>
            <input type="text" placeholder="Votre nom" />
            <input type="email" placeholder="Votre adresse email" />
            <input type="tel" placeholder="Votre numéro de téléphone" />
            <input type="text" placeholder="Sujet" />
            <textarea placeholder="Votre message" rows="6"></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Mes coordonnées</h2>
          <div className="form-line"></div>
          <div className="info-text">
            <p><strong>John Doe</strong></p>
            <p><i className="fas fa-map-marker-alt"></i> 40 rue Laure Diebold</p>
            <p>69009 Lyon, France</p>
            <p><i className="fas fa-phone"></i> 10 20 30 40 50</p>
            <p><i className="fas fa-envelope"></i> john.doe@gmail.com</p>
          </div>
          <iframe
            title="map"
            src="https://www.google.com/maps?q=40+Rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
            width="100%"
            height="250"
            style={{ border: 0, marginTop: "1rem", borderRadius: "6px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
