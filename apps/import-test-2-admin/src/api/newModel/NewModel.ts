import { Product } from "../product/Product";

export type NewModel = {
  createdAt: Date;
  id: string;
  newFieldandOneWasRemoved: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
