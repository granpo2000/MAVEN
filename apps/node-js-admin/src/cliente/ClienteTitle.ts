import { Cliente as TCliente } from "../api/cliente/Cliente";

export const CLIENTE_TITLE_FIELD = "firstName";

export const ClienteTitle = (record: TCliente): string => {
  return record.firstName?.toString() || String(record.id);
};
