export type PortalAppIcon = "tasko" | "gantt" | "cad-view" | "plus";

export type PortalApp = {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  note?: string;
  href?: string;
  status: "active" | "coming-soon";
  icon: PortalAppIcon;
  ariaLabel?: string;
};

export const PORTAL_APPS: PortalApp[] = [
  {
    id: "tasko-ai",
    title: "Tasko.ai",
    subtitle: "Intelligence for your tasks",
    description: "Intelligence for your daily tasks",
    href: "https://tasko-ai.vercel.app",
    status: "active",
    icon: "tasko",
    ariaLabel: "Abrir Tasko.ai",
  },
  {
    id: "pdr-gantt",
    title: "PDR-Gantt",
    subtitle: "Visual project management",
    description: "Visual project and schedule management",
    href: "https://pdr-gantt.vercel.app",
    status: "active",
    icon: "gantt",
    ariaLabel: "Abrir PDR-Gantt",
  },
  {
    id: "cad-view",
    title: "CAD View",
    subtitle: "View DWG/DXF CAD drawings in the browser",
    description: "View DWG/DXF CAD drawings in the browser",
    href: "https://cad-view-pearl.vercel.app",
    status: "active",
    icon: "cad-view",
    ariaLabel: "Abrir CAD View",
  },
];
