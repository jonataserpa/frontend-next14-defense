import { LayoutDashboard, LucideIcon, MessageSquare } from "lucide-react";
import { Montserrat } from "next/font/google";
import { IDefenseProps } from "./(services)/(routes)/services/interfaces/iDefense.interface";



export const statusSelect = [
  {
    id: 1,
    description: "up",
    status: "up",
  },
  {
    id: 2,
    description: "warning",
    status: "warning",
  },
  {
    id: 3,
    description: "error",
    status: "error",
  },
];

export type Routes = {
  label: string;
  icon: LucideIcon;
  href: string;
  color: string;
};

export type RouteProps = {
  routes: Routes[];
};

export const poppins = Montserrat({
  weight: "300",
  subsets: ["latin"],
});

export const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Cadastrar",
    icon: MessageSquare,
    href: "/services",
    color: "text-violet-500",
  },
];
