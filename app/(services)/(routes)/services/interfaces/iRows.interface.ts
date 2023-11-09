import { IDefenseProps } from "./iDefense.interface";

export interface IRows {
    rows: IDefenseProps[];
    handleDelete: (id: number | undefined) => void;
    handleEdit: (cattles: IDefenseProps) => void;
    totalCount: number;
  }