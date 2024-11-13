import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  address1?: SortOrder;
  address2?: SortOrder;
  city?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  myNewField?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  zip?: SortOrder;
};
