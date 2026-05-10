import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import LiveApps from './components/LiveApps/LiveApps';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

/*
 * SVG noise texture as an inline data-URI.
 * feTurbulence generates film-grain noise; feColorMatrix punches up contrast.
 * Applied as a fixed overlay at 3% opacity — adds subtle texture without
 * interfering with readability or animations.
 */
const NOISE_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`;

function App() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Noise texture overlay — fixed, pointer-events none, 3% opacity */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          backgroundImage: NOISE_SVG,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          opacity: 0.03,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Page sections */}
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
  );
}

export default App;
