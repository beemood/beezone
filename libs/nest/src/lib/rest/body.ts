import { Body as __Body, Type } from '@nestjs/common';

export function Body(_dtoClass?: () => Type): ParameterDecorator {
  return (...args) => {
    __Body()(...args);
  };
}
