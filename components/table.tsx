import { IRows } from "@/app/(services)/(routes)/services/interfaces/iRows.interface";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Delete, Pencil, Plus } from "lucide-react";
import { ActionTooltip } from "./action-tooltip";
import { useModal } from "./hooks/use-modal-store";

const TablePage = ({ rows, handleDelete, handleEdit, totalCount }: IRows) => {
  const { onOpen } = useModal();

  if (rows && rows.length === 0) {
    return <div style={{ marginLeft: 20 }}>Nenhum serviço cadastrado...</div>;
  }

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="px-4  md:px-20 text-4xl md:text-2xl gap-4 font-bold text-left">
          Cadastro dos Serviços
        </h2>
        <p className="px-4 md:px-20 text-muted-foreground font-light text-sm md:text-lg text-left">
          Listagem e cadastro dos serviços.
          <div className="flex w-full justify-end px-12 -my-5">
            <ActionTooltip
              side="right"
              align="center"
              label="Cadastrar serviço ?"
            >
              <button
                onClick={() => onOpen("createService")}
                className="group flex items-center "
              >
                <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all items-center justify-center group-hover:bg-black bg-current	">
                  <Plus
                    className="group-hover:text-white transition text-white"
                    size={25}
                  />
                </div>
              </button>
            </ActionTooltip>
          </div>
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-13">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Serviços</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[10px]"></TableHead>
              <TableHead className="w-[10px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows &&
              rows.length > 0 &&
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.status}</TableCell>

                  <TableCell className="text-right">
                    <ActionTooltip
                      side="right"
                      align="center"
                      label="Editar serviço ?"
                    >
                      <Pencil
                        className="text-teal-700"
                        onClick={() => handleEdit(row)}
                      />
                    </ActionTooltip>
                  </TableCell>
                  <TableCell className="text-right">
                    <ActionTooltip
                      side="right"
                      align="center"
                      label="Excluir serviço ?"
                    >
                      <Delete
                        className="text-red-500"
                        onClick={() => handleDelete(row.id)}
                      />
                    </ActionTooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableCaption>
            <div className="flex flex-row gap-2">
              <p>Total: </p>
              <strong>{totalCount}</strong>
            </div>
          </TableCaption>
        </Table>
      </div>
    </div>
  );
};

export default TablePage;
