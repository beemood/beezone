import { Dto, NameProperty } from '@beezone/property';
import type { Prisma } from '@beezone/sample-db';

@Dto()
export class CreateSampleDto implements Prisma.SampleCreateInput {
  @NameProperty() name: string;
}
