// components/ProjectCard.jsx
export default function ProjectCard({ project }) {
    return (
      <div className="card">
        <img src={project.image} alt={project.title} className="card-image" style={{ height: '90px', width: '90px', margin: '1.2rem auto 0 auto', display: 'block' }} />
        <div className="card-content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="skills-list">
            {project.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">Voir sur GitHub</a>
        </div>
      </div>
    );
  }
  