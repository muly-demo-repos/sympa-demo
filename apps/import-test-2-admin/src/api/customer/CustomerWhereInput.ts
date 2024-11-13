import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { SomeThingWhereUniqueInput } from "../someThing/SomeThingWhereUniqueInput";

export type CustomerWhereInput = {
  createdAt?: DateTimeFilter;
  customerType?: "INDIVIDUAL" | "COMPANY";
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  phone?: StringNullableFilter;
  someThing?: SomeThingWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};
