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
import { Delete, Pencil } from "lucide-react";

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
          LIstagem e cadastro dos dados do serviço desejado.
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

                  <TableCell  className="text-right">
                    <Pencil onClick={() => handleEdit(row)} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Delete onClick={() => handleDelete(row.id)} />
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
