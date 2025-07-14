import type { Type } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { getNames } from '../utils/get-names.js';
import { ID_PRAM_KEY } from './pram-keys.js';
import { DeleteOneOperation } from '../meta/operation.js';

export function DeleteOneById(responseType?: () => Type): MethodDecorator {
  return (...args) => {
    const { pascalCase } = getNames(args[0].constructor.name);
    Delete(ID_PRAM_KEY)(...args);
    DeleteOneOperation()(...args);

    ApiOkResponse({ type: responseType?.() })(...args);
    ApiOperation({ summary: `Delete a ${pascalCase} by id` })(...args);
  };
}
