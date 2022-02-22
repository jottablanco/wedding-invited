import { SelectedMenu as TSelectedMenu } from "../api/selectedMenu/SelectedMenu";

export const SELECTEDMENU_TITLE_FIELD = "notes";

export const SelectedMenuTitle = (record: TSelectedMenu): string => {
  return record.notes || record.id;
};
