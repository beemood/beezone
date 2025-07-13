import { Controller } from '@nestjs/common';
import { Resource } from '../meta/resource.js';
import { getNames } from '../utils/get-names.js';
import { Public } from '../meta/public.js';

export function PublicResourceController(): ClassDecorator {
  return (...args) => {
    const { kebabCase, pascalCase } = getNames(args[0].name);
    Controller(kebabCase)(...args);
    Public()(...args);
    Resource(pascalCase)(...args);
  };
}
