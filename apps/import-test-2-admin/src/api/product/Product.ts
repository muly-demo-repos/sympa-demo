import { NewModel } from "../newModel/NewModel";
import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  newModel?: NewModel | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
