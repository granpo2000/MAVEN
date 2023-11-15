import { ClienteCreateNestedManyWithoutEmailsInput } from "./ClienteCreateNestedManyWithoutEmailsInput";

export type EmailCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: ClienteCreateNestedManyWithoutEmailsInput;
  state?: string | null;
  zip?: number | null;
};
