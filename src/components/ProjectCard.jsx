function ProjectCard({ title, description, tech, github }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={github}
        target="_blank"
        className="text-blue-600 font-medium hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  )
}

export default ProjectCard
