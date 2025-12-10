import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

export default function ProjectDetail(){
  const { id } = useParams();
  const idx = parseInt(id, 10);
  const project = projects[idx];

  if (!project) return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Project not found</h2>
      <Link to="/projects" className="text-blue-600 mt-4 inline-block">Back to Projects</Link>
    </div>
  );

  return (
    <section className="p-8">
      <Link to="/projects" className="text-blue-600 mb-4 inline-block">← Back to Projects</Link>
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
      <div className="mb-4">
        <strong>Tech:</strong> {project.tech?.join(', ')}
      </div>
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded">Visit Project</a>
      )}
    </section>
  );
}
