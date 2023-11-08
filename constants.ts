import { ScreenShare } from "lucide-react";
import { IDefenseProps } from "./app/(services)/(routes)/services/interfaces/iDefense.interface";

export const MAX_FREE_COUNTS = 5;

export const services: IDefenseProps[] = [
  {
    id: 1,
    service: 'SERPRO',
    status: "up",
    icon: ScreenShare,
    href: '/services',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    id: 2,
    service: 'Conselho Nacional de Justiça',
    status: "warning",
    icon: ScreenShare,
    href: '/services',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    id: 3,
    service: 'Tribunal de Justiça',
    status: "error",
    icon: ScreenShare,
    href: '/services',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    id: 4,
    service: 'SERPRO',
    status: "up",
    icon: ScreenShare,
    href: '/services',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    id: 5,
    service: 'Conselho Nacional de Justiça',
    status: "warning",
    icon: ScreenShare,
    href: '/services',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    id: 6,
    service: 'Tribunal de Justiça',
    status: "error",
    icon: ScreenShare,
    href: '/services',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
];
