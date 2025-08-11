import { InvalidParameterError } from '@beezone/errors';
import { isDefinedOrThrow, names } from '@beezone/is';
import type { PropertyOptions, ToString } from '@beezone/types';

export class PrismaModelPropertyPrinter implements ToString {
  constructor(protected readonly options: PropertyOptions) {}

  protected isRequired() {
    if (this.options.type === 'array') {
      return '';
    }

    if (this.options.type === 'integer') {
      if (this.options.generated == 'id') {
        return '';
      }
    }
    if (this.options.type === 'string') {
      if (this.options.generated === 'uuid') {
        return '';
      }
    }

    if (this.options.type === 'date') {
      if (this.options.generated === 'created-at') {
        return '';
      }
    }

    return this.options.required == true ? '' : '?';
  }

  protected isUnique() {
    if (this.options.unique == true) {
      return `@unique()`;
    }
    return '';
  }
  protected isGenerated() {
    switch (this.options.type) {
      case 'string': {
        switch (this.options.generated) {
          case 'uuid': {
            return '@default(uuid())';
          }
        }
        return '';
      }
      case 'integer':
      case 'number': {
        switch (this.options.generated) {
          case 'increment': {
            return `@default(autoincrement())`;
          }

          case 'id': {
            return '@id @default(autoincrement())';
          }
        }
        return '';
      }

      case 'date': {
        switch (this.options.generated) {
          case 'created-at': {
            return `@default(now())`;
          }
          case 'updated-at': {
            return '@updatedAt';
          }
        }

        return '';
      }
    }

    return '';
  }

  protected propertyType(options?: PropertyOptions): string {
    const definedOptions = options ?? this.options;

    switch (definedOptions.type) {
      case 'string':
        return 'String';
      case 'number':
        return 'Decimal';
      case 'boolean':
        return 'Boolean';
      case 'object':
        return 'Json';
      case 'integer':
        return 'Int';
      case 'date':
        return 'DateTime';
      case 'array': {
        return `${this.propertyType(isDefinedOrThrow(definedOptions.items))}[]`;
      }
    }
    throw new InvalidParameterError(
      `property options is invalid\n${JSON.stringify(options, undefined, 2)}`
    );
  }

  protected propertyName() {
    return names(isDefinedOrThrow(this.options.name)).camelCase;
  }

  toString(): string {
    return `${this.propertyName()} ${this.propertyType()}${this.isRequired()} ${this.isGenerated()}`.trim();
  }
}
