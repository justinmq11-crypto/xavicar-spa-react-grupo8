import SectionHeading from "../components/SectionHeading";

function Ubicacion() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Visítanos</span>
          <h1>Estamos en Quero, Ecuador.</h1>
          <p>
            Acércate al local para recibir atención directa, confirmar disponibilidad
            y revisar la compatibilidad de tu repuesto.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container location-layout">
          <div>
            <SectionHeading
              eyebrow="Punto de atención"
              title="Repuestos Automotrices XAVICAR"
              text="Pedro Fermín Cevallos y Bernardo Darquea, Quero, Ecuador."
              align="left"
            />

            <div className="location-cards">
              <article>
                <span>📍</span>
                <div>
                  <h2>Dirección</h2>
                  <p>Pedro Fermín Cevallos y Bernardo Darquea</p>
                  <small>Quero, Ecuador · CP 180602</small>
                </div>
              </article>
              <article>
                <span>📞</span>
                <div>
                  <h2>Contacto</h2>
                  <a href="tel:+593991865076">099 186 5076</a>
                  <a href="mailto:repuestosautomotricesxavicar@gmail.com">
                    repuestosautomotricesxavicar@gmail.com
                  </a>
                </div>
              </article>
              <article>
                <span>🕒</span>
                <div>
                  <h2>Horario</h2>
                  <p>Lunes a viernes: 08:00–18:00</p>
                  <p>Sábado: 09:00–14:00</p>
                  <p>Domingo: 08:00–13:00</p>
                </div>
              </article>
            </div>

            <a
              className="button button--primary"
              href="https://www.google.com/maps/search/?api=1&query=-1.3811164,-78.6079828"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir en Google Maps
            </a>
          </div>

          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d436!2d-78.6079828!3d-1.3811164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d39d3dd06c8e73%3A0x70c5b21bd3a42a7b!2sRepuestos+Automotrices+Xavicar!5e0!3m2!1ses-419!2sec!4v1"
              width="100%"
              height="520"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de XAVICAR en Quero, Ecuador"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Ubicacion;
