function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Vikki. All rights reserved.
        </p>

        <p className="text-sm mt-4 md:mt-0">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
