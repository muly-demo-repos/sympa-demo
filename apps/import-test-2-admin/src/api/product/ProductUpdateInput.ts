import { NewModelWhereUniqueInput } from "../newModel/NewModelWhereUniqueInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  newModel?: NewModelWhereUniqueInput | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
