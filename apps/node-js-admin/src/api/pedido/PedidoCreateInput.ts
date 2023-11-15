import { ClienteWhereUniqueInput } from "../cliente/ClienteWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PedidoCreateInput = {
  customer?: ClienteWhereUniqueInput | null;
  discount?: number | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
