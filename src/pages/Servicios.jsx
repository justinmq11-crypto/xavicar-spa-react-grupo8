import { Link } from "react-router-dom";
import promoVideo from "../assets/video/promocional.mp4";
import heroImage from "../assets/images/logo.png";
import SectionHeading from "../components/SectionHeading";

const services = [
  {
    icon: "01",
    title: "Asesoría para elegir repuestos",
    text: "Revisamos la información del vehículo y la referencia para orientarte antes de la compra.",
  },
  {
    icon: "02",
    title: "Cambio promocional de pastillas",
    text: "Durante la promoción vigente, la compra de pastillas de freno incluye el cambio sin costo de mano de obra.",
  },
  {
    icon: "03",
    title: "Pedidos y disponibilidad",
    text: "Consultamos opciones para productos que no estén disponibles de forma inmediata.",
  },
  {
    icon: "04",
    title: "Envíos según coordinación",
    text: "Gestionamos entregas en un plazo estimado de 24 a 48 horas, según ubicación y disponibilidad.",
  },
];

function Servicios() {
  return (
    <>
      <section className="page-banner page-banner--services">
        <div className="container">
          <span className="eyebrow">Servicios XAVICAR</span>
          <h1>Asesoría y soluciones para una compra más segura.</h1>
          <p>
            Complementamos nuestro catálogo con atención personalizada, coordinación
            de pedidos y promociones para nuestros clientes.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="Cómo podemos ayudarte"
            title="Servicios pensados alrededor de tu necesidad"
            text="Nuestro objetivo es que recibas información clara antes de elegir un repuesto."
          />
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.icon}>
                <span>{service.icon}</span>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container promo-layout">
          <div>
            <span className="eyebrow">Oferta destacada</span>
            <h2>Compra pastillas de freno y recibe el cambio gratis.</h2>
            <p>
              La promoción aplica durante el periodo anunciado por el negocio y puede
              estar sujeta a disponibilidad y compatibilidad del producto.
            </p>
            <ul className="check-list">
              <li>Confirmación previa de la referencia</li>
              <li>Instalación coordinada con el negocio</li>
              <li>Promoción válida mientras esté vigente</li>
            </ul>
            <a
              className="button button--primary"
              href="https://wa.me/593991865076?text=Hola%20XAVICAR,%20quiero%20consultar%20la%20promoción%20de%20pastillas%20de%20freno."
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar promoción
            </a>
          </div>
          <div className="video-frame video-frame--compact">
            <video controls preload="metadata" poster={heroImage}>
              <source src={promoVideo} type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <span className="eyebrow">Atención personalizada</span>
            <h2>Cuéntanos qué necesita tu vehículo.</h2>
          </div>
          <Link className="button button--light" to="/contacto">
            Ir al formulario
          </Link>
        </div>
      </section>
    </>
  );
}

export default Servicios;
