export default function ProjectCard({ project }) {
  return (
    <article className="border rounded-lg p-4 bg-white dark:bg-gray-800">
      <h4 className="font-semibold text-white">{project.title}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300 my-2">{project.description}</p>
      <div className="flex justify-between items-center">
        <div className="text-xs text-white">{project.tech?.join(', ')}</div>
        <a href={project.link} className="text-blue-600">Visit Website →</a>
      </div>
    </article>
  )
}
