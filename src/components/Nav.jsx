const Hero = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-buttons">
          <button
            className={`nav-button ${activeSection === "home" ? "active" : ""}`}
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
  );
};
export default Hero;
