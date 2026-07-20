export const products = [
  {
    id: "baterias",
    nombre: "Baterías automotrices",
    categoria: "Sistema eléctrico",
    descripcion:
      "Baterías para distintos tipos de vehículos, seleccionadas para brindar arranque confiable y buen rendimiento.",
    detalles: [
      "Opciones para vehículos livianos",
      "Asesoría para elegir el amperaje adecuado",
      "Productos de marcas reconocidas",
      "Garantía según fabricante",
    ],
    icono: "battery",
    disponibilidad: "En stock",
  },
  {
    id: "frenos-suspension",
    nombre: "Frenos y suspensión",
    categoria: "Seguridad y control",
    descripcion:
      "Pastillas, discos, amortiguadores y resortes para mantener una conducción segura y estable.",
    detalles: [
      "Pastillas de freno certificadas",
      "Discos y componentes de frenado",
      "Amortiguadores y resortes",
      "Revisión de compatibilidad por vehículo",
    ],
    icono: "brake",
    disponibilidad: "En stock",
    destacado: true,
  },
  {
    id: "motores-cilindros",
    nombre: "Motores y cilindros",
    categoria: "Motor",
    descripcion:
      "Piezas esenciales para mantenimiento y reparación de motor, cilindros y cabezotes.",
    detalles: [
      "Componentes para mantenimiento preventivo",
      "Piezas para reparación de motor",
      "Opciones para diferentes marcas y modelos",
      "Asesoría antes de la compra",
    ],
    icono: "engine",
    disponibilidad: "Consultar",
  },
  {
    id: "transmisiones",
    nombre: "Transmisiones",
    categoria: "Tren motriz",
    descripcion:
      "Repuestos para sistemas de transmisión automática y manual, con orientación técnica para cada necesidad.",
    detalles: [
      "Componentes para transmisión manual",
      "Componentes para transmisión automática",
      "Revisión de referencias y compatibilidad",
      "Atención para pedidos específicos",
    ],
    icono: "gear",
    disponibilidad: "En stock",
  },
  {
    id: "filtros-fluidos",
    nombre: "Filtros y fluidos",
    categoria: "Mantenimiento",
    descripcion:
      "Filtros de aire, aceite y combustible, además de lubricantes y líquidos para el cuidado periódico del vehículo.",
    detalles: [
      "Filtros de aire",
      "Filtros de aceite",
      "Filtros de combustible",
      "Aceites y líquidos automotrices",
    ],
    icono: "filter",
    disponibilidad: "En stock",
    destacado: true,
  },
  {
    id: "accesorios",
    nombre: "Accesorios y complementos",
    categoria: "Accesorios",
    descripcion:
      "Wipers, cables, correas, mangueras y complementos para mantener el vehículo preparado y funcional.",
    detalles: [
      "Limpiaparabrisas",
      "Cables y conectores",
      "Correas automotrices",
      "Mangueras y complementos",
    ],
    icono: "tools",
    disponibilidad: "En stock",
  },
];

export const featuredProducts = products.filter((product) => product.destacado);
