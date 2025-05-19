const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_column">
          <h3>John Doe</h3>
          <address>
            40 rue Laure Diebold<br />
            69009 Lyon, France<br />
            10 20 30 40 50<br />
            <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
          </address>
          <div className="social_icons">
            <a href="https://github.com" aria-label="GitHub">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="footer_column">
          <h3>Liens utiles</h3>
          <ul>
            <li><a href="/home">Accueil</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Me contacter</a></li>
            <li><a href="/legal">Mentions légales</a></li>
          </ul>
        </div>

        <div className="footer_column">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li><a href="/projects/fresh-food">Fresh Food</a></li>
            <li><a href="/projects/akira-restaurant">Restaurant Akira</a></li>
            <li><a href="/projects/wellness-space">Espace bien-être</a></li>
            <li><a href="/projects/seo">SEO</a></li>
            <li><a href="/projects/api-creation">Création d'une API</a></li>
            <li><a href="/projects/site-mockup">Maquette d'un site</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
