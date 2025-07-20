import { Transform } from 'class-transformer';
import { IsString } from 'class-validator';

export function Validation(options: any): PropertyDecorator {
  return (...args) => {
    IsString()(...args);
    Transform(({ value }) => {
      return value;
    })(...args);
  };
}
