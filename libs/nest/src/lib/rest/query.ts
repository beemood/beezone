import type { Type } from '@nestjs/common';
import { Query as __Query } from '@nestjs/common';

export function Query(_dtoClass?: () => Type): ParameterDecorator {
  return (...args) => {
    __Query()(...args);
  };
}
