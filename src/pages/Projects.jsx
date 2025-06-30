import { projects } from '../data/projectList';
import { videoProjects } from '../data/videoProjects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section className="projects-vertical-sections">
      <div className="projects-section">
        <h2>Projets Développeur web</h2>
        <div className="grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="projects-section">
        <h2>Projet Montage Vidéo</h2>
        <div className="grid">
          {videoProjects.map(project => (
            <div className="card" key={project.id}>
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
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">Voir la vidéo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}