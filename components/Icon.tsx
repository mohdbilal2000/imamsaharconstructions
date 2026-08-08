type IconName =
  | "phone"
  | "whatsapp"
  | "pin"
  | "clock"
  | "mail"
  | "arrow"
  | "check"
  | "star"
  | "menu"
  | "close"
  | "hammer"
  | "receipt"
  | "team"
  | "shield"
  | "wrench"
  | "spark"
  | "plus"
  | "chevron";

const paths: Record<IconName, React.JSX.Element> = {
  phone: (
    <path d="M6.6 2.5h3l1.5 3.8-2 1.3a11.5 11.5 0 0 0 5.3 5.3l1.3-2 3.8 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 4.7a2 2 0 0 1 2-2.2Z" />
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 4.8 16A8 8 0 1 1 8 19.2l-4.5 1.3Z" />
      <path d="M8.8 8.2c.3-.7.6-.7.9-.7h.6c.2 0 .5 0 .7.6l.8 1.9c.1.3 0 .5-.1.7l-.5.6c-.2.2-.3.4-.1.7a7 7 0 0 0 3 2.7c.3.1.5.1.7-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.3.4.5 0 .8-.5 1.7-1 2-.5.3-1.4.5-2.4.2a12 12 0 0 1-6.3-5.6c-.6-1.1-.6-2.2-.4-2.9.1-.3.3-.5.6-.6Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10.5" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.7" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  mail: (
    <>
      <rect x="2.8" y="4.8" width="18.4" height="14.4" rx="2.4" />
      <path d="m3.6 7 7.4 5.4a1.8 1.8 0 0 0 2 0L20.4 7" />
    </>
  ),
  arrow: <path d="M4.5 12h15m-6-6 6 6-6 6" />,
  check: <path d="m4.8 12.6 4.6 4.6 9.8-10.4" />,
  star: (
    <path d="m12 3.3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.8l6.1-.9L12 3.3Z" />
  ),
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  close: <path d="m5.5 5.5 13 13m0-13-13 13" />,
  chevron: <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  hammer: (
    <>
      <path d="m13.4 7.6 3-3 1.6 1.6 2.6-2.6-4.2-1.4-3.8 2.2" />
      <path d="M12 6.2 4.2 14a2.6 2.6 0 0 0 0 3.7l2 2a2.6 2.6 0 0 0 3.7 0l7.9-7.8" />
      <path d="m10 8.2 5.8 5.8" />
    </>
  ),
  receipt: (
    <>
      <path d="M5.5 3.5h13v17l-2.2-1.5-2.2 1.5-2.1-1.5-2.2 1.5-2.1-1.5-2.2 1.5v-17Z" />
      <path d="M9 8.5h6M9 12.5h6" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 20a6.2 6.2 0 0 1 12.4 0" />
      <path d="M16 5.2a3.2 3.2 0 0 1 0 6.1M17.6 14.3A6.2 6.2 0 0 1 21.2 20" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8 4.6 5.7v6c0 4.6 3.1 8.2 7.4 9.6 4.3-1.4 7.4-5 7.4-9.6v-6L12 2.8Z" />
      <path d="m8.8 12.2 2.3 2.3 4.3-4.6" />
    </>
  ),
  wrench: (
    <path d="M20 5.2 16.9 8.3l-2.5-.4-.4-2.5L17.1 2A6 6 0 0 0 9 9.5L3.6 15a2.6 2.6 0 0 0 3.7 3.7l5.4-5.5A6 6 0 0 0 20 5.2Z" />
  ),
  spark: <path d="M12 2.5v5m0 9v5M2.5 12h5m9 0h5M5.6 5.6l3.5 3.5m5.8 5.8 3.5 3.5m0-12.8-3.5 3.5m-5.8 5.8-3.5 3.5" />,
};

export default function Icon({
  name,
  className = "size-5",
  strokeWidth = 1.7,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
