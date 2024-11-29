import { NewModelWhereInput } from "./NewModelWhereInput";
import { NewModelOrderByInput } from "./NewModelOrderByInput";

export type NewModelFindManyArgs = {
  where?: NewModelWhereInput;
  orderBy?: Array<NewModelOrderByInput>;
  skip?: number;
  take?: number;
};
