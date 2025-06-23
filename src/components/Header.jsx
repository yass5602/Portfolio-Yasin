import { Link } from 'react-router-dom';
import logoImage from "../images/Fichier_2.png"

export default function Header() {
  return (
    <header>
      <img src={logoImage} alt="Logo"/>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/projects">Projets</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}


