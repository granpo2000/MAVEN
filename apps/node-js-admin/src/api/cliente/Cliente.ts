import { Email } from "../email/Email";
import { Pedido } from "../pedido/Pedido";

export type Cliente = {
  address?: Email | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Pedido>;
  phone: string | null;
  updatedAt: Date;
};
