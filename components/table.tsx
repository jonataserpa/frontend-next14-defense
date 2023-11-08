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

const TablePage = () => {
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
          <TableCaption>lista serviços</TableCaption>
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
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>UP</TableCell>
              <TableCell>SERPRO</TableCell>
              <TableCell className="text-right">
                <Pencil />
              </TableCell>
              <TableCell className="text-right">
                <Delete />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">2</TableCell>
              <TableCell>warning</TableCell>
              <TableCell>Conselho Nacional de Justiça</TableCell>
              <TableCell className="text-right">
                <Pencil />
              </TableCell>
              <TableCell className="text-right">
                <Delete />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TablePage;
