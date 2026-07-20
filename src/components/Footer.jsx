import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section>
          <span className="footer-mark">X</span>
          <h2>XAVICAR</h2>
          <p>
            Repuestos automotrices con atención cercana, productos confiables y
            asesoría para elegir la pieza adecuada.
          </p>
        </section>

        <section>
          <h3>Navegación</h3>
          <div className="footer-links">
            <Link to="/productos">Productos</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/ubicacion">Ubicación</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </section>

        <section>
          <h3>Contacto</h3>
          <address>
            Pedro Fermín Cevallos y Bernardo Darquea
            <br />
            Quero, Ecuador
          </address>
          <a href="tel:+593991865076">099 186 5076</a>
          <a href="mailto:repuestosautomotricesxavicar@gmail.com">
            repuestosautomotricesxavicar@gmail.com
          </a>
        </section>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Repuestos Automotrices XAVICAR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
