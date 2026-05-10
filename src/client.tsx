import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

import { ThemeProvider } from './components/portfolio/ThemeProvider'
import { LoadingScreen } from './components/portfolio/LoadingScreen'
import { Navbar } from './components/portfolio/Navbar'
import { Hero } from './components/portfolio/Hero'
import { About } from './components/portfolio/About'
import { Expertise } from './components/portfolio/Expertise'
import { Skills } from './components/portfolio/Skills'
import { Projects } from './components/portfolio/Projects'
import { LiveApps } from './components/portfolio/LiveApps'
import { Contact } from './components/portfolio/Contact'
import { Footer } from './components/portfolio/Footer'

function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Skills />
        <Projects />
        <LiveApps />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}

const root = document.getElementById('root')
if (root) {
  createRoot(root).render(<App />)
}

export {}
