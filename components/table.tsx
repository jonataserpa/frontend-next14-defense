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
import { ChevronDown, Delete, Pencil, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { ActionTooltip } from "./action-tooltip";

const TablePage = ({ rows, handleDelete, handleEdit }: IRows) => {
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
          Listagem e cadastro dos dados do serviço desejado.
          <div className="flex w-full justify-end px-12 -my-5">
            <ActionTooltip side="right" align="center" label="Cadastrar serviço ?">
              <button onClick={() => {}} className="group flex items-center">
                <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all items-center justify-center bg-background group-hover:bg-black text-primary dark:bg-[#1E1F22] bg-[#371342]">
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
      <div className="px-4 md:px-20 lg:px-32">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Serviços</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows &&
              rows.length > 0 &&
              rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.id}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.service}</TableCell>

                  <TableCell className="text-right">
                    <ActionTooltip side="right" align="center" label="Editar serviço ?">
                      <Pencil onClick={() => handleEdit(row)} />
                    </ActionTooltip>
                  </TableCell>
                  <TableCell className="text-right">
                    <ActionTooltip side="right" align="center" label="Excluir serviço ?">
                      <Delete onClick={() => handleDelete(row.id)} />
                    </ActionTooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TablePage;
