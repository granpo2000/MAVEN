import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";
import { PedidoUpdateManyWithoutClientesInput } from "./PedidoUpdateManyWithoutClientesInput";

export type ClienteUpdateInput = {
  address?: EmailWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: PedidoUpdateManyWithoutClientesInput;
  phone?: string | null;
};
