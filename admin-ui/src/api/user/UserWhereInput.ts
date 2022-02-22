import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SelectedMenuWhereUniqueInput } from "../selectedMenu/SelectedMenuWhereUniqueInput";

export type UserWhereInput = {
  companion?: BooleanNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  selectedMenu?: SelectedMenuWhereUniqueInput;
  username?: StringFilter;
};
