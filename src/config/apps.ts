export type PortalAppIcon = "tasko" | "gantt" | "plus";

export type PortalApp = {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  href?: string;
  status: "active" | "coming-soon";
  icon: PortalAppIcon;
  ariaLabel?: string;
};

export const PORTAL_APPS: PortalApp[] = [
  {
    id: "tasko-ai",
    title: "Tasko.ai",
    subtitle: "Inteligencia para tus tareas",
    description: "Inteligencia para tus tareas diarias",
    href: "https://tasko-ai.vercel.app",
    status: "active",
    icon: "tasko",
    ariaLabel: "Abrir Tasko.ai",
  },
  {
    id: "pdr-gantt",
    title: "PDR-Gantt",
    subtitle: "Gestión visual de proyectos",
    description: "Gestión visual de proyectos y cronogramas",
    href: "https://pdr-gantt.vercel.app",
    status: "active",
    icon: "gantt",
    ariaLabel: "Abrir PDR-Gantt",
  },
  {
    id: "coming-soon",
    title: "Próximamente",
    subtitle: "Nuevas herramientas en camino",
    status: "coming-soon",
    icon: "plus",
  },
];
