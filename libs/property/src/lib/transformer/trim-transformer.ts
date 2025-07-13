import { Transform } from 'class-transformer';

export function TrimTransformer(): PropertyDecorator {
  return (...args) => {
    Transform(({ value }) => {
      if (typeof value === 'string') {
        return value.replace(/\s{1,}/g, ' ').trim();
      }
      return value;
    })(...args);
  };
}
