import { SelectedMenu } from "../selectedMenu/SelectedMenu";

export type User = {
  companion: boolean | null;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  selectedMenu?: SelectedMenu | null;
  updatedAt: Date;
  username: string;
};
