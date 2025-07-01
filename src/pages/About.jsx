import '../styles/About.css';

export default function About() {
    return (
      <section className="about-section">
        <h2 className="about-title">Mon parcours</h2>
        
        <div className="about-container">
          <h3 className="about-container-title">🎓 Formation "Développeur Web" – OpenClassrooms</h3>
          <p className="about-paragraph">
            Diplômé de la formation "Développeur Web" chez OpenClassrooms, j'ai acquis de solides compétences techniques et méthodologiques, notamment en React, Node.js, gestion de bases de données, API REST, et mise en production. Cette formation m'a permis de mener plusieurs projets de A à Z : de la définition des besoins à la conception fonctionnelle, en passant par le développement full‑stack, les tests et la documentation. J'ai également été formé aux bonnes pratiques du développement agile, à la gestion de version avec Git/GitHub, ainsi qu'à la collaboration dans un environnement professionnel.
          </p>
        </div>

        <div className="about-container">
          <h3 className="about-container-title">🎬 Monteur vidéo & Motion Designer – VK Studio</h3>
          <p className="about-paragraph">
            Au sein de VK Studio, un studio dynamique reconnu pour ses formations et prestations audiovisuelles, j'ai exercé le rôle de monteur vidéo et motion designer. Les retours d'anciens apprenants soulignent la qualité des apprentissages, la clarté des cours et l'esprit communautaire du studio. J'y ai appris non seulement les techniques avancées de montage et d'animation graphique (After Effects, Premiere, sound design), mais aussi des compétences entrepreneuriales telles que la négociation, le démarchage de clients et la gestion de projets. J'ai ainsi produit des contenus engageants pour différents formats (publicités, motion design, vidéos événementielles), et collaboré étroitement avec des intervenants professionnels pour livrer des résultats de qualité dans un cadre exigeant et bienveillant.
          </p>
        </div>
      </section>
    );
}