import { Link } from "react-router-dom";
import ProductIcon from "./ProductIcon";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__visual">
        <ProductIcon type={product.icono} size={72} />
        <span className="stock-pill">{product.disponibilidad}</span>
      </div>
      <div className="product-card__body">
        <span className="product-card__category">{product.categoria}</span>
        <h3>{product.nombre}</h3>
        <p>{product.descripcion}</p>
        <Link className="text-link" to={`/producto/${product.id}`}>
          Ver detalles <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
