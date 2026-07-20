import { Link, useParams } from "react-router-dom";
import ProductIcon from "../components/ProductIcon";
import { products } from "../data/products";

function DetalleProducto() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="empty-state section">
        <div className="container empty-state__box">
          <span className="empty-state__code">404</span>
          <h1>Producto no encontrado</h1>
          <p>La categoría solicitada no existe o fue modificada.</p>
          <Link className="button button--primary" to="/productos">
            Volver al catálogo
          </Link>
        </div>
      </section>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hola XAVICAR, necesito información sobre ${product.nombre}.`
  );

  return (
    <section className="product-detail section">
      <div className="container product-detail__grid">
        <div className="product-detail__visual">
          <ProductIcon type={product.icono} size={150} />
          <span className="stock-pill">{product.disponibilidad}</span>
        </div>

        <div className="product-detail__content">
          <Link className="back-link" to="/productos">
            ← Volver al catálogo
          </Link>
          <span className="eyebrow">{product.categoria}</span>
          <h1>{product.nombre}</h1>
          <p className="product-detail__lead">{product.descripcion}</p>

          <div className="detail-list">
            <h2>Información principal</h2>
            <ul>
              {product.detalles.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>

          <div className="detail-note">
            <strong>Importante</strong>
            <p>
              Confirma la compatibilidad indicando la marca, modelo, año y versión
              de tu vehículo antes de comprar.
            </p>
          </div>

          <div className="detail-actions">
            <a
              className="button button--primary"
              href={`https://wa.me/593991865076?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar disponibilidad
            </a>
            <Link className="button button--dark" to="/contacto">
              Enviar una consulta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetalleProducto;
