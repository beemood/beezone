import { Prisma } from '@beezone/sample-db';
import { BaseSelectDto, Dto, SomeBooleanProperty } from '@beezone/property';

@Dto()
export class SelectSampleDto
  extends BaseSelectDto
  implements Prisma.SampleSelect
{
  @SomeBooleanProperty() name: boolean;
}
