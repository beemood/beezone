import { Property } from '../property/property.js';

export function NameProperty(): PropertyDecorator {
  return (...args) => {
    Property({
      type: 'string',
      minLength: 3,
      maxLength: 400,
      required: true,
      unique: true,
      trim: true,
      defaultValue: 'name',
    })(...args);
  };
}
