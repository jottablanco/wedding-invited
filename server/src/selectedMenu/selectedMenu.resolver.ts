import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SelectedMenuResolverBase } from "./base/selectedMenu.resolver.base";
import { SelectedMenu } from "./base/SelectedMenu";
import { SelectedMenuService } from "./selectedMenu.service";

@graphql.Resolver(() => SelectedMenu)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SelectedMenuResolver extends SelectedMenuResolverBase {
  constructor(
    protected readonly service: SelectedMenuService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
