import achievements from "../data/achievements"

function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Achievements & Activities
        </h2>

        <div className="space-y-8 border-l-2 border-gray-200 pl-6">
          {achievements.map((item, index) => (
            <div key={index}>
              <span className="text-sm text-blue-600 font-semibold">
                {item.year}
              </span>

              <h3 className="text-xl font-semibold text-gray-800 mt-1">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
