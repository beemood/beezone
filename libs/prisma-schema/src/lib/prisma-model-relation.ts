import { UndefinedError } from '@beezone/errors';
import type { Names as NameVariants } from '@beezone/is';
import { names, pluralize } from '@beezone/is';
import type { RelationPropertyOptions } from '@beezone/types';

export class PrismaModelRelation {
  private readonly NAMES: NameVariants;
  private readonly TARGET_NAMES: NameVariants;

  constructor(protected readonly relationOptions: RelationPropertyOptions) {
    if (this.relationOptions.type == undefined) {
      throw new UndefinedError('relationOptions.type');
    }
    if (this.relationOptions.name == undefined) {
      throw new UndefinedError('relationOptions.name');
    }
    if (this.relationOptions.target == undefined) {
      throw new UndefinedError('relationOptions.target');
    }
    this.NAMES = names(this.relationOptions.name);
    this.TARGET_NAMES = names(this.relationOptions.target);
  }

  protected fields() {
    if (this.relationOptions.fields) {
      return this.relationOptions.fields.join(', ');
    }
    return `${this.TARGET_NAMES.camelCase}Id`;
  }

  protected references() {
    if (this.relationOptions.references) {
      return this.relationOptions.references.join(', ');
    }

    switch (this.relationOptions.type) {
      case 'many-to-many':
      case 'one-to-many':
        return '';
      case 'one-to-one':
      case 'many-to-one':
        return `id`;
      case 'group':
        return 'id';
      case 'owner': {
        return `${this.TARGET_NAMES.camelCase}Id`;
      }
    }
  }

  protected onDelete() {
    switch (this.relationOptions.type) {
      case 'many-to-many':
      case 'one-to-many':
        return '';
      case 'group':
      case 'one-to-one':
      case 'many-to-one': {
        return this.relationOptions.onDelete ?? 'SetNull';
      }
      case 'owner': {
        return this.relationOptions.onDelete ?? 'Cascade';
      }
    }
  }

  protected onUpdate() {
    switch (this.relationOptions.type) {
      case 'many-to-many':
      case 'one-to-many':
        return '';
      case 'group':
      case 'one-to-one':
      case 'many-to-one': {
        return this.relationOptions.onDelete ?? 'NoAction';
      }
      case 'owner': {
        return this.relationOptions.onDelete ?? 'Cascade';
      }
    }
  }
  protected relationConfig() {
    switch (this.relationOptions.type) {
      case 'many-to-many':
      case 'one-to-many':
        return '';
      case 'one-to-one':
      case 'many-to-one':
      case 'group':
      case 'owner': {
        return `@relation(fields: [${this.fields()}], references: [${this.references()}], onDelete: ${this.onDelete()}, onUpdate: ${this.onUpdate()})`;
      }
    }
  }

  protected relationType() {
    if (this.relationOptions.type == undefined) {
      throw new UndefinedError(`relationOptions.type`);
    }
    switch (this.relationOptions.type) {
      case 'many-to-many':
      case 'one-to-many':
        return `${this.TARGET_NAMES.pascalCase}[]`;
      case 'one-to-one':
      case 'many-to-one':
      case 'group':
      case 'owner':
        return `${this.TARGET_NAMES.pascalCase}`;
    }
  }

  protected relationName() {
    switch (this.relationOptions.type) {
      case 'many-to-many':
      case 'one-to-many': {
        return pluralize(this.NAMES.camelCase);
      }
      case 'one-to-one':
      case 'many-to-one':
      case 'group':
      case 'owner': {
        return this.NAMES.camelCase;
      }
    }
  }

  protected isRequired() {
    if (this.relationOptions.type == 'owner') {
      return '';
    }
    if (this.relationOptions.required == true) {
      return '';
    }

    return '?';
  }

  protected relationFields() {
    if (this.relationOptions.fields) {
      return this.relationOptions.fields
        .map((e) => {
          return `${e} String${this.isRequired()}`;
        })
        .join('\n');
    }

    switch (this.relationOptions.type) {
      case 'many-to-many':
      case 'one-to-many':
        return '';
      case 'group':
      case 'one-to-one':
      case 'many-to-one': {
        return `${this.TARGET_NAMES.camelCase}Id Int${this.isRequired()}`;
      }
      case 'owner':
        return `${this.TARGET_NAMES.camelCase}Id String${this.isRequired()}`;
    }
  }

  toString() {
    return [
      [
        this.relationName(),
        [this.relationType(), this.relationConfig()].filter((e) => e).join(' '),
      ]
        .filter((e) => e)
        .join(' '),
      this.relationFields(),
    ]
      .filter((e) => e)
      .join('\n');
  }
}
