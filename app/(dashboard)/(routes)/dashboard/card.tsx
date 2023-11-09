import { cn } from "@/app/lib/utils";
import { ScreenShare } from "lucide-react";

const CardList = (tool: any) => {

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
      <div className="flex items-center gap-x-4">
        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
          <ScreenShare className={cn("w-8 h-8", tool.color)} />
        </div>
        <div className="flex flex-col ...">
          <div className="font-semibold">
            ID: <label className="text-neutral-500">{tool.id}</label>
          </div>
          <div className="font-semibold">
            Serviço: <label className="text-neutral-500">{tool.name}</label>
          </div>
          <div className="font-semibold">
            Status: {validateColorText(tool.status)}
          </div>
        </div>
      </div>
    );
  };

  export default CardList;