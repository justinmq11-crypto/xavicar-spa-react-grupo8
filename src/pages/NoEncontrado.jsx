import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <section className="empty-state section">
      <div className="container empty-state__box">
        <span className="empty-state__code">404</span>
        <h1>Esta ruta no existe</h1>
        <p>La página que buscas no está disponible dentro de la aplicación.</p>
        <Link className="button button--primary" to="/">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default NoEncontrado;
