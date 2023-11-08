"use client"

import { Button } from "@/components/ui/button";
import { MobileSidebar } from "../mobile-sidebar";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { ActionTooltip } from "../action-tooltip";

const Navbar = () => {
    const router = useRouter();
    const currentPage = usePathname();

    return (
        <div className="flex items-center p-4">
            <Button variant="ghost" size="icon" className="md:hidden">
                <MobileSidebar />
            </Button>
            <div className="flex w-full justify-end">
            <ActionTooltip side="right" align="center" label={ currentPage === '/dashboard' ? "Ir para cadastro ?" : "Voltar para dashboard" }>
                <Button onClick={() => currentPage === '/dashboard' ? router.push('services') : router.push('dashboard')}>
                    {currentPage  === '/dashboard' ? (
                        <ArrowRight className="w-5 h-5" />
                    ): (
                        <ArrowLeft className="w-5 h-5" />
                    )}
                </Button>
            </ActionTooltip>
            </div>            
        </div>
    )
}

export default Navbar;