import { SettingsIcon } from "@/components/portal/portal-icons";

export function PortalHeader() {
  return (
    <header className="flex items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-[2rem]">
          <span>Bienvenido</span>
          <span className="text-slate-900/70"> / Welcome</span>
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <div
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/85 text-sm font-semibold text-slate-700 shadow-[0_8px_18px_-10px_rgba(15,23,42,0.45)]"
        >
          M
        </div>
        <div
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/70 text-slate-500 shadow-[0_8px_18px_-10px_rgba(15,23,42,0.35)]"
        >
          <SettingsIcon />
        </div>
      </div>
    </header>
  );
}
