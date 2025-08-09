import { isDefinedOrThrow, names } from '@beezone/is';
import type { ModelSchema, Names, ToString } from '@beezone/types';
import { PrismaModelPropertyPrinter } from './prisma-model-property-printer.js';

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
    return [
      this.modelDefinition(),
      ' { ',
      this.properties(),
      this.relations(),
      this.uniques(),
      ' } ',
    ].join('\n');
  }
}
