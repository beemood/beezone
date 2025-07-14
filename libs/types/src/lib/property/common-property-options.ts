import { PropertyType } from './property-type.js';

export type CommonPropertyOptions = {
  type: PropertyType;
  required?: boolean;
  unique?: boolean;
  exclude?: boolean;
  name?: string;
  description?: string;
  equalToProperty?: string;
  notEqualToProperty?: string;
  transform?: boolean;
};
