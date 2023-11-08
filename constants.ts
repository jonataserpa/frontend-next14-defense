import { Code, Code2, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    id: 1,
    service: 'SERPRO',
    status: "up",
    icon: MessageSquare,
    href: '/services',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    id: 2,
    service: 'Conselho Nacional de Justiça',
    status: "warning",
    icon: Music,
    href: '/services',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: 2,
    service: 'Tribunal de Justiça',
    status: "error",
    icon: Code2,
    href: '/services',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
];
