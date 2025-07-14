import { Post, Type } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { getNames } from '../utils/get-names.js';
import { WriteManyOperation } from '../meta/operation.js';

export function SaveMany(responseType?: () => [Type]): MethodDecorator {
  return (...args) => {
    const { pascalCase } = getNames(args[0].constructor.name);
    Post('many')(...args);
    WriteManyOperation()(...args);

    ApiCreatedResponse({ type: responseType?.() })(...args);
    ApiOperation({ summary: `Save many ${pascalCase}` })(...args);
  };
}
