"use client";

import qs from "query-string";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useParams, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";
import { useModal } from "../hooks/use-modal-store";
import { statusSelect } from "@/constants";
import { Button } from "../ui/button";
import { ServiceGateway } from "@/app/(services)/(routes)/services/gateways/serviceGateway";
import { IDefenseProps, StatusType } from "@/app/(services)/(routes)/services/interfaces/iDefense.interface";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Serviço é obrigatório" })
    .refine((name) => name !== "general", {
      message: "Status não pode ser 'generico'",
    }),
  status: z.string().min(1, { message: "Status é obrigatório" }),
});

export const CreateServiceModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const params = useParams();
  const isModalOpen = isOpen && type === "createService";
  const { server } = data;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      status: "",
    }
  });

  useEffect(() => {
    if (server) {
      form.setValue("name", server.name);
    } else {
      form.setValue("name", '');
    }
  }, [server, form]);

  const isLoading = form.formState.isSubmitting;

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const service: IDefenseProps = {
        name: values.name,
        status: values.status,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10"
      }
      await ServiceGateway.create(service);
      form.reset();
      router.refresh();
      router.push('/dashboard');
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Cadastro de serviço
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Descrição
                    </FormLabel>
                    <FormControl>
                      
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Descrição do serviço"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {statusSelect.map((type) => (
                          <SelectItem
                            key={type.id}
                            value={type.description}
                          >
                            {type.description}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              
              <Button variant="default" disabled={isLoading}>
                Salvar
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
