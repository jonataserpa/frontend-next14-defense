import { IDefenseProps } from "@/app/(services)/(routes)/services/interfaces/iDefense.interface";
import { create } from "zustand";

export type ModalType = "createService" | "editService" | "deleteService";

interface ModalData {
  server?: IDefenseProps;
  apiUrl?: string;
  query?: Record<string, any>;
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false })
}));
