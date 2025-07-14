import type { ClassType } from '@beezone/types';
import { Property } from '../property/property.js';

export function SomeObjectProperty(target: () => ClassType): PropertyDecorator {
  return (...args) => {
    Property({ type: 'object', target, transform: true })(...args);
  };
}
