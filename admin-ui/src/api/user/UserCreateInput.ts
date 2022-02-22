import { SelectedMenuWhereUniqueInput } from "../selectedMenu/SelectedMenuWhereUniqueInput";

export type UserCreateInput = {
  companion?: boolean | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  selectedMenu?: SelectedMenuWhereUniqueInput | null;
  username: string;
};
