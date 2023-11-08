import { StatusType } from "./app/(services)/(routes)/services/interfaces/iDefense.interface";

export const statusSelect = [
  {
    id: 1,
    description: StatusType.UP
  },
  {
    id: 2,
    description: StatusType.WARNING
  },
  {
    id: 3,
    description: StatusType.ERROR
  }
]
