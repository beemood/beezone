import { PropertyOptions } from '@beezone/types';
import { ApiPropertyOptions } from '@nestjs/swagger';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface.js';
export function toApiPropertyOptions(
  options: PropertyOptions
): ApiPropertyOptions {
  const { type, example, examples } = options;

  const common: ApiPropertyOptions = {
    required: options.required == true,
    nullable: options.required != true,
    examples,
    example,
  };
  switch (type) {
    case 'string': {
      return {
        ...common,
        type: 'string',
        example: example ?? 'example',
      };
    }
    case 'number': {
      return {
        ...common,
        type: 'number',
        example: example ?? 1,
        examples: examples ?? [1],
      };
    }
    case 'boolean': {
      return {
        ...common,
        type: 'boolean',
        example: example ?? true,
        examples: examples ?? [true, false],
      };
    }
    case 'object': {
      return {
        ...common,
        type: options.target(),
        example: example ?? {},
        examples: examples ?? [{}],
      };
    }
    case 'integer': {
      return {
        ...common,
        type: 'integer',
        example: example ?? 1,
        examples: examples ?? [1],
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
        example: example ?? [],
        examples: examples ?? [],
      };
    }
  }
}
