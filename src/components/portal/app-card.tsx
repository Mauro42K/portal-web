import { AppIcon } from "@/components/portal/portal-icons";
import type { PortalApp } from "@/config/apps";

type ActivePortalApp = PortalApp & { status: "active"; href: string };

function ActiveCard({ app }: { app: ActivePortalApp }) {
  return (
    <a
      href={app.href}
      target="_self"
      rel="noopener noreferrer"
      aria-label={app.ariaLabel ?? `Abrir ${app.title}`}
      className="group relative flex min-h-[300px] flex-col items-center rounded-3xl border border-[color:var(--card-border)] bg-white/78 px-6 py-7 text-center shadow-[var(--card-shadow)] transition duration-300 ease-out will-change-transform hover:-translate-y-2 hover:border-white/40 hover:shadow-[var(--card-shadow-hover)] focus-visible:-translate-y-1 focus-visible:shadow-[var(--card-shadow-hover)] sm:min-h-[320px] sm:px-7 sm:py-8 lg:min-h-[336px] 2xl:min-h-[360px] 2xl:px-8 2xl:py-9"
    >
      <div className="absolute inset-x-4 top-4 h-32 rounded-[24px] bg-gradient-to-br from-white/75 via-white/35 to-white/5 opacity-80 blur-2xl sm:h-36 lg:h-40" />
      <div className="relative flex h-32 w-full items-center justify-center sm:h-36 lg:h-40 2xl:h-44">
        <div className="rounded-[24px] border border-white/70 bg-white/38 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] sm:rounded-[26px] sm:p-3.5">
          <AppIcon
            icon={app.icon}
            className="h-[4.5rem] w-[4.5rem] sm:h-[4.9rem] sm:w-[4.9rem] lg:h-[5.35rem] lg:w-[5.35rem] 2xl:h-[5.8rem] 2xl:w-[5.8rem]"
          />
        </div>
      </div>

      <div className="relative mt-4 space-y-2 sm:mt-5">
        <h2 className="text-[1.55rem] font-semibold tracking-tight text-slate-900 sm:text-[1.65rem] lg:text-[1.75rem] 2xl:text-[1.9rem]">
          {app.title}
        </h2>
        <p className="text-sm leading-relaxed text-slate-500/80 sm:text-[0.95rem] lg:text-base">
          {app.description ?? app.subtitle}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-sky-400/35 transition duration-300 ease-out group-hover:ring-1 group-focus-visible:ring-2" />
    </a>
  );
}

function ComingSoonCard({ app }: { app: PortalApp }) {
  return (
    <div
      aria-disabled="true"
      className="relative flex min-h-[300px] flex-col items-center rounded-3xl border-2 border-dashed border-slate-300/90 bg-white/58 px-6 py-7 text-center shadow-[0_16px_32px_-24px_rgba(15,23,42,0.26)] sm:min-h-[320px] sm:px-7 sm:py-8 lg:min-h-[336px] 2xl:min-h-[360px] 2xl:px-8 2xl:py-9"
    >
      <div className="absolute inset-[6px] rounded-[22px] border border-white/55" />

      <div className="relative flex h-32 w-full items-center justify-center text-slate-400 sm:h-36 lg:h-40 2xl:h-44">
        <AppIcon icon={app.icon} className="h-[4.5rem] w-[4.5rem] sm:h-[4.9rem] sm:w-[4.9rem] lg:h-[5.35rem] lg:w-[5.35rem] 2xl:h-[5.8rem] 2xl:w-[5.8rem]" />
      </div>

      <div className="relative mt-4 space-y-2 sm:mt-5">
        <h2 className="text-[1.55rem] font-semibold tracking-tight text-slate-900 sm:text-[1.65rem] lg:text-[1.75rem] 2xl:text-[1.9rem]">
          {app.title}
        </h2>
        <p className="text-sm leading-relaxed text-slate-500/80 sm:text-[0.95rem] lg:text-base">
          {app.description ?? app.subtitle}
        </p>
      </div>
    </div>
  );
}

export function AppCard({ app }: { app: PortalApp }) {
  if (app.status === "active" && app.href) {
    return <ActiveCard app={app as ActivePortalApp} />;
  }

  return <ComingSoonCard app={app} />;
}
