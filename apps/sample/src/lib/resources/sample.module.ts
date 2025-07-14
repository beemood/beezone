import { Module } from '@nestjs/common';
import { PrismaClientModule } from '@beezone/prisma-client';
import { PrismaClient } from '@beezone/sample-db';
import { SampleController } from './sample.controller.js';

@Module({
  imports: [
    PrismaClientModule.forRoot({ clientClass: PrismaClient }),
    PrismaClientModule.forFeature({ resourceNames: ['sample'] }),
  ],
  controllers: [SampleController],
})
export class SampleModule {}
