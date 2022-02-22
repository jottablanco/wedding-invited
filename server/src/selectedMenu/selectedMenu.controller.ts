import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SelectedMenuService } from "./selectedMenu.service";
import { SelectedMenuControllerBase } from "./base/selectedMenu.controller.base";

@swagger.ApiTags("selected-menus")
@common.Controller("selected-menus")
export class SelectedMenuController extends SelectedMenuControllerBase {
  constructor(
    protected readonly service: SelectedMenuService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
