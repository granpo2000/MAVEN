import { Pedido } from "../pedido/Pedido";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Pedido>;
  updatedAt: Date;
};
