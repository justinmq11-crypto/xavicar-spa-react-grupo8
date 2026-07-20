import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import { products } from "../data/products";

function Productos() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">Catálogo XAVICAR</span>
          <h1>Repuestos para mantenimiento, seguridad y reparación.</h1>
          <p>
            Explora las categorías disponibles y abre cada ficha para conocer sus
            características principales.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionHeading
            eyebrow="Categorías"
            title="Encuentra lo que tu vehículo necesita"
            text="La disponibilidad puede variar. Confirma la referencia antes de realizar tu compra."
          />
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="notice-section">
        <div className="container notice-box">
          <div>
            <strong>¿Buscas una referencia específica?</strong>
            <p>Envíanos la marca, modelo, año y fotografía del repuesto.</p>
          </div>
          <a
            className="button button--primary"
            href="https://wa.me/593991865076?text=Hola%20XAVICAR,%20busco%20una%20referencia%20específica."
            target="_blank"
            rel="noopener noreferrer"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

export default Productos;
