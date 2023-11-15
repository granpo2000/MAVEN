import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  address_1?: SortOrder;
  address_2?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  zip?: SortOrder;
};
