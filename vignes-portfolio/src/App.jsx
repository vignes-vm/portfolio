import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import LiveApps from './components/LiveApps/LiveApps';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-slate-950 text-white font-sans antialiased">
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
      </div>
    </ThemeProvider>
  );
}

export default App;
