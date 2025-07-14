import type { Type } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { getNames } from '../utils/get-names.js';
import { ReadOneOperation } from '../meta/operation.js';
import { ID_PRAM_KEY } from './pram-keys.js';

export function FindOneById(responseType?: () => Type): MethodDecorator {
  return (...args) => {
    const { pascalCase } = getNames(args[0].constructor.name);
    Get(ID_PRAM_KEY)(...args);
    ReadOneOperation()(...args);

    ApiOkResponse({ type: responseType?.() })(...args);
    ApiOperation({ summary: `Find a ${pascalCase} by id` })(...args);
  };
}
