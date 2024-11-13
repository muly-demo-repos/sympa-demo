import { ProductCreateNestedManyWithoutNewModelsInput } from "./ProductCreateNestedManyWithoutNewModelsInput";

export type NewModelCreateInput = {
  newFieldandOneWasRemoved?: string | null;
  products?: ProductCreateNestedManyWithoutNewModelsInput;
};
