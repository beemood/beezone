import { PropertyOptions } from '@beezone/types';
import { ApiPropertyOptions } from '@nestjs/swagger';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface.js';

export function toApiPropertyOptions(
  options: PropertyOptions
): ApiPropertyOptions {
  const { type } = options;

  const common: ApiPropertyOptions = {
    required: options.required == true,
    nullable: options.required != true,
    description: options.description,
    default: options.defaultValue,
  };

  switch (type) {
    case 'string': {
      return {
        ...common,
        type: 'string',
      };
    }
    case 'number': {
      return {
        ...common,
        type: 'number',
      };
    }
    case 'boolean': {
      return {
        ...common,
        type: 'boolean',
      };
    }
    case 'object': {
      return {
        ...common,
        type: options.target(),
      };
    }
    case 'integer': {
      return {
        ...common,
        type: 'integer',
      };
    }
    case 'array': {
      if (options.items.type === 'object') {
        return {
          ...common,
          type: options.items.target(),
          isArray: true,
        };
      }
      return {
        ...common,
        type: 'array',
        items: toApiPropertyOptions(options.items) as SchemaObject,
      };
    }
  }
}
