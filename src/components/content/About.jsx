const About = () => {
  return (
    <section className="section">
      <div className="section-title">
        <h2>Sección Acerca de</h2>
      </div>
      <div className="content-block">
        <p>
          Contenido de la sección Acerca de. Aquí puedes agregar información
          sobre tu sitio, proyecto, empresa, etc.
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
  );
};
export default About;
