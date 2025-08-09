import { inferResourceName, names } from '@beezone/is';
import { ClassType } from '@beezone/types';
import { Put as __Put } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

export function Put(responseType?: () => ClassType): MethodDecorator {
  return (...args) => {
    let [, methodName] = args;

    const resourceName = names(
      inferResourceName(args[0].constructor.name)
    ).kebabCase;
    methodName = names(methodName.toString()).sentenceCase;

    ApiOperation({ summary: `${methodName} ${resourceName}` })(...args);
    ApiOkResponse({ type: responseType?.(), description: 'success' })(...args);
    ApiUnprocessableEntityResponse({ description: 'error' })(...args);
    ApiNotFoundResponse({ description: 'error' })(...args);

    __Put(':id')(...args);
  };
}
