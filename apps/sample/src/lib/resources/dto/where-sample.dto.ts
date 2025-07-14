import {
  DateFilterDto,
  DateFilterProperty,
  Dto,
  NumberFilterDto,
  NumberFilterProperty,
  SomeObjectArrayProperty,
  StringFilterDto,
  StringFilterProperty,
} from '@beezone/property';
import { Prisma } from '@beezone/sample-db';

@Dto()
export class WhereSampleDto implements Prisma.SampleWhereInput {
  @SomeObjectArrayProperty(() => WhereSampleDto) AND?: WhereSampleDto[];
  @SomeObjectArrayProperty(() => WhereSampleDto) OR?: WhereSampleDto[];
  @SomeObjectArrayProperty(() => WhereSampleDto) NOT?: WhereSampleDto[];
  @NumberFilterProperty() id: NumberFilterDto;
  @DateFilterProperty() createdAt: DateFilterDto;
  @DateFilterProperty() updatedAt: DateFilterDto;
  @DateFilterProperty() deletedAt: DateFilterDto;
  @StringFilterProperty() name: StringFilterDto;
}
