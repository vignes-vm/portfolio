function BlogCard({ title, date, summary }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
      <p className="text-sm text-gray-500 mb-2">{date}</p>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {summary}
      </p>
    </div>
  )
}

export default BlogCard
