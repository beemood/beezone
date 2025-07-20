import type { PropertyOptions } from '@beezone/types';
import { Validation } from '@beezone/validation';
import { ApiProperty } from '@nestjs/swagger';
import { __toApiPropertyOptions } from '../utils/to-api-property-options.js';

export function Property(options: PropertyOptions): PropertyDecorator {
  return (...args) => {
    Validation(options)(...args);
    ApiProperty(__toApiPropertyOptions(options))(...args);
  };
}
