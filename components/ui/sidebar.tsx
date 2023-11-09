import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import { RouteProps, poppins } from "@/app/constants";

export const Logo = () => {
  return <Image fill alt="Logo" src="/logo.png" />;
};

const Sidebar = ({ routes }: RouteProps) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">{Logo()}</div>
          <h3 data-testid="defense" className={cn("text-1xl font-bold", poppins.className)}>
            Defensoria do Estado
          </h3>
        </Link>
        <div className="space-y-1">
          {routes &&
            routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-white bg-white/10"
                    : "text-zinc-400"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
