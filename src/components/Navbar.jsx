function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          Vikki
        </h1>

        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600 cursor-pointer">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600 cursor-pointer">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600 cursor-pointer">Projects</a></li>
          <li><a href="#publications" className="hover:text-blue-600 cursor-pointer">Publications</a></li>
          <li><a href="#contact" className="hover:text-blue-600 cursor-pointer">Contact</a></li>
          <li><a href="#achievements" className="hover:text-blue-600 cursor-pointer">Achievements</a></li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
