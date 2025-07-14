import type { Type } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { getNames } from '../utils/get-names.js';
import { UdpateOneOperation } from '../meta/operation.js';
import { ID_PRAM_KEY } from './pram-keys.js';

export function UpdateOneById(responseType?: () => Type): MethodDecorator {
  return (...args) => {
    const { pascalCase } = getNames(args[0].constructor.name);
    Put(ID_PRAM_KEY)(...args);
    UdpateOneOperation()(...args);

    ApiOkResponse({ type: responseType?.() })(...args);
    ApiOperation({ summary: `Update a ${pascalCase} by id` })(...args);
  };
}
