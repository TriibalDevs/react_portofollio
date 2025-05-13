import fresh from "../assets/img/fresh-food.jpg";
import sushi from "../assets/img/restaurant-japonais.jpg";
import spa from "../assets/img/espace-bien-etre.jpg";
import seo from "../assets/img/seo.jpg";
import api from "../assets/img/coder.jpg";
import figma from "../assets/img/screens.jpg";

function Datas () {
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
    projects
  );
}

export default Datas;