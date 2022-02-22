import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SelectedMenuWhereInput = {
  id?: StringFilter;
  notes?: StringNullableFilter;
  option1?: StringNullableFilter;
  option2?: StringNullableFilter;
};
