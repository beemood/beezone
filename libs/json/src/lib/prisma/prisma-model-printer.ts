import { isDefinedOrThrow, names, trim } from '@beezone/is';
import type { ModelSchema, Names, ToString } from '@beezone/types';
import { PrismaModelPropertyPrinter } from './prisma-model-property-printer.js';
import { PrismaModelRelationPrinter } from './prisma-model-relation-printer.js';

export class PrismaModelPrinter implements ToString {
  constructor(protected readonly options: ModelSchema) {}

  protected modelName() {
    return names(isDefinedOrThrow(this.options.name)).pascalCase;
  }

  protected properties() {
    if (!this.options.properties) {
      return '';
    }
    const entries = Object.entries(this.options.properties);

    return entries
      .map(([key, value]) => {
        return new PrismaModelPropertyPrinter({
          ...value,
          name: key as Names,
        }).toString();
      })
      .join('\n');
  }

  protected relations() {
    if (this.options.relations) {
      const entries = Object.entries(this.options.relations);

      return entries
        .map(([key, value]) => {
          return new PrismaModelRelationPrinter({
            ...value,
            name: key as Names,
          });
        })
        .join('\n');
    }

    return '';
  }

  protected modelDefinition() {
    return `model ${this.modelName()}`;
  }

  protected uniques() {
    if (this.options.unique) {
      return `@@uniques([${this.options.unique.join(',')}])`;
    }
    return '';
  }

  toString() {
    const result = [
      this.modelDefinition(),
      '{',
      this.properties(),
      this.relations(),
      this.uniques(),
      '}',
    ]
      .filter((e) => e.length > 0)
      .join('\n');

    return trim(result);
  }
}
