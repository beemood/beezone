import { Prisma } from '@beezone/sample-db';
import { Dto } from '@beezone/property';
import { SelectSampleDto } from './select-sample.dto.js';

@Dto()
export class OmitSampleDto
  extends SelectSampleDto
  implements Prisma.SampleOmit {}
