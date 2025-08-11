import type { Prisma } from '@beezone/sample-db';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateSampleDto implements Prisma.SampleCreateInput {
  @Expose() @ApiProperty({ type: 'string' }) name: string;
}
