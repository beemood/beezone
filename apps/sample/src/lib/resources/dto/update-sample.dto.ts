import { Dto } from '@beezone/property';
import { PartialType } from '@nestjs/swagger';
import { CreateSampleDto } from './create-sample.dto.js';
import { Prisma } from '@beezone/sample-db';

@Dto()
export class UpdateSampleDto
  extends PartialType(CreateSampleDto)
  implements Prisma.SampleUpdateInput {}
