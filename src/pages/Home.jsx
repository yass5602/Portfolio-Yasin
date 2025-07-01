import { Link } from 'react-router-dom';
import profileImage from '../images/Fichier_2.png';
import '../styles/Home.css';

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-text-container">
        <h1 className="home-title">👋 Bonjour, je suis Yasin. Développeur Web Full-Stack</h1>
        <p className="home-description">
          Passionné par la création d'expériences numériques performantes et intuitives, je mets mes compétences au service de projets ambitieux. Ancien monteur vidéo, j'allie la rigueur technique du code à une sensibilité artistique pour concevoir des applications web complètes, de l'API RESTful au front-end interactif.
        </p>
        <p className="home-description">
          Explorez mon portfolio pour découvrir mes réalisations et n'hésitez pas à me contacter pour discuter d'une future collaboration.
        </p>
      </div>
      <div className="home-image-container">
        <Link to="/about">
          <img src={profileImage} alt="Portrait de Yasin" className="home-profile-image" />
        </Link>
      </div>
    </section>
  );
}