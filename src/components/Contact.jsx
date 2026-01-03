function Contact() {
  return (
    <section id="contact" className="py-24 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Get in Touch
        </h2>

        <p className="text-gray-600 mb-10">
          Interested in collaboration, research, or opportunities?
          Feel free to reach out.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:vignes.madeshwaran@gmail.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Email Me
          </a>

          <a
            href="https://github.com/vignes-vm"
            target="_blank"
            className="px-6 py-3 border border-gray-400 rounded-lg font-semibold hover:bg-gray-100"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/vignes-vm"
            target="_blank"
            className="px-6 py-3 border border-gray-400 rounded-lg font-semibold hover:bg-gray-100"
          >
            LinkedIn
          </a>
          <a 
            href="https://instagram.com/vign.ess_"
            target="_blank"
            className="px-6 py-3 border border-gray-400 rounded-lg font-semibold hover:bg-gray-100"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
