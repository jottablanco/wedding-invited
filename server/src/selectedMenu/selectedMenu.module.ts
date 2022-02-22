import { Module } from "@nestjs/common";
import { SelectedMenuModuleBase } from "./base/selectedMenu.module.base";
import { SelectedMenuService } from "./selectedMenu.service";
import { SelectedMenuController } from "./selectedMenu.controller";
import { SelectedMenuResolver } from "./selectedMenu.resolver";

@Module({
  imports: [SelectedMenuModuleBase],
  controllers: [SelectedMenuController],
  providers: [SelectedMenuService, SelectedMenuResolver],
  exports: [SelectedMenuService],
})
export class SelectedMenuModule {}
