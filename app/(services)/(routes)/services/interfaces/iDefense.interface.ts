import { LucideIcon } from "lucide-react";

export interface IDefenseProps {
    id: number;
    service: string;
    status: string;
    icon: LucideIcon;
    href: string;
    color: string;
    bgColor: string;
  }