function SkillCard({ category, items }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        {category}
      </h3>

      <ul className="space-y-2 text-gray-600">
        {items.map((skill, index) => (
          <li key={index}>• {skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default SkillCard
