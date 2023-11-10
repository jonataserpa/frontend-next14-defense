"use client";

import TablePage from "@/components/table";
import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import { IDefenseProps } from "./interfaces/iDefense.interface";
import { useEffect, useState } from "react";
import { useDebounce } from "@/components/hooks";
import { ServiceGateway } from "./gateways/serviceGateway";
import { ModalData, useModal } from "@/components/hooks/use-modal-store";
import { routes } from "@/app/constants";

const ServicesPage = () => {
  const { onOpen } = useModal();
  const { debounce } = useDebounce();
  const [_, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [rows, setRows] = useState<IDefenseProps[]>([]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Handle delete item
   * @param id
   */
  const handleDelete = (id: number | undefined) => {
    if (confirm("Realmente deseja apagar?")) {
      ServiceGateway.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          setRows((oldRows) => [
            ...oldRows.filter((oldRow) => oldRow.id !== id),
          ]);
          setTotalCount(rows.length);
          getAllServices();
        }
      });
    }
  };

  /**
   * Edit services modal dialog
   */
  function handleEdit(service: IDefenseProps) {
    const serviceValue: ModalData = {
      server: service,
    }
    onOpen("createService", serviceValue);
  }

  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar routes={routes} />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        <TablePage
          rows={rows}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          totalCount={totalCount}
        />
      </main>
    </div>
  );
};

export default ServicesPage;
