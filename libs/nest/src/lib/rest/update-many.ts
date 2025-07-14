import type { Type } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { getNames } from '../utils/get-names.js';
import { UdpateManyOperation } from '../meta/operation.js';

export function UpdateMany(responseType?: () => [Type]): MethodDecorator {
  return (...args) => {
    const { pascalCase } = getNames(args[0].constructor.name);
    Put()(...args);
    UdpateManyOperation()(...args);

    ApiOkResponse({ type: responseType?.() })(...args);
    ApiOperation({ summary: `Update many ${pascalCase}` })(...args);
  };
}
