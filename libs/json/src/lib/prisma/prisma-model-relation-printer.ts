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
  protected relationOptions() {
    switch (this.options.type) {
      case 'many-to-many':
      case 'one-to-many': {
        return '';
      }
      case 'one-to-one':
      case 'many-to-one': {
        return `@relation(fields: [${
          this.options.fields?.join(',') ?? this.targetName() + 'Id'
        }], references: [${
          this.options.references?.join(',') ?? 'id'
        }], onDelete: ${this.options.onDelete ?? 'SetNull'}, onUpdate: ${
          this.options.onUpdate ?? 'NoAction'
        })
        ${this.targetName()}Id Int 
        `;
      }
      case 'group': {
        return `@relation(fields: [${this.targetName()}Id], references: [id], onDelete: SetNull)
        ${this.targetName()}Id Int 
        `;
      }
      case 'owner': {
        return `@relation(fields: [${this.targetName()}Id], references: [${this.targetName()}Id], onDelete: Cascade, onUpdate: Cascade)
        ${this.targetName()}Id String 
        `;
      }
    }
  }

  toString(): string {
    return `${this.propertyName()} ${this.relationType()}${this.isRequired()}`;
  }
}
