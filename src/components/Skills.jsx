import skills from "../data/skills"
import SkillCard from "./SkillCard"

function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <SkillCard
              key={index}
              category={skillGroup.category}
              items={skillGroup.items}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
