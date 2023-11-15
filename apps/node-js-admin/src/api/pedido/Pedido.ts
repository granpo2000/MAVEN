import { Cliente } from "../cliente/Cliente";
import { Product } from "../product/Product";

export type Pedido = {
  createdAt: Date;
  customer?: Cliente | null;
  discount: number | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
