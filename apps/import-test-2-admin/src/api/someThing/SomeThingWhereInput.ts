import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type SomeThingWhereInput = {
  createdAt?: DateTimeFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  updatedAt?: DateTimeFilter;
};
