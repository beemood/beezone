import { inferResourceName, names } from '@beezone/is';
import { ClassType } from '@beezone/types';
import { Get } from '@nestjs/common';
import {
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiOperation,
} from '@nestjs/swagger';

export function FindAll(responseType?: () => ClassType): MethodDecorator {
  return (...args) => {
    let [, methodName] = args;

    const resourceName = names(
      inferResourceName(args[0].constructor.name)
    ).kebabCase;
    methodName = names(methodName.toString()).sentenceCase;

    ApiOperation({ summary: `${methodName} ${resourceName}` })(...args);
    ApiOkResponse({ type: responseType?.(), description: 'success' })(...args);
    ApiNotFoundResponse({ description: `` })(...args);
    Get()(...args);
  };
}
