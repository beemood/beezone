export type PropertyType =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'date'
  | 'object'
  | 'array';

export type CommonPropertyOptions = {
  type: PropertyType;
  description?: string;
  hash?: boolean;
  encrypt?: boolean;
  readOnly?: boolean;
  writeOnly?: boolean;

  notEqualToProperties?: string[];
  dependsOnProperties?: string[];
  notWithProperties?: string[];

  transform?: boolean;
};

export type DefaultValueOptions<T> = {
  defaultValue?: T;
  example?: T;
};
