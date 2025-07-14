import { Dto } from '@beezone/property';
import { PickType } from '@nestjs/swagger';
import { QueryManySampleDto } from './query-many-sample.dto.js';
@Dto()
export class ResponseQuerySampleDto extends PickType(QueryManySampleDto, [
  'select',
  'omit',
]) {}
