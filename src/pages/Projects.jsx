import { projects } from '../data/projectList';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <section>
      <h2>Mes projets</h2>
      <div className="grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}