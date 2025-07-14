import { Dto, NameProperty } from '@beezone/property';
import { Prisma } from '@beezone/sample-db';

@Dto()
export class CreateSampleDto implements Prisma.SampleCreateInput {
  @NameProperty() name: string;
}
