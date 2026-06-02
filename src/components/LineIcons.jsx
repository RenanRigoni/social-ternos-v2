// Ícones de linha que se "desenham" no scroll (stroke-dashoffset via .draw + .in).
// pathLength="1" normaliza o traço de cada forma para a animação ser uniforme.

const SHAPES = {
  jacket: (
    <>
      <path pathLength="1" d="M8 3l4 3 4-3 3 3-2 2v11H7V8L5 6z" />
      <path pathLength="1" d="M12 6v7" />
    </>
  ),
  hanger: (
    <>
      <path pathLength="1" d="M12 7a2 2 0 1 1 2 2c-1.2 0-2 .8-2 2" />
      <path pathLength="1" d="M12 11 4 17h16z" />
    </>
  ),
  adult: (
    <>
      <circle pathLength="1" cx="12" cy="8" r="3.2" />
      <path pathLength="1" d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    </>
  ),
  child: (
    <>
      <circle pathLength="1" cx="12" cy="9" r="2.6" />
      <path pathLength="1" d="M7 20c0-3 2.2-5 5-5s5 2 5 5" />
    </>
  ),
  rings: (
    <>
      <circle pathLength="1" cx="9.5" cy="13" r="4.5" />
      <circle pathLength="1" cx="15" cy="11" r="4.5" />
    </>
  ),
  cap: (
    <>
      <path pathLength="1" d="M2 9l10-4 10 4-10 4z" />
      <path pathLength="1" d="M6 11v4c0 1.6 2.7 3 6 3s6-1.4 6-3v-4" />
    </>
  ),
  bowtie: (
    <>
      <path pathLength="1" d="M4 9l7 3-7 3z" />
      <path pathLength="1" d="M20 9l-7 3 7 3z" />
      <rect pathLength="1" x="10.4" y="10" width="3.2" height="4" rx="1" />
    </>
  ),
  care: <path pathLength="1" d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9z" />,
  scissors: (
    <>
      <circle pathLength="1" cx="6" cy="6" r="2.3" />
      <circle pathLength="1" cx="6" cy="18" r="2.3" />
      <path pathLength="1" d="M8 7.5l12 9M8 16.5l12-9" />
    </>
  ),
  medal: (
    <>
      <circle pathLength="1" cx="12" cy="14" r="5" />
      <path pathLength="1" d="M9.5 9.5 7 3.5M14.5 9.5 17 3.5" />
    </>
  ),
  comfort: <path pathLength="1" d="M12 3c5 2 7 5 7 9 0 5-4 9-7 9s-7-4-7-9c0-4 2-7 7-9z" />,
  store: (
    <>
      <path pathLength="1" d="M4 9l1.5-4.5h13L20 9" />
      <path pathLength="1" d="M5 9v10.5h14V9" />
      <path pathLength="1" d="M4 9a2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.8 0 2.4 2.4 0 0 0 4.8 0" />
      <path pathLength="1" d="M10 19.5V15h4v4.5" />
    </>
  ),
}

export default function LineIcon({ name, size = 30, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`draw ${className}`}
      aria-hidden="true"
    >
      {SHAPES[name] || null}
    </svg>
  )
}
