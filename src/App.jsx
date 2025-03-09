import { useState } from "react";
import { useTheme } from "./components/theme/ThemeProvider";
import ThemeToggle from "./components/theme/ThemeToggle";
import "./App.css";
// Components
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Content from "./components/content/Content";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const { darkMode } = useTheme();

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      {/* Botón de alternar tema */}
      <ThemeToggle />
      {/* Hero Section */}
      <Hero />
      {/* Navigation Bar */}
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          <Content
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
      </main>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Título del Sitio</h3>
              <p>Breve descripción o información de contacto.</p>
            </div>
            <div className="footer-section">
              <h3>Enlaces</h3>
              <ul>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection("home");
                    }}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection("about");
                    }}
                  >
                    Acerca de
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>
              © {new Date().getFullYear()} Nombre de Tu Sitio. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
