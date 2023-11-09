"use client";

import Sidebar from "@/components/ui/sidebar";
import HomePage from "../(dashboard)/(routes)/dashboard/page";
import Navbar from "@/components/ui/navbar";
import { IDefenseProps } from "../(services)/(routes)/services/interfaces/iDefense.interface";
import { useEffect, useState } from "react";
import { useDebounce } from "@/components/hooks";
import { ServiceGateway } from "../(services)/(routes)/services/gateways/serviceGateway";
import { routes } from "../constants";

const LandingPage = () => {
    const { debounce } = useDebounce();
    const [rows, setRows] = useState<IDefenseProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    /**
   * Get all services
   */
  function getAllServices() {
    debounce(() => {
      ServiceGateway.getAll().then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
        } else {
          setRows(result.data);
        }
      });
    });
  }

  /**
   * Define default values list loading
   */
  useEffect(() => {
    setIsLoading(true);
    getAllServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <Sidebar routes={routes} />
            </div>
            <main className="md:pl-72">
                <Navbar />
                <HomePage rows={rows} />
            </main>
        </div>
    )
}

export default LandingPage;