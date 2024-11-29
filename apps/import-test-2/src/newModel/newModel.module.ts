import { Module } from "@nestjs/common";
import { NewModelModuleBase } from "./base/newModel.module.base";
import { NewModelService } from "./newModel.service";
import { NewModelController } from "./newModel.controller";
import { NewModelResolver } from "./newModel.resolver";

@Module({
  imports: [NewModelModuleBase],
  controllers: [NewModelController],
  providers: [NewModelService, NewModelResolver],
  exports: [NewModelService],
})
export class NewModelModule {}
