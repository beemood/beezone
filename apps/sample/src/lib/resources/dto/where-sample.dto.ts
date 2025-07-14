import {
  BaseWhereDto,
  Dto,
  SomeObjectArrayProperty,
  StringFilterDto,
  StringFilterProperty,
} from '@beezone/property';
import { Prisma } from '@beezone/sample-db';

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
