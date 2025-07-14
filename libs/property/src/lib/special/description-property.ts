import { Property } from '../property/property.js';

export function DescriptionProperty(): PropertyDecorator {
  return (...args) => {
    Property({
      type: 'string',
      maxLength: 1000,
      trim: true,
      defaultValue: 'Some description',
    })(...args);
  };
}
