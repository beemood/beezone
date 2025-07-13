import { Controller } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Resource } from '../meta/resource.js';
import { getNames } from '../utils/get-names.js';

export function ResourceController(): ClassDecorator {
  return (...args) => {
    const { kebabCase, pascalCase } = getNames(args[0].name);
    Controller(kebabCase)(...args);
    ApiBearerAuth()(...args);
    Resource(pascalCase)(...args);
  };
}
