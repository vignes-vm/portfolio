import blogs from "../data/blogs"
import BlogCard from "./BlogCard"

function Blog() {
  return (
    <section id="blog" className="py-24 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
