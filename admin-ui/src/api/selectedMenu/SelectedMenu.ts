import { User } from "../user/User";

export type SelectedMenu = {
  createdAt: Date;
  id: string;
  notes: string | null;
  option1: string | null;
  option2: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
