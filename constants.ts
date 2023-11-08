import { StatusType } from "./app/(services)/(routes)/services/interfaces/iDefense.interface";

export const statusSelect = [
  {
    id: 1,
    description: 'up',
    status: StatusType.UP,
  },
  {
    id: 2,
    description: 'warning',
    status: StatusType.WARNING
  },
  {
    id: 3,
    description: 'error',
    status: StatusType.ERROR
  }
]
