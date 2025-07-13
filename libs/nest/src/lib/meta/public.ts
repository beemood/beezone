import { CustomDecorator, SetMetadata } from '@nestjs/common';
import { PUBLIC_ACCESS_METADATA_KEY } from './metadata-keys.js';

/**
 * Define a public resource
 * @returns
 */
export function Public(): CustomDecorator<string> {
  return ((...args) => {
    SetMetadata(PUBLIC_ACCESS_METADATA_KEY, true)(...args);
  }) as MethodDecorator as CustomDecorator<string>;
}
