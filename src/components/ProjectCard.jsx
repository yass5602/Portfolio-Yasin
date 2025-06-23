// components/ProjectCard.jsx
export default function ProjectCard({ project }) {
    return (
      <div className="card">
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          {project.skills.map((skill, idx) => (
            <li key={idx}>{skill}</li>
          ))}
        </ul>
        <a href={project.github} target="_blank" rel="noopener noreferrer">Voir sur GitHub</a>
      </div>
    );
  }
  