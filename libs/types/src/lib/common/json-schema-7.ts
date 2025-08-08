/**
 * A comprehensive set of TypeScript types for JSON Schema Draft 7.
 * These types are designed to be used for defining schemas in a type-safe manner.
 * The structure and property names correspond directly to the official Draft 7 specification.
 */

/**
 * The core type for a JSON Schema, which can be a boolean or a full schema object.
 * A boolean schema is a simple way to represent a schema that always passes (true)
 * or always fails (false).
 */
export type JSONSchema7 = JSONSchema7Object | boolean;

/**
 * Defines a basic JSON data type.
 */
export type JSONSchema7Type =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JSONSchema7Type }
  | JSONSchema7Type[];

/**
 * An array of JSON Schema objects, typically used for 'allOf', 'anyOf', 'oneOf'.
 */
export type JSONSchema7Array = JSONSchema7[];

/**
 * Represents a full JSON Schema object with all possible Draft 7 properties.
 */
export interface JSONSchema7Object {
  // Schema-specific keywords
  $id?: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;

  // Metadata keywords
  title?: string;
  description?: string;
  default?: JSONSchema7Type;
  examples?: JSONSchema7Type[];
  readOnly?: boolean;
  writeOnly?: boolean;

  // Validation keywords for numbers
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;

  // Validation keywords for strings
  maxLength?: number;
  minLength?: number;
  pattern?: string;

  // Validation keywords for arrays
  items?: JSONSchema7 | JSONSchema7Array;
  additionalItems?: JSONSchema7;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  contains?: JSONSchema7;

  // Validation keywords for objects
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  properties?: {
    [key: string]: JSONSchema7;
  };
  patternProperties?: {
    [key: string]: JSONSchema7;
  };
  additionalProperties?: JSONSchema7;
  dependencies?: {
    [key: string]: JSONSchema7 | string[];
  };
  propertyNames?: JSONSchema7;

  // Validation keywords for all types
  const?: JSONSchema7Type;
  enum?: JSONSchema7Type[];

  // Subschema combinators
  allOf?: JSONSchema7Array;
  anyOf?: JSONSchema7Array;
  oneOf?: JSONSchema7Array;
  not?: JSONSchema7;

  // Keywords for conditional subschemas
  if?: JSONSchema7;
  then?: JSONSchema7;
  else?: JSONSchema7;

  // Keywords for type, format, and content
  type?: JSONSchema7TypeName | JSONSchema7TypeName[];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  definitions?: Record<string, JSONSchema7Object>;
}

/**
 * A union of all valid JSON Schema type names.
 */
export type JSONSchema7TypeName =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'object'
  | 'array'
  | 'null';
