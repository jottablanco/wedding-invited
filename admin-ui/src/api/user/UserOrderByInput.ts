import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  companion?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  selectedMenuId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
