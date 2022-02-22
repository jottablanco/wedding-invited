import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SelectedMenuServiceBase } from "./base/selectedMenu.service.base";

@Injectable()
export class SelectedMenuService extends SelectedMenuServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
