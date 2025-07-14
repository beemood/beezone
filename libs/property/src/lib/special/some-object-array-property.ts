import type { ClassType } from '@beezone/types';
import { Property } from '../property/property.js';

export function SomeObjectArrayProperty(
  target: () => ClassType
): PropertyDecorator {
  return (...args) => {
    Property({
      type: 'array',
      items: { type: 'object', target },
      transform: true,
    })(...args);
  };
}
