import { Get, Type } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { getNames } from '../utils/get-names.js';
import { ReadManyOperation } from '../meta/operation.js';

export function FindMany(responseType?: () => [Type]): MethodDecorator {
  return (...args) => {
    const { pascalCase } = getNames(args[0].constructor.name);
    Get()(...args);
    ReadManyOperation()(...args);

    ApiOkResponse({ type: responseType?.() })(...args);
    ApiOperation({ summary: `Find many ${pascalCase}` })(...args);
  };
}
