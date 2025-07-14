import type { CustomDecorator} from '@nestjs/common';
import { SetMetadata } from '@nestjs/common';
import { RESOURCE_NAME_METADATA_KEY } from './metadata-keys.js';

/**
 * Define resource name
 * @param resourceName
 * @returns
 */
export function Resource(resourceName: string): CustomDecorator<string> {
  return ((...args) => {
    SetMetadata(RESOURCE_NAME_METADATA_KEY, resourceName)(...args);
  }) as MethodDecorator as CustomDecorator<string>;
}
