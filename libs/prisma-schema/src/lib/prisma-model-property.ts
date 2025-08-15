import { UndefinedError } from '@beezone/errors';
import { names, type Names as NameVariants } from '@beezone/is';
import type { PropertyOptions } from '@beezone/types';

export class PrismaModelProperty {
  private readonly NAMES: NameVariants;
  constructor(protected readonly propertyOptions: PropertyOptions) {
    if (this.propertyOptions.name == undefined) {
      throw new UndefinedError(`propertyOptions.name`);
    }

    if (this.propertyOptions.type == undefined) {
      throw new UndefinedError(`propertyOptions.type`);
    }
    this.NAMES = names(this.propertyOptions.name);
  }

  protected isGenerated() {
    if (this.propertyOptions == undefined) {
      throw new UndefinedError(`propertyOptions.type`);
    }
    switch (this.propertyOptions.type) {
      case 'string': {
        if (this.propertyOptions.generated === 'uuid') {
          return '@default(uuid())';
        }
        return '';
      }
      case 'number':
      case 'integer': {
        if (this.propertyOptions.generated === 'id') {
          return `@id @default(autoincrement())`;
        } else if (this.propertyOptions.generated === 'increment') {
          return '@default(autoincrement())';
        }
        return '';
      }
      case 'date': {
        if (this.propertyOptions.generated === 'created-at') {
          return '@default(now())';
        } else if (this.propertyOptions.generated === 'deleted-at') {
          return '';
        } else if (this.propertyOptions.generated === 'updated-at') {
          return '@updatedAt';
        }

        return '';
      }
      case 'boolean':
      case 'object':
      case 'array': {
        return '';
      }
    }

    return '';
  }

  protected isRequired() {
    if (this.propertyOptions.type == undefined) {
      throw new UndefinedError(`propertyOptions.type`);
    }

    switch (this.propertyOptions.type) {
      case 'string': {
        if (this.propertyOptions.generated === 'uuid') {
          return '';
        }
        break;
      }
      case 'number': {
        if (this.propertyOptions.generated === 'id') {
          return '';
        }
        break;
      }
      case 'integer': {
        if (this.propertyOptions.generated === 'id') {
          return '';
        }
        break;
      }
      case 'date': {
        if (this.propertyOptions.generated === 'created-at') {
          return '';
        }

        if (this.propertyOptions.generated === 'updated-at') {
          return '?';
        }
        if (this.propertyOptions.generated === 'deleted-at') {
          return '?';
        }
        break;
      }
      case 'boolean':
      case 'object':
      case 'array': {
        break;
      }
    }

    if (
      this.propertyOptions.type === 'array' ||
      this.propertyOptions.required == true
    ) {
      return '';
    }
    return '?';
  }

  protected propertyType(options?: PropertyOptions): string {
    options = options ?? this.propertyOptions;
    if (options.type == undefined) {
      throw new UndefinedError('property.type');
    }
    switch (options.type) {
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
        if (options.items == undefined) {
          throw new UndefinedError('options.items');
        }
        return `${this.propertyType(options.items)}[]`;
      }
    }
  }

  toString() {
    if (this.propertyOptions.name == undefined) {
      throw new UndefinedError(`property.name`);
    }
    return [
      `${this.NAMES.camelCase}`,
      [this.propertyType(), this.isRequired()].filter((e) => e).join(''),
      this.isGenerated(),
    ]
      .filter((e) => e)
      .join(' ');
  }
}
