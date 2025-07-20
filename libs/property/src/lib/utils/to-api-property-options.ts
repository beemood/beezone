import type { PropertyOptions } from '@beezone/types';
import type { ApiPropertyOptions } from '@nestjs/swagger';

export function __toApiPropertyOptions(
  options: PropertyOptions
): ApiPropertyOptions {
  const common: ApiPropertyOptions = {
    required: options.required == true,
    nullable: options.required != true,
  };
  switch (options.type) {
    case 'string': {
      return { ...common, type: 'string' };
    }
    case 'number': {
      return { ...common, type: 'number' };
    }
    case 'boolean': {
      return { ...common, type: 'boolean' };
    }
    case 'object': {
      return { ...common, type: options.target() };
    }
    case 'integer': {
      return { ...common, type: 'integer' };
    }
    case 'array': {
      if (options.items.type === 'object') {
        return {
          ...common,
          type: options.items.target(),
          isArray: true,
        };
      }
      return { ...common, type: 'array', items: { type: options.items.type } };
    }
  }
}
