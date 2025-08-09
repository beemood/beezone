import { PrismaModule } from '@beezone/prisma';
import { PrismaClient } from '@beezone/sample-db';
import { Module } from '@nestjs/common';
import { SampleModule } from './sample/sample.module.js';

@Module({
  imports: [PrismaModule.forRoot({ clientClass: PrismaClient }), SampleModule],
})
export class ResourceModule {}
