import { useState } from "react";
import { useTheme } from "./theme/ThemeProvider";
import ThemeToggle from "./theme/ThemeToggle";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const { darkMode } = useTheme();

  return (
    <div className="app" data-theme={darkMode ? "dark" : "light"}>
      {/* Botón de alternar tema */}
      <ThemeToggle />

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>El Jardín</h1>
          <p></p>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-buttons">
            <button
              className={`nav-button ${
                activeSection === "home" ? "active" : ""
              }`}
              onClick={() => setActiveSection("home")}
            >
              Inicio
            </button>
            <button
              className={`nav-button ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={() => setActiveSection("about")}
            >
              Acerca de
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="container">
          {activeSection === "home" && (
            <section className="section">
              <div className="section-title">
                <h2>Sección Inicio</h2>
              </div>
              <div className="content-grid">
                <div className="card">
                  <div className="card-image">
                    <div className="image-placeholder">Imagen</div>
                  </div>
                  <div className="card-content">
                    <h3>Título de Tarjeta</h3>
                    <p>
                      Descripción de la tarjeta con información relevante al
                      contenido que se muestra.
                    </p>
                    <button className="btn-primary">Acción</button>
                  </div>
                </div>
                <div className="card">
                  <div className="card-image">
                    <div className="image-placeholder">Imagen</div>
                  </div>
                  <div className="card-content">
                    <h3>Título de Tarjeta</h3>
                    <p>
                      Descripción de la tarjeta con información relevante al
                      contenido que se muestra.
                    </p>
                    <button className="btn-primary">Acción</button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === "about" && (
            <section className="section">
              <div className="section-title">
                <h2>Sección Acerca de</h2>
              </div>
              <div className="content-block">
                <p>
                  Contenido de la sección Acerca de. Aquí puedes agregar
                  información sobre tu sitio, proyecto, empresa, etc.
                </p>
                <div className="feature-blocks">
                  <div className="feature">
                    <div className="feature-icon">
                      <span>Ícono</span>
                    </div>
                    <h3>Característica 1</h3>
                    <p>Descripción de la característica 1.</p>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">
                      <span>Ícono</span>
                    </div>
                    <h3>Característica 2</h3>
                    <p>Descripción de la característica 2.</p>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">
                      <span>Ícono</span>
                    </div>
                    <h3>Característica 3</h3>
                    <p>Descripción de la característica 3.</p>
                  </div>
                </div>
              </div>
            </section>
          )}
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
