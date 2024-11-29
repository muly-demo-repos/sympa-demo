import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type NewModelWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  newFieldandOneWasRemoved?: StringNullableFilter;
  products?: ProductListRelationFilter;
  updatedAt?: DateTimeFilter;
};
