export type PropertyType =
  | "string"
  | "number"
  | "integer"
  | "boolean"
  | "date"
  | "object"
  | "array";

export type CommonPropertyOptions = {
  type: PropertyType;
  description?: string;
  hash?: boolean;
  encript?: boolean;
  readOnly?: boolean;
  writeOnly?: boolean;

  notEqualToProperty?: string;
  dependsOnProperty?: string;
  notWithProperty?: string;
};

export type DefaultValueOptions<T> = {
  defaultValue?: T;
  example?: T;
};
