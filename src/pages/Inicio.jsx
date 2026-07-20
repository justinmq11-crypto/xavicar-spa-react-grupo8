import { Link } from "react-router-dom";
import heroImage from "../assets/images/logo.png";
import brandImage from "../assets/images/banner.png";
import promoVideo from "../assets/video/promocional.mp4";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import { featuredProducts } from "../data/products";

const benefits = [
  {
    number: "01",
    title: "Productos confiables",
    text: "Selección de repuestos y marcas reconocidas para mantenimiento y reparación.",
  },
  {
    number: "02",
    title: "Asesoría cercana",
    text: "Te orientamos para identificar la pieza compatible con tu vehículo.",
  },
  {
    number: "03",
    title: "Garantía y respaldo",
    text: "Acompañamiento antes y después de la compra, según condiciones del producto.",
  },
];

function Inicio() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-backdrop" aria-hidden="true" />
        <img className="hero-photo" src={heroImage} alt="Interior y productos de XAVICAR" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="hero-kicker">Repuestos automotrices · Quero, Ecuador</span>
            <h1>
              El repuesto correcto para que tu vehículo siga <em>avanzando.</em>
            </h1>
            <p>
              Calidad, confianza y garantía en repuestos para frenos, motor,
              transmisión, mantenimiento y accesorios.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" to="/productos">
                Explorar productos
              </Link>
              <a
                className="button button--ghost"
                href="https://wa.me/593991865076?text=Hola%20XAVICAR,%20quiero%20cotizar%20un%20repuesto."
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar cotización
              </a>
            </div>
          </div>

          <aside className="hero-promo" aria-label="Promoción destacada">
            <span className="hero-promo__badge">Promoción del mes</span>
            <strong>Compra pastillas de freno</strong>
            <p>y recibe el cambio sin costo de mano de obra.</p>
            <Link to="/servicios">Conocer condiciones →</Link>
          </aside>
        </div>
      </section>

      <section className="stats-strip" aria-label="Datos destacados de XAVICAR">
        <div className="container stats-grid">
          <div>
            <strong>21+</strong>
            <span>Años de experiencia</span>
          </div>
          <div>
            <strong>6</strong>
            <span>Categorías principales</span>
          </div>
          <div>
            <strong>24–48 h</strong>
            <span>Envíos según disponibilidad</span>
          </div>
          <div>
            <strong>1 a 1</strong>
            <span>Asesoría personalizada</span>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container split-intro">
          <div className="split-intro__brand">
            <img src={brandImage} alt="Emblema de Repuestos Automotrices XAVICAR" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Bienvenido a XAVICAR"
              title="Un negocio familiar que entiende lo importante de tu vehículo"
              text="Trabajamos para ofrecer opciones confiables, atención clara y una compra más segura."
              align="left"
            />
            <p className="lead-copy">
              Con más de dos décadas de experiencia, contamos con repuestos para
              diferentes marcas y modelos. Revisamos referencias y características
              para ayudarte a encontrar una opción adecuada.
            </p>
            <Link className="text-link" to="/nosotros">
              Conocer nuestra historia <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Nuestra forma de trabajar"
            title="Más que vender repuestos"
            text="Cada detalle está pensado para darte una experiencia clara, rápida y confiable."
          />
          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.number}>
                <span>{benefit.number}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="Catálogo"
            title="Productos destacados"
            text="Opciones esenciales para seguridad y mantenimiento preventivo."
          />
          <div className="product-grid product-grid--featured">
            {featuredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <div className="section-action">
            <Link className="button button--dark" to="/productos">
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      <section className="section media-section">
        <div className="container media-layout">
          <div>
            <SectionHeading
              eyebrow="Conoce el negocio"
              title="Atención real, productos reales"
              text="Mira parte de nuestro trabajo y visita el local para recibir asesoría."
              align="left"
            />
            <ul className="check-list">
              <li>Atención directa en Quero</li>
              <li>Catálogo para varias marcas y modelos</li>
              <li>Productos para mantenimiento y reparación</li>
            </ul>
            <Link className="button button--primary" to="/ubicacion">
              Ver ubicación y horarios
            </Link>
          </div>
          <div className="video-frame">
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
            <span className="eyebrow">¿No sabes qué repuesto necesitas?</span>
            <h2>Cuéntanos la marca, modelo y año de tu vehículo.</h2>
          </div>
          <Link className="button button--light" to="/contacto">
            Enviar una consulta
          </Link>
        </div>
      </section>
    </>
  );
}

export default Inicio;
