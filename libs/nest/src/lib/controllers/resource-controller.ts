import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { inferResourcePath } from '../helpers/create-resource-path.js';

export function ResourceController(path?: string): ClassDecorator {
  return (...args) => {
    const controllerName = args[0].name;
    path = path ?? inferResourcePath(controllerName);
    Controller(path)(...args);
    ApiBearerAuth()(...args);
    ApiTags(controllerName)(...args);
  };
}
