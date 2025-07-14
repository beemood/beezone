import { Query as __Query, Type } from '@nestjs/common';

export function Query(_dtoClass?: () => Type): ParameterDecorator {
  return (...args) => {
    __Query()(...args);
  };
}
