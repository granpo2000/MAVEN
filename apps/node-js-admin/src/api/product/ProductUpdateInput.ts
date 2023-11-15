import { PedidoUpdateManyWithoutProductsInput } from "./PedidoUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: PedidoUpdateManyWithoutProductsInput;
};
