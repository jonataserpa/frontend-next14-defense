/*"use client";

import { ArrowRight, ScreenShare } from "lucide-react";
import { useRouter } from "next/navigation";
import { IDefenseProps } from "@/app/(services)/(routes)/services/interfaces/iDefense.interface";

type TCardProps = {
  tool: IDefenseProps;
};

const CardList = ({ tool }: TCardProps) => {
  const router = useRouter();

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
    <div
      onClick={() => router.push(tool.href || "/services")}
      key={tool.id}
      className="p-4 border-black/5 border-r-4 ring-1 rounded-lg flex items-center justify-between hover:shadow-md transition cursor-pointer"
      data-testid="card"
    >
      <div className="flex items-center gap-x-4">
        <div className={tool.bgColor}>
          <ScreenShare className={tool.color} />
        </div>
        <div className="flex flex-col ...">
          <div className="font-semibold">
            ID: <label className="text-neutral-500">{tool.id}</label>
          </div>
          <div className="font-semibold">
            Serviço: <label className="text-neutral-500">{tool.name}</label>
          </div>
          <div className="font-semibold">
            Status: {validateColorText(tool.status.toString())}
          </div>
        </div>
      </div>
      <ArrowRight className="w-5 h-5" />
    </div>
  );
};

export default CardList;
*/