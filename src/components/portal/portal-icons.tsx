import type { PortalAppIcon } from "@/config/apps";

type IconProps = {
  className?: string;
};

function mergeClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function TaskoIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={mergeClasses("h-16 w-16", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tasko-bg" x1="12" y1="8" x2="86" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDBA74" />
          <stop offset="0.55" stopColor="#FB7185" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>
        <linearGradient id="tasko-check" x1="20" y1="18" x2="72" y2="76" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE68A" />
          <stop offset="1" stopColor="#FB923C" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="88" height="88" rx="22" fill="url(#tasko-bg)" />
      <path
        d="M25 50.5c3.2-5.8 9.5-7 13.7-2.5l6.1 6.5 18.5-23.4c3.5-4.4 10-4.9 14.1-1.1 3.9 3.6 4.4 9.7 1 13.9L52.7 76.2c-3.6 4.6-10.4 4.9-14.4.6L24.7 63c-3.2-3.4-3.8-8.7.3-12.5Z"
        fill="url(#tasko-check)"
      />
      <path
        d="M24 51c2-3.8 6.7-4.7 9.8-1.8l10.8 10.3"
        fill="none"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GanttIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={mergeClasses("h-16 w-16", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gantt-bg" x1="8" y1="8" x2="88" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#312E81" />
          <stop offset="0.55" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="gantt-bar-1" x1="15" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5F3FC" />
          <stop offset="1" stopColor="#E9D5FF" />
        </linearGradient>
        <linearGradient id="gantt-bar-2" x1="16" y1="0" x2="82" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FB7185" />
          <stop offset="1" stopColor="#FDBA74" />
        </linearGradient>
        <linearGradient id="gantt-bar-3" x1="18" y1="0" x2="86" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C4B5FD" />
          <stop offset="1" stopColor="#FDE68A" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="88" height="88" rx="22" fill="url(#gantt-bg)" />
      <path
        d="M28 25v46M48 25v46"
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="18" y="22" width="34" height="12" rx="6" fill="url(#gantt-bar-1)" opacity="0.95" />
      <rect x="34" y="40" width="40" height="12" rx="6" fill="url(#gantt-bar-2)" opacity="0.95" />
      <rect x="50" y="58" width="28" height="12" rx="6" fill="url(#gantt-bar-3)" opacity="0.95" />
      <path
        d="M48 28h10l4 4"
        fill="none"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="28" r="2" fill="rgba(255,255,255,0.75)" />
      <circle cx="48" cy="46" r="2" fill="rgba(255,255,255,0.75)" />
      <circle cx="48" cy="64" r="2" fill="rgba(255,255,255,0.75)" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={mergeClasses("h-14 w-14", className)}
      aria-hidden="true"
    >
      <path
        d="M32 16v32M16 32h32"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SettingsIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={mergeClasses("h-5 w-5", className)}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.33 3.4a1.9 1.9 0 0 1 3.34 0l.44.86a1.9 1.9 0 0 0 2.03.99l.95-.16a1.9 1.9 0 0 1 2.36 2.36l-.16.95a1.9 1.9 0 0 0 .99 2.03l.86.44a1.9 1.9 0 0 1 0 3.34l-.86.44a1.9 1.9 0 0 0-.99 2.03l.16.95a1.9 1.9 0 0 1-2.36 2.36l-.95-.16a1.9 1.9 0 0 0-2.03.99l-.44.86a1.9 1.9 0 0 1-3.34 0l-.44-.86a1.9 1.9 0 0 0-2.03-.99l-.95.16a1.9 1.9 0 0 1-2.36-2.36l.16-.95a1.9 1.9 0 0 0-.99-2.03l-.86-.44a1.9 1.9 0 0 1 0-3.34l.86-.44a1.9 1.9 0 0 0 .99-2.03l-.16-.95a1.9 1.9 0 0 1 2.36-2.36l.95.16a1.9 1.9 0 0 0 2.03-.99l.44-.86Z" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

export function AppIcon({
  icon,
  className,
}: {
  icon: PortalAppIcon;
  className?: string;
}) {
  if (icon === "tasko") return <TaskoIcon className={className} />;
  if (icon === "gantt") return <GanttIcon className={className} />;
  return <PlusIcon className={className} />;
}
