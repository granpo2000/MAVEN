import { Cliente } from "../cliente/Cliente";

export type Email = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  customers?: Array<Cliente>;
  id: string;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
