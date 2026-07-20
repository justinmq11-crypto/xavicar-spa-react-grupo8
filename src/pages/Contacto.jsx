import SectionHeading from "../components/SectionHeading";

function Contacto() {
  const preventDemoSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Contacto</span>
          <h1>Escríbenos y cuéntanos qué repuesto necesitas.</h1>
          <p>
            En este avance ya se integró la página de contacto. La validación con
            useState se terminará en la entrega final.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container contact-layout">
          <div className="contact-copy">
            <SectionHeading
              eyebrow="Atención directa"
              title="Estamos listos para orientarte"
              text="Puedes contactarnos por teléfono, correo o WhatsApp."
              align="left"
            />

            <div className="contact-methods">
              <a href="tel:+593991865076">
                <span>01</span>
                <div>
                  <strong>Teléfono</strong>
                  <small>099 186 5076</small>
                </div>
              </a>
              <a href="mailto:repuestosautomotricesxavicar@gmail.com">
                <span>02</span>
                <div>
                  <strong>Correo</strong>
                  <small>repuestosautomotricesxavicar@gmail.com</small>
                </div>
              </a>
              <a
                href="https://wa.me/593991865076?text=Hola%20XAVICAR,%20necesito%20información%20sobre%20un%20repuesto."
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>03</span>
                <div>
                  <strong>WhatsApp</strong>
                  <small>Respuesta según horario de atención</small>
                </div>
              </a>
            </div>
          </div>

          <div className="form-panel">
            <h2>Formulario en desarrollo</h2>
            <p>La estructura visual está lista; falta convertirlo en formulario controlado.</p>
            <form className="contact-form" onSubmit={preventDemoSubmit}>
              <div className="field-grid">
                <div className="form-field">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Correo electrónico</label>
                  <input id="email" name="email" type="email" placeholder="nombre@correo.com" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="mensaje">Consulta</label>
                <textarea id="mensaje" name="mensaje" rows="6" placeholder="Describe el repuesto que necesitas." />
              </div>
              <button className="button button--dark" type="submit">
                Validación pendiente
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;
