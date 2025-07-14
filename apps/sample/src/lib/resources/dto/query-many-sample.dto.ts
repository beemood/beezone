import {
  SomeObjectProperty,
  BaseQueryDto,
  Dto,
  SomeArrayStringProperty,
} from '@beezone/property';
import { SelectSampleDto } from './select-sample.dto.js';
import { Prisma } from '@beezone/sample-db';
import { OrderSampleDto } from './order-sample.dto.js';
import { WhereSampleDto } from './where-sample.dto.js';
import { OmitSampleDto } from './omit-sample.dto.js';

@Dto()
export class QueryManySampleDto
  extends BaseQueryDto
  implements Prisma.SampleFindManyArgs
{
  @SomeObjectProperty(() => WhereSampleDto) where: WhereSampleDto;
  @SomeObjectProperty(() => OrderSampleDto) orderBy: OrderSampleDto;

  @SomeArrayStringProperty(Object.keys(Prisma.SampleScalarFieldEnum))
  distinct: Prisma.SampleScalarFieldEnum[];

  @SomeObjectProperty(() => SelectSampleDto) select?: SelectSampleDto;
  @SomeObjectProperty(() => OmitSampleDto) omit?: OmitSampleDto;
}
