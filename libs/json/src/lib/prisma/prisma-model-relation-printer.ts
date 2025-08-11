import { isDefinedOrThrow, names } from '@beezone/is';
import type { RelationPropertyOptions, ToString } from '@beezone/types';

export class PrismaModelRelationPrinter implements ToString {
  constructor(protected readonly options: RelationPropertyOptions) {}

  protected propertyName() {
    return names(isDefinedOrThrow(this.options.name)).camelCase;
  }

  protected targetName() {
    return names(isDefinedOrThrow(this.options.target)).pascalCase;
  }

  protected isRequired() {
    switch (this.options.type) {
      case 'many-to-many':
      case 'one-to-many': {
        return '';
      }
      case 'one-to-one':
      case 'many-to-one':
      case 'group':
      case 'owner': {
        if (this.options.required != true) {
          return '?';
        }
        return '';
      }
    }
  }

  protected relationType() {
    switch (this.options.type) {
      case 'one-to-many':
      case 'many-to-many': {
        return `${this.targetName()}[]`;
      }
      case 'owner':
      case 'group':
      case 'many-to-one':
      case 'one-to-one': {
        return `${this.targetName()}`;
      }
    }
  }

  protected onDelete() {
    if (this.options.onDelete) {
      return this.options.onDelete;
    }
    switch (this.options.type) {
      case 'many-to-many':
      case 'one-to-many':
      case 'one-to-one':
      case 'many-to-one':
      case 'group': {
        return 'SetNull';
      }
      case 'owner': {
        return 'Cascade';
      }
    }
  }

  protected onUpdate() {
    if (this.options.onDelete) {
      return this.options.onDelete;
    }
    switch (this.options.type) {
      case 'many-to-many':
      case 'one-to-many':
      case 'one-to-one':
      case 'many-to-one':
      case 'group': {
        return 'SetNull';
      }
      case 'owner': {
        return 'Cascade';
      }
    }
  }
  protected fieldIds() {
    switch (this.options.type) {
      case 'many-to-many':
      case 'one-to-many':
        return '';
      case 'many-to-one':
      case 'group':
      case 'owner':
      case 'one-to-one': {
        if (this.options.fields) {
          return this.options.fields.join(',');
        }
        return names(this.targetName()).camelCase + 'Id';
      }
    }
  }

  protected fieldIdDefinitions() {
    switch (this.options.type) {
      case 'many-to-many':
      case 'one-to-many':
        return '';
      case 'many-to-one':
      case 'group':
      case 'one-to-one': {
        if (this.options.fields) {
          return this.options.fields
            .map((e) => {
              return `${e} Int`;
            })
            .join('\n');
        }
        return names(this.targetName()).camelCase + 'Id' + ' Int';
      }
      case 'owner': {
        if (this.options.fields) {
          return this.options.fields
            .map((e) => {
              return `${e} String`;
            })
            .join('\n');
        }
        return names(this.targetName()).camelCase + 'Id' + ' String';
      }
    }
  }

  protected referenceId() {
    switch (this.options.type) {
      case 'many-to-many':
      case 'one-to-many': {
        return '';
      }
      case 'one-to-one':
      case 'group':
      case 'many-to-one': {
        if (this.options.references) {
          return this.options.references.join(', ');
        }
        return 'id';
      }
      case 'owner': {
        if (this.options.references) {
          return this.options.references.join(',');
        }
        return names(this.propertyName()).camelCase + 'Id';
      }
    }
  }
  protected relationOptions() {
    switch (this.options.type) {
      case 'many-to-many':
      case 'one-to-many': {
        return '';
      }
      case 'one-to-one':
      case 'many-to-one':
      case 'group':
      case 'owner': {
        return [
          `@relation(fields: [${this.fieldIds()}], references: [${this.referenceId()}], onDelete: ${this.onDelete()}, onUpdate: ${this.onUpdate()})`,
          `${this.fieldIdDefinitions()}`,
        ].join('\n\b');
      }
    }
  }

  toString(): string {
    return `${this.propertyName()} ${this.relationType()} ${this.relationOptions()}`.trim();
  }
}
