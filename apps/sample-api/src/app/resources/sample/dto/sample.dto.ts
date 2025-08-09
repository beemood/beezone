import { Sample } from '@beezone/sample-db';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class SampleDto implements Sample {
  @Expose() @ApiProperty({ type: 'integer' }) id: number;
  @Expose() @ApiProperty({ type: 'string' }) name: string;
}
