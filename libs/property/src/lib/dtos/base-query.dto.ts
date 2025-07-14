import { Property } from '../property/property.js';

export class BaseQueryDto {
  @Property({ type: 'integer', minimum: 0, defaultValue: 20, transform: true })
  take?: number;
  @Property({ type: 'integer', minimum: 0, defaultValue: 0, transform: true })
  skip?: number;
}
