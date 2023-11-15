import { ClienteUpdateManyWithoutEmailsInput } from "./ClienteUpdateManyWithoutEmailsInput";

export type EmailUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: ClienteUpdateManyWithoutEmailsInput;
  state?: string | null;
  zip?: number | null;
};
