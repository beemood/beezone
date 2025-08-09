import { inferResourceName, names } from '@beezone/is';
import { ClassType } from '@beezone/types';
import { Post as __Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

export function Post(responseType?: () => ClassType): MethodDecorator {
  return (...args) => {
    let [, methodName] = args;

    const resourceName = names(
      inferResourceName(args[0].constructor.name)
    ).kebabCase;
    methodName = names(methodName.toString()).sentenceCase;

    ApiOperation({ summary: `${methodName} ${resourceName}` })(...args);
    ApiCreatedResponse({ type: responseType?.(), description: 'success' })(
      ...args
    );
    ApiUnprocessableEntityResponse({ description: 'error' })(...args);

    __Post()(...args);
  };
}
