import * as graphql from "@nestjs/graphql";
import { NewModelResolverBase } from "./base/newModel.resolver.base";
import { NewModel } from "./base/NewModel";
import { NewModelService } from "./newModel.service";

@graphql.Resolver(() => NewModel)
export class NewModelResolver extends NewModelResolverBase {
  constructor(protected readonly service: NewModelService) {
    super(service);
  }
}
