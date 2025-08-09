import { PrismaModule } from '@beezone/prisma';
import { Module } from '@nestjs/common';
import { SampleController } from './sample.controller.js';

@Module({
  imports: [PrismaModule.forFeature({ resourceNames: ['sample'] })],
  controllers: [SampleController],
})
export class SampleModule {}
