import { NewModel as TNewModel } from "../api/newModel/NewModel";

export const NEWMODEL_TITLE_FIELD = "newFieldandOneWasRemoved";

export const NewModelTitle = (record: TNewModel): string => {
  return record.newFieldandOneWasRemoved?.toString() || String(record.id);
};
