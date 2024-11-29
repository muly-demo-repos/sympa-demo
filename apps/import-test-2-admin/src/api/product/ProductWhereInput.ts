import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { NewModelWhereUniqueInput } from "../newModel/NewModelWhereUniqueInput";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  itemPrice?: IntNullableFilter;
  name?: StringNullableFilter;
  newModel?: NewModelWhereUniqueInput;
  orders?: OrderListRelationFilter;
  updatedAt?: DateTimeFilter;
};
