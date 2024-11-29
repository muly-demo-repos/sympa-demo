import { NewModelWhereUniqueInput } from "../newModel/NewModelWhereUniqueInput";
import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  newModel?: NewModelWhereUniqueInput | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
