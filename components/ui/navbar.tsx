import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { MobileSidebar } from "../mobile-sidebar";
import HomePage from "@/app/(dashboard)/(routes)/dashboard/page";

const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <Button variant="ghost" size="icon" className="md:hidden">
                <MobileSidebar />
            </Button>
            <div className="flex w-full justify-end">
                <Button></Button>
            </div>            
        </div>
    )
}

export default Navbar;