import { UndefinedError } from '@beezone/errors';
import type { Names as NameVariants } from '@beezone/is';
import { names } from '@beezone/is';
import type { ModelSchema, Names, PropertyOptions } from '@beezone/types';
import { PrismaModelProperty } from './prisma-model-property.js';
import { PrismaModelRelation } from './prisma-model-relation.js';

export class PrismaModel {
  private readonly NAMES: NameVariants;

  constructor(protected readonly model: ModelSchema) {
    if (this.model.name == undefined) {
      throw new UndefinedError(`model.name`);
    }
    this.NAMES = names(this.model.name);
  }

  protected properties() {
    if (this.model.properties == undefined) {
      return '';
    }

    const entries = Object.entries(this.model.properties);

    return entries
      .map(([key, value]) => {
        return { name: key, ...value } as PropertyOptions;
      })
      .map((e) => {
        return new PrismaModelProperty(e).toString();
      })
      .map((e) => {
        return e.padStart(e.length + 2, ' ');
      })
      .join('\n');
  }

  protected relations() {
    if (this.model.relations == undefined) {
      return '';
    }

    const entries = Object.entries(this.model.relations);

    return entries
      .map(([key, value]) => {
        return new PrismaModelRelation({
          name: key as Names,
          ...value,
        }).toString();
      })
      .join('\n');
  }

  protected uniques() {
    if (this.model.unique) {
      return `@@unique([${this.model.unique
        .map((e) => names(e).camelCase)
        .join(' ')}])`;
    }

    return '';
  }
  toString() {
    return [
      `model ${this.NAMES.pascalCase} {`,
      [this.properties(), this.relations()].filter((e) => e).join('  \n'),
      this.uniques(),
      `}`,
    ]
      .filter((e) => e)
      .join('\n');
  }
}
