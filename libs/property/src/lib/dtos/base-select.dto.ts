import { SomeBooleanProperty } from '../special/some-boolean-property.js';

export class BaseSelectDto {
  @SomeBooleanProperty() id?: boolean;
  @SomeBooleanProperty() createdAt?: boolean;
  @SomeBooleanProperty() updatedAt?: boolean;
  @SomeBooleanProperty() deletedAt?: boolean;
}
