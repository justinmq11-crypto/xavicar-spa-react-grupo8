import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";

function Contacto() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Contacto</span>
          <h1>Escríbenos y cuéntanos qué repuesto necesitas.</h1>
          <p>
            Incluye la marca, modelo, año del vehículo y cualquier referencia que
            tengas disponible.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container contact-layout">
          <div className="contact-copy">
            <SectionHeading
              eyebrow="Atención directa"
              title="Estamos listos para orientarte"
              text="Puedes contactarnos por teléfono, correo, WhatsApp o mediante el formulario."
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
            <h2>Formulario de consulta</h2>
            <p>Completa los datos obligatorios para validar tu mensaje.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;
