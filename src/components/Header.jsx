import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from "../images/Fichier_2.png"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Empêche le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="navbar-logo-container">
        <img src={logoImage} alt="Logo" className="navbar-logo"/>
      </div>
      <button
        className={`burger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* Overlay pour fond grisé et fermeture au clic */}
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
      <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projets</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>À propos</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}


