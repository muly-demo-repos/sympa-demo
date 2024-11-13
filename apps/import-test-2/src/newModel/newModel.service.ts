import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NewModelServiceBase } from "./base/newModel.service.base";

@Injectable()
export class NewModelService extends NewModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
