function PublicationCard({ title, venue, year, description, link }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mb-3">
        {venue} • {year}
      </p>

      <p className="text-gray-600 mb-4">
        {description}
      </p>

      <a
        href={link}
        target="_blank"
        className="text-blue-600 font-medium hover:underline"
      >
        Read Publication →
      </a>
    </div>
  )
}

export default PublicationCard
