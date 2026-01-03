import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Publications from "./components/Publications"
import Achievements from "./components/Achievements"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Publications />
        <Achievements />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App

