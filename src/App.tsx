
import './App.css'
import './App.ts'
import Navbar from "./components/navbar/navbar.tsx";
import ProjectsPage from "./pages/projects/projects-page.tsx";
import CertsPage from "./pages/certs/certs-page.tsx";
import ContactPage from "./pages/contactme/contact-page.tsx";
import SkillsPage from "./pages/skills/skills-page.tsx";
import HeroPage from "./pages/hero/hero-page.tsx";

function App() {

    return (
      <>
          <Navbar />

          <HeroPage />

          <SkillsPage />

          <ProjectsPage />

          <CertsPage />

          <ContactPage />

          <footer id="footer">
              <div className="footer-inner">
                  <div className="footer-logo">Daniel Sansò.</div>
                  <div className="footer-links">
                      <a href="https://github.com/SansoDaniel" target="_blank">GitHub</a>
                      <a href="https://www.linkedin.com/in/daniel-sansò-662684181/" target="_blank">LinkedIn</a>
                      <a href="mailto:daniel.sanso.developer@gmail.com" target="_blank">Email</a>
                  </div>
                  <div className="footer-copy">© 2025 Daniel Sansò</div>
              </div>
          </footer>

      </>
  );
}

export default App
