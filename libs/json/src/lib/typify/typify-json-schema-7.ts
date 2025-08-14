import { isDefinedOrThrow, names } from '@beezone/is';
import type { JSONSchema7Object } from '@beezone/types';
import { modelName } from '../common/model-name.js';
import { readJsonSchema7File } from '../common/read-json-schema-7-file.js';

function typifyJsonSchema7Options(schema: JSONSchema7Object): string {
  if (!schema) throw new Error(`schema is required`);

  if (schema.type == 'boolean') {
    return 'boolean';
  } else if (schema.type == 'string') {
    return 'string';
  } else if (schema.type == 'integer' || schema.type === 'number') {
    return 'number';
  } else if (schema.type === 'array') {
    if (!schema.items) {
      return 'any[]';
    }
    return `${typifyJsonSchema7Options(schema.items as JSONSchema7Object)}[]`;
  }

  if (schema.$ref) {
    return isDefinedOrThrow(schema.$ref.split('/').pop());
  }

  if (schema.allOf) {
    const allOfType = schema.allOf
      .map((e) => {
        return typifyJsonSchema7Options(e as JSONSchema7Object);
      })
      .join(' & ');

    return `( ${allOfType} )`;
  }

  if (schema.oneOf) {
    const oneOfType = schema.oneOf
      .map((e) => {
        return typifyJsonSchema7Options(e as JSONSchema7Object);
      })
      .join(' | ');

    return `( ${oneOfType})`;
  }

  if (schema.enum) {
    return schema.enum
      .map((e) => {
        return typeof e === 'string' ? `'${e}'` : e;
      })
      .join(' | ');
  }

  if (schema.const) {
    return typeof schema.const === 'string'
      ? `'${schema.const}'`
      : `${schema.const}`;
  }

  if (schema.properties) {
    const entries = Object.entries(schema.properties);

    const properties = entries
      .map(([propertyName, value]) => {
        const isRequired = schema.required?.includes(propertyName) ? '' : '?';
        const propertyType = typifyJsonSchema7Options(
          value as JSONSchema7Object
        );
        return `${propertyName}${isRequired}:${propertyType};`;
      })
      .join('\n');

    return `{${properties}}`;
  }

  if (schema.patternProperties) {
    const propertyName = schema.propertyNames
      ? typifyJsonSchema7Options(schema.propertyNames as JSONSchema7Object)
      : 'string';

    return `Partial<Record<${propertyName}, ${typifyJsonSchema7Options(
      Object.values(schema.patternProperties)[0] as JSONSchema7Object
    )}>>`;
  }

  return '';
}

function printType(typeName: string, schema: JSONSchema7Object): string {
  return `export type ${typeName} = ${typifyJsonSchema7Options(schema)}`;
}

export async function typifyJsonSchema7(filepath: string): Promise<string> {
  const schema = await readJsonSchema7File(filepath);
  const types: string[] = [];

  {
    const typeName = names(modelName(filepath)).pascalCase;
    types.push(printType(typeName, schema));
  }
  {
    const definitionEntries = Object.entries(schema.definitions ?? {});
    for (const [key, value] of definitionEntries) {
      const typeName = names(key).pascalCase;

      types.push(printType(typeName, value));
    }
  }
  return types.join('\n');
}
