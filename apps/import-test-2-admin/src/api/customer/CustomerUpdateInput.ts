import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { SomeThingWhereUniqueInput } from "../someThing/SomeThingWhereUniqueInput";

export type CustomerUpdateInput = {
  customerType?: "INDIVIDUAL" | "COMPANY" | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string | null;
  someThing?: SomeThingWhereUniqueInput | null;
};
