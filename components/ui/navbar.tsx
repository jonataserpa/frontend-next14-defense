"use client"

import { Button } from "@/components/ui/button";
import { MobileSidebar } from "../mobile-sidebar";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="flex items-center p-4">
            <Button variant="ghost" size="icon" className="md:hidden">
                <MobileSidebar />
            </Button>
            <div className="flex w-full justify-end">
                <Button onClick={() => router.push('services')}>
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </div>            
        </div>
    )
}

export default Navbar;