import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  address1?: StringNullableFilter;
  address2?: StringNullableFilter;
  city?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  myNewField?: StringNullableFilter;
  state?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  zip?: IntNullableFilter;
};
