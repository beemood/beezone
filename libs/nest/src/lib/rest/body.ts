import type { Type } from '@nestjs/common';
import { Body as __Body } from '@nestjs/common';

export function Body(_dtoClass?: () => Type): ParameterDecorator {
  return (...args) => {
    __Body()(...args);
  };
}
