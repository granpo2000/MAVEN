import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PedidoListRelationFilter } from "../pedido/PedidoListRelationFilter";

export type ClienteWhereInput = {
  address?: EmailWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: PedidoListRelationFilter;
  phone?: StringNullableFilter;
};
