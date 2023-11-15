import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";
import { PedidoCreateNestedManyWithoutClientesInput } from "./PedidoCreateNestedManyWithoutClientesInput";

export type ClienteCreateInput = {
  address?: EmailWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: PedidoCreateNestedManyWithoutClientesInput;
  phone?: string | null;
};
