import { inferResoucePath } from '@beezone/is';
import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

export function ResourceController(path?: string): ClassDecorator {
  return (...args) => {
    const controllerName = args[0].name;
    path = path ?? inferResoucePath(controllerName);
    Controller(path)(...args);
    ApiBearerAuth()(...args);
    ApiTags(controllerName)(...args);
  };
}
