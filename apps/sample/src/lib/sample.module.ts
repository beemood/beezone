/* eslint-disable @nx/enforce-module-boundaries */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FindMany, ResourceController } from '@beezone/nest';
import { PrismaClientModule } from '@beezone/prisma-client';
import { PrismaClient } from '@beezone/sample-db';

@ResourceController()
export class SampleController {
  @FindMany()
  get() {
    return { message: 'Updated' };
  }
}
@Module({
  imports: [
    ConfigModule.forRoot({}),
    PrismaClientModule.forRoot({ clientClass: PrismaClient }),
  ],
  controllers: [SampleController],
})
export class SampleModule {}
