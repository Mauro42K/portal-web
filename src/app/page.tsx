import { AppCard } from "@/components/portal/app-card";
import { PortalHeader } from "@/components/portal/portal-header";
import { PORTAL_APPS } from "@/config/apps";

export default function HomePage() {
  return (
    <main className="portal-bg relative min-h-screen overflow-hidden px-4 py-6 sm:px-8 sm:py-8 md:px-12 2xl:px-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="bg-orb-1" />
        <div className="bg-orb-2" />
        <div className="bg-orb-3" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-[1100px] items-center justify-center sm:min-h-[calc(100vh-4rem)] lg:max-w-[1240px] 2xl:max-w-[1600px]">
        <div className="relative w-full rounded-3xl border border-white/25 bg-white/45 p-4 shadow-[var(--panel-shadow)] backdrop-blur-2xl sm:p-6 lg:p-8 2xl:p-10">
          <div className="pointer-events-none absolute inset-[1px] rounded-[calc(1.5rem_-_1px)] bg-gradient-to-b from-white/40 via-white/15 to-white/10" />
          <div className="relative">
            <PortalHeader />

            <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-5 md:grid-cols-3 md:gap-6 lg:mt-9 lg:gap-7 2xl:mt-10 2xl:gap-9">
              {PORTAL_APPS.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
