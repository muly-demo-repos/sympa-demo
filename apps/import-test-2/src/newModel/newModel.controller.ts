import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewModelService } from "./newModel.service";
import { NewModelControllerBase } from "./base/newModel.controller.base";

@swagger.ApiTags("newModels")
@common.Controller("newModels")
export class NewModelController extends NewModelControllerBase {
  constructor(protected readonly service: NewModelService) {
    super(service);
  }
}
