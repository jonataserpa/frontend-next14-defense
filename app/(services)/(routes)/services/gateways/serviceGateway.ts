import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { IDefenseProps } from "../interfaces/iDefense.interface";
import { ApiService } from "@/components/axios/axios-config";

export type TServicesWithTotalCount = {
  data: IDefenseProps[];
  totalCount: number;
};

export type directionOfSort = "ASC" | "DESC" | undefined;

/**
 * Handle api errors
 * @param error
 */
export const handleApiErrors = (error: AxiosError, message: string) => {
  if (error && error.response && error.response.data) {
    switch (error.response.data.statusCode) {
      case 400:
        toast.error(
          "Erro ao processar a requisição, verifique os dados enviados e tente novamente!"
        );
        break;
      case 404:
        toast.error("Serviço não encontrado");
        break;
      case 500:
        toast.error(
          "Erro, o servidor não conseguiu processar a requisição, por favor tente novamente mais tarde ou contate o suporte!"
        );
        break;
      default:
        toast.error(message);
        break;
    }
  }
};

const getAll = async (): Promise<TServicesWithTotalCount | Error> => {
  try {
    const url = "/services?_sort=id&_order=desc";
    const { data } = await ApiService.get(url);

    if (data) {
      return {
        data: data,
        totalCount: data.length,
      };
    }

    return new Error("Erro ao listar os registros.");
  } catch (error) {
    handleApiErrors(error as AxiosError, "Erro ao listar os registros.");
    throw error;
  }
};

const getById = async (id: number): Promise<IDefenseProps | Error> => {
  try {
    const { data } = await ApiService.get(`/services/${id}`);

    if (data) {
      return data;
    }

    return new Error("Erro ao consultar o registro.");
  } catch (error) {
    handleApiErrors(error as AxiosError, "Erro ao consultar o registro.");
    throw error;
  }
};

const create = async (
  dados: Omit<IDefenseProps, "id">
): Promise<string | Error> => {
  try {
    const { data } = await ApiService.post("/services", dados);

    if (data) {
      toast.success("Serviço criado com sucesso.");
      return data.id;
    }

    return new Error("Erro ao criar o registro.");
  } catch (error) {
    handleApiErrors(error as AxiosError, "Erro ao criar o registro.");
    throw error;
  }
};

const updateById = async (
  id: string,
  dados: IDefenseProps
): Promise<void | Error> => {
  try {
    await ApiService.put(`/services/${id}`, dados);
    toast.success("Serviço atualizado com sucesso.");
  } catch (error) {
    handleApiErrors(error as AxiosError, "Erro ao atualizar o registro.");
    throw error;
  }
};

const deleteById = async (id: string | undefined): Promise<void | Error> => {
  try {
    await ApiService.delete(`/services/`, id);
  } catch (error) {
    handleApiErrors(error as AxiosError, "Erro ao apagar o registro.");
    throw error;
  }
};

export const ServiceGateway = {
  getAll,
  create,
  getById,
  updateById,
  deleteById,
};