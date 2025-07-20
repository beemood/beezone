import { Dto, IdProperty } from '@beezone/property';
import type { ID } from '@beezone/types';

@Dto()
export class IdDto implements ID {
  @IdProperty() id: number;
}
