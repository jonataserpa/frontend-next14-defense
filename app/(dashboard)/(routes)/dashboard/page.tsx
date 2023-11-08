"use client";

import { ArrowRight, ScreenShare } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { services } from "@/constants";
import { ServiceGateway } from "@/app/(services)/(routes)/services/gateways/serviceGateway";
import { useDebounce } from "@/components/hooks";
import { useEffect, useState } from "react";
import { IDefenseProps } from "@/app/(services)/(routes)/services/interfaces/iDefense.interface";

const HomePage = () => {
  const router = useRouter();
  const { debounce } = useDebounce();
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState<IDefenseProps[]>([]);

  /**
   * Get all users
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
  }, []);

  /**
   * Validate Color
   * @param status 
   * @returns 
   */
  const validateColorText = (status: string) => {
    if (status === "up") {
      return <label className="text-green-600">{status}</label>;
    } else if (status === "warning") {
      return <label className="text-yellow-500">{status}</label>;
    } else if (status === "error") {
      return <label className="text-rose-600">{status}</label>;
    } else {
      return <label className="text-sky-800">{status}</label>;
    }
  };

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Painel de Serviço - Listagem
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          A Defensoria do Estado do Rio Grande do Sul
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">

        {rows && rows.length === 0 && (
            <div className="text-muted-foreground font-light text-sm md:text-lg text-center">
                <strong>Carregando serviços...</strong>
            </div>
        )}

        {rows.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <ScreenShare className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="flex flex-col ...">
                <div className="font-semibold">
                  ID: <label className="text-neutral-500">{tool.id}</label>
                </div>
                <div className="font-semibold">
                  Serviço:{" "}
                  <label className="text-neutral-500">{tool.service}</label>
                </div>
                <div className="font-semibold">
                  Status: {validateColorText(tool.status)}
                </div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
