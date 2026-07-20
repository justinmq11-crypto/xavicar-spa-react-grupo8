const icons = {
  battery: (
    <>
      <rect x="13" y="20" width="38" height="26" rx="5" />
      <path d="M21 20v-5h8v5M37 20v-5h8v5" />
      <path d="M21 33h10M26 28v10M38 33h8" />
    </>
  ),
  brake: (
    <>
      <circle cx="32" cy="32" r="19" />
      <circle cx="32" cy="32" r="6" />
      <path d="M32 13v8M32 43v8M13 32h8M43 32h8M19 19l6 6M39 39l6 6M45 19l-6 6M25 39l-6 6" />
    </>
  ),
  engine: (
    <>
      <path d="M14 25h8l5-7h14l5 7h5v23H14z" />
      <path d="M22 25h24M24 35h16M30 42h10" />
      <path d="M13 31H8v10h6M51 30h5v12h-5" />
    </>
  ),
  gear: (
    <>
      <circle cx="32" cy="32" r="10" />
      <path d="M32 8v8M32 48v8M8 32h8M48 32h8M15 15l6 6M43 43l6 6M49 15l-6 6M21 43l-6 6" />
      <circle cx="32" cy="32" r="22" />
    </>
  ),
  filter: (
    <>
      <path d="M15 14h34L37 31v17l-10 5V31z" />
      <path d="M20 20h24M23 25h18" />
    </>
  ),
  tools: (
    <>
      <path d="M15 48l16-16" />
      <path d="M30 18a12 12 0 0 0 15 15L31 47a8 8 0 0 1-11-11l14-14a12 12 0 0 0-4-4z" />
      <circle cx="22" cy="42" r="2" />
    </>
  ),
};

function ProductIcon({ type, size = 64 }) {
  return (
    <svg
      className="product-icon"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type] ?? icons.tools}
    </svg>
  );
}

export default ProductIcon;
