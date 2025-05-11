import React, { useState } from 'react';

const Mentions = () => {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <div className="legal-container">
      <h1>Mentions légales</h1>
      <hr className="underline" />

      <div className="accordion">
        <div className={`section ${open === 'editor' ? 'open' : ''}`}>
          <button className="accordion-title" onClick={() => toggle('editor')}>
            Éditeur du site
            <span className="arrow">{open === 'editor' ? '▴' : '▾'}</span>
          </button>
          {open === 'editor' && (
            <div className="accordion-content">
              <p><strong>John Doe</strong></p>
              <p>🏢 40 rue Laure Diebold</p>
              <p>📍 69009 Lyon, France</p>
              <p>📞 10 20 30 40 50</p>
              <p>✉️ john.doe@gmail.com</p>
            </div>
          )}
        </div>

        <div className={`section ${open === 'host' ? 'open' : ''}`}>
          <button className="accordion-title" onClick={() => toggle('host')}>
            Hébergeur
            <span className="arrow">{open === 'host' ? '▴' : '▾'}</span>
          </button>
          {open === 'host' && (
            <div className="accordion-content">
              <p><strong>alwaysdata</strong></p>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
              <p>🌐 <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">www.alwaysdata.com</a></p>
            </div>
          )}
        </div>

        <div className={`section ${open === 'credits' ? 'open' : ''}`}>
          <button className="accordion-title" onClick={() => toggle('credits')}>
            Crédits
            <span className="arrow">{open === 'credits' ? '▴' : '▾'}</span>
          </button>
          {open === 'credits' && (
            <div className="accordion-content">
              <p><strong>Crédits</strong></p>
              <p>
                Ce site a été réalisé par John Doe, étudiant au <a href="#">Centre Européen de formation</a>.
              </p>
              <p>
                Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com" target="_blank" rel="noreferrer">Pixabay</a>
              </p>
              <p>
                La favicon de ce site a été fournie par <a href="https://www.flaticon.com" target="_blank" rel="noreferrer">John doe Icons erstellt von Freepik - Flaticon</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mentions;
