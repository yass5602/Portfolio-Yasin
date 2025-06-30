export default function About() {
    const containerStyle = {
        backgroundColor: '#f9f9f9',
        borderLeft: '4px solid #007bff',
        padding: '1.5rem',
        marginBottom: '2rem',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
    };

    const titleStyle = {
        fontSize: '1.4rem',
        marginBottom: '1rem',
        color: '#333'
    };

    const paragraphStyle = {
        lineHeight: '1.7',
        color: '#555',
        textAlign: 'justify'
    };

    return (
      <section style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem', color: '#222' }}>Mon parcours</h2>
        
        <div style={containerStyle}>
          <h3 style={titleStyle}>🎓 Formation "Développeur Web" – OpenClassrooms</h3>
          <p style={paragraphStyle}>
            Diplômé de la formation "Développeur Web" chez OpenClassrooms, j'ai acquis de solides compétences techniques et méthodologiques, notamment en React, Node.js, gestion de bases de données, API REST, et mise en production. Cette formation m'a permis de mener plusieurs projets de A à Z : de la définition des besoins à la conception fonctionnelle, en passant par le développement full‑stack, les tests et la documentation. J'ai également été formé aux bonnes pratiques du développement agile, à la gestion de version avec Git/GitHub, ainsi qu'à la collaboration dans un environnement professionnel.
          </p>
        </div>

        <div style={containerStyle}>
          <h3 style={titleStyle}>🎬 Monteur vidéo & Motion Designer – VK Studio</h3>
          <p style={paragraphStyle}>
            Au sein de VK Studio, un studio dynamique reconnu pour ses formations et prestations audiovisuelles, j'ai exercé le rôle de monteur vidéo et motion designer. Les retours d'anciens apprenants soulignent la qualité des apprentissages, la clarté des cours et l'esprit communautaire du studio. J'y ai appris non seulement les techniques avancées de montage et d'animation graphique (After Effects, Premiere, sound design), mais aussi des compétences entrepreneuriales telles que la négociation, le démarchage de clients et la gestion de projets. J'ai ainsi produit des contenus engageants pour différents formats (publicités, motion design, vidéos événementielles), et collaboré étroitement avec des intervenants professionnels pour livrer des résultats de qualité dans un cadre exigeant et bienveillant.
          </p>
        </div>
      </section>
    );
  }