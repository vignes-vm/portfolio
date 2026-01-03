import publications from "../data/publications"
import PublicationCard from "./PublicationCard"

function Publications() {
  return (
    <section id="publications" className="py-24 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Publications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <PublicationCard key={index} {...pub} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
