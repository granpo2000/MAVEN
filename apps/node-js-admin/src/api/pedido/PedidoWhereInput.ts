import { ClienteWhereUniqueInput } from "../cliente/ClienteWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PedidoWhereInput = {
  customer?: ClienteWhereUniqueInput;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
  totalPrice?: IntNullableFilter;
};
