import { Post, Type } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { getNames } from '../utils/get-names.js';
import { WriteOneOperation } from '../meta/operation.js';

export function SaveOne(responseType?: () => Type): MethodDecorator {
  return (...args) => {
    const { pascalCase } = getNames(args[0].constructor.name);
    Post()(...args);
    WriteOneOperation()(...args);

    ApiCreatedResponse({ type: responseType?.() })(...args);
    ApiOperation({ summary: `Save a ${pascalCase}` })(...args);
  };
}
