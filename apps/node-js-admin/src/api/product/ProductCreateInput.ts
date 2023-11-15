import { PedidoCreateNestedManyWithoutProductsInput } from "./PedidoCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: PedidoCreateNestedManyWithoutProductsInput;
};
