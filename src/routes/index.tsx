import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { LiveApps } from "@/components/portfolio/LiveApps";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vignes V M — Full Stack Developer & AI Engineer" },
      { name: "description", content: "Personal portfolio of Vignes V M — Full Stack Developer and AI Engineer. B.Tech CSE (AI) student building intelligent, scalable software." },
      { property: "og:title", content: "Vignes V M — Full Stack Developer & AI Engineer" },
      { property: "og:description", content: "Portfolio showcasing AI, full-stack, and research projects by Vignes V M." },
    ],
  }),
});

function Index() {
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
  );
}
