import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ClienteListRelationFilter } from "../cliente/ClienteListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type EmailWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  city?: StringNullableFilter;
  customers?: ClienteListRelationFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
};
