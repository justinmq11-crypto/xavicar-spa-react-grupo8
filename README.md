# XAVICAR SPA con React

Aplicación web del negocio **Repuestos Automotrices XAVICAR**, transformada desde un sitio tradicional HTML/CSS/PHP a una **Single Page Application (SPA)** desarrollada con React, Vite y React Router.

## Información académica

- **Universidad:** Universidad de las Fuerzas Armadas ESPE
- **Asignatura:** Programación Web
- **Actividad:** Laboratorio 2B – Enrutamiento y navegación en una SPA con React
- **Grupo:** 8
- **Integrantes:**
  - ______________________________
  - ______________________________
  - ______________________________

## Objetivo

Reorganizar la página web original de XAVICAR como una aplicación React basada en componentes reutilizables y páginas, con navegación entre rutas sin recargar completamente el navegador.

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- JavaScript con JSX
- CSS tradicional

## ¿Qué es una SPA?

Una SPA o *Single Page Application* carga una página principal y actualiza el contenido de la interfaz mediante JavaScript. En este proyecto, React Router cambia los componentes mostrados según la URL sin abrir archivos HTML diferentes.

## React Router utilizado en el proyecto

- `BrowserRouter`: habilita el enrutamiento usando el historial del navegador.
- `Routes`: contiene el conjunto de rutas disponibles.
- `Route`: relaciona una URL con el componente que se debe mostrar.
- `Link`: permite navegar internamente sin recargar la página.
- `NavLink`: funciona como `Link` y permite resaltar la ruta activa.
- `useParams`: obtiene valores dinámicos de la URL.
- `useLocation`: detecta cambios de ruta para llevar la vista al inicio.

## Rutas

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/nosotros` | Información del negocio |
| `/productos` | Catálogo de categorías |
| `/producto/:id` | Detalle dinámico de producto |
| `/servicios` | Servicios y promoción |
| `/ubicacion` | Dirección, horarios y mapa |
| `/contacto` | Formulario controlado |
| `*` | Página no encontrada |

## Ruta dinámica y useParams

La ruta `/producto/:id` utiliza un parámetro dinámico. El componente `DetalleProducto.jsx` obtiene el identificador con:

```jsx
const { id } = useParams();
```

Luego busca el producto correspondiente dentro de `src/data/products.js`.

## Componentes principales

- `Header.jsx`: logotipo, menú responsive y navegación con `NavLink`.
- `Footer.jsx`: información y enlaces internos.
- `Layout.jsx`: estructura compartida mediante `Outlet`.
- `ProductCard.jsx`: tarjeta reutilizable que recibe datos mediante props.
- `ProductIcon.jsx`: ilustraciones SVG de las categorías.
- `ContactForm.jsx`: formulario controlado y validado con `useState`.
- `ScrollToTop.jsx`: desplaza la vista al inicio al cambiar de ruta.

## Estructura del proyecto

```text
XAVICAR_SPA_React/
├── backend-original/
│   ├── conn.php
│   └── registrar.php
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── video/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

Los archivos PHP originales se conservan solamente como evidencia del proyecto anterior. La SPA funciona sin XAMPP y el formulario final no afirma guardar información en MySQL.

## Instalación

Abre una terminal dentro de la carpeta del proyecto y ejecuta:

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

Abre la dirección local indicada por Vite, normalmente `http://localhost:5173/`.

## Compilación

```bash
npm run build
```

El resultado optimizado se genera dentro de la carpeta `dist`.

## Funcionalidades verificables

- Navegación SPA sin archivos HTML separados.
- Menú responsive y ruta activa.
- Catálogo generado con `.map()`.
- Props en `ProductCard`.
- Ruta dinámica de producto.
- Lectura del parámetro mediante `useParams`.
- Video original.
- Mapa de Google Maps.
- Enlaces externos seguros.
- Formulario controlado con validaciones.
- Página 404.
