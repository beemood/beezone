import type {
  StringFilterDto} from '@beezone/property';
import {
  BaseWhereDto,
  Dto,
  SomeObjectArrayProperty,
  StringFilterProperty,
} from '@beezone/property';
import type { Prisma } from '@beezone/sample-db';

@Dto()
export class WhereSampleDto
  extends BaseWhereDto
  implements Prisma.SampleWhereInput
{
  @SomeObjectArrayProperty(() => WhereSampleDto) AND?: WhereSampleDto[];
  @SomeObjectArrayProperty(() => WhereSampleDto) OR?: WhereSampleDto[];
  @SomeObjectArrayProperty(() => WhereSampleDto) NOT?: WhereSampleDto[];

  @StringFilterProperty() name: StringFilterDto;
}
