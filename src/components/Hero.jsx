function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-extrabold mb-6">
          Hi, I’m Vikki
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          AI Engineer | Full-Stack Developer | Research-Oriented Problem Solver
        </p>

        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700">
            View Projects
          </button>

          <button className="px-6 py-3 border border-gray-400 rounded-lg font-semibold hover:bg-gray-800">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
