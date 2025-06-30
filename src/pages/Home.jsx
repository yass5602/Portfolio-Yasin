import { Link } from 'react-router-dom';
import profileImage from '../images/Fichier_2.png';

export default function Home() {
  const homeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    gap: '4rem',
    maxWidth: '1200px',
    margin: '4rem auto'
  };

  const textContainerStyle = {
    flex: '1.2',
    maxWidth: '600px',
  };

  const imageContainerStyle = {
    flex: '0.8',
    maxWidth: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '50%',
    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
    aspectRatio: '1 / 1',
    objectFit: 'cover'
  };
  
  const h1Style = {
    fontSize: '2.8rem',
    marginBottom: '1.5rem',
    color: '#333',
    lineHeight: '1.2'
  };

  const pStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#555',
    marginBottom: '1rem'
  };

  return (
    <section style={homeStyle}>
      <div style={textContainerStyle}>
        <h1 style={h1Style}>👋 Bonjour, je suis Yasin. Développeur Web Full-Stack</h1>
        <p style={pStyle}>
          Passionné par la création d'expériences numériques performantes et intuitives, je mets mes compétences au service de projets ambitieux. Ancien monteur vidéo, j'allie la rigueur technique du code à une sensibilité artistique pour concevoir des applications web complètes, de l'API RESTful au front-end interactif.
        </p>
        <p style={pStyle}>
          Explorez mon portfolio pour découvrir mes réalisations et n'hésitez pas à me contacter pour discuter d'une future collaboration.
        </p>
      </div>
      <div style={imageContainerStyle}>
        <Link to="/about">
          <img src={profileImage} alt="Portrait de Yasin" style={imageStyle} />
        </Link>
      </div>
    </section>
  );
}