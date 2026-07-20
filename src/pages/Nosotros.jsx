import { Link } from "react-router-dom";
import brandImage from "../assets/images/banner.png";
import heroImage from "../assets/images/logo.png";
import SectionHeading from "../components/SectionHeading";

const values = [
  {
    title: "Experiencia",
    text: "Más de 21 años atendiendo necesidades de mantenimiento y reparación automotriz.",
  },
  {
    title: "Confianza",
    text: "Información clara y atención directa para reducir dudas antes de comprar.",
  },
  {
    title: "Calidad",
    text: "Selección de productos y marcas orientada a un desempeño confiable.",
  },
  {
    title: "Garantía",
    text: "Respaldo de acuerdo con las condiciones del fabricante y del producto adquirido.",
  },
];

function Nosotros() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <img src={heroImage} alt="Negocio y productos de XAVICAR" />
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="eyebrow">Nuestra historia</span>
          <h1>Una trayectoria construida con trabajo y confianza.</h1>
          <p>
            XAVICAR es un negocio familiar de Quero dedicado a la venta de
            repuestos automotrices y a la atención cercana de sus clientes.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container story-grid">
          <div className="story-image-card">
            <img src={brandImage} alt="Logotipo de XAVICAR" />
          </div>
          <div>
            <SectionHeading
              eyebrow="Desde hace más de dos décadas"
              title="Conocemos la importancia de una compra bien orientada"
              align="left"
            />
            <p>
              Nuestro trabajo comenzó con el objetivo de ofrecer repuestos
              automotrices confiables y una atención que permita al cliente tomar
              mejores decisiones. Con el tiempo ampliamos el catálogo para cubrir
              necesidades de motor, frenos, suspensión, transmisión, filtros,
              fluidos y accesorios.
            </p>
            <p>
              La experiencia nos ha enseñado que no basta con tener una pieza en
              stock: también es importante revisar la referencia, el modelo y las
              características del vehículo. Por eso priorizamos la asesoría antes
              de la compra.
            </p>
            <Link className="text-link" to="/contacto">
              Consultar un repuesto <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Lo que nos representa"
            title="Calidad, confianza y garantía"
            text="Tres principios presentes en la identidad de XAVICAR y en cada atención."
          />
          <div className="value-grid">
            {values.map((value, index) => (
              <article className="value-card" key={value.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{value.title}</h2>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container commitment-panel">
          <div>
            <span className="eyebrow">Nuestro compromiso</span>
            <h2>Ayudarte a mantener tu vehículo seguro y funcional.</h2>
          </div>
          <ul className="check-list">
            <li>Atención personalizada</li>
            <li>Revisión de compatibilidad</li>
            <li>Opciones para varias marcas</li>
            <li>Información sobre disponibilidad</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Nosotros;
