import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import brandImage from "../assets/images/banner.png";

const navItems = [
  { to: "/", label: "Inicio", end: true },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/ubicacion", label: "Ubicación" },
  { to: "/contacto", label: "Contacto" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="container top-strip__content">
          <span>Repuestos automotrices en Quero, Ecuador</span>
          <a href="tel:+593991865076">099 186 5076</a>
        </div>
      </div>

      <div className="container nav-shell">
        <Link className="brand" to="/" aria-label="Ir al inicio de XAVICAR">
          <img src={brandImage} alt="Logotipo de XAVICAR" />
          <span>
            <strong>XAVICAR</strong>
            <small>Calidad · Confianza · Garantía</small>
          </span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-link--active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="nav-cta"
            href="https://wa.me/593991865076?text=Hola%20XAVICAR,%20necesito%20información%20sobre%20un%20repuesto."
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
