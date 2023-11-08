"use client";

import TablePage from "@/components/table";
import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import { IDefenseProps } from "./interfaces/iDefense.interface";
import { useEffect, useState } from "react";
import { services } from "@/constants";
import { useDebounce } from "@/components/hooks";
import { ServiceGateway } from "./gateways/serviceGateway";
import { Environment } from "@/components/environment";

const ServicesPage = () => {
  const { debounce } = useDebounce();
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
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
          setTotalCount(result.totalCount);
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
   * Handle delete item
   * @param id
   */
  const handleDelete = (id: number | undefined) => {
    if (confirm("Realmente deseja apagar?")) {
      /*CattlesService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          setRows((oldRows) => [
            ...oldRows.filter((oldRow) => oldRow.id.toString() !== id),
          ]);
          alert("Registro apagado com sucesso!");
        }
      });*/
    }
  };

  /**
   * Edit cattles modal dialog
   */
  function handleEdit(cattlesValue: IDefenseProps) {
    /*setTitleModal("Edite Vaca");
    if (cattlesValue.children && cattlesValue.children.length === 0) {
      cattlesValue.children = [
        {
          id: uuidv4(),
          name: "",
          namefather: "",
          dateborn: null,
          observacion: "",
          proprietary: "",
        },
      ];
    }*/
  }

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        <TablePage
          rows={rows}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </main>
    </div>
  );
};

export default ServicesPage;
