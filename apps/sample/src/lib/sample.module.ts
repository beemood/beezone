/* eslint-disable @nx/enforce-module-boundaries */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FindMany, ResourceController } from '@beezone/nest';
import { InjectRepository, PrismaClientModule } from '@beezone/prisma-client';
import { Prisma, PrismaClient } from '@beezone/sample-db';

@ResourceController()
export class SampleController {
  constructor(
    @InjectRepository('sample') protected repo: Prisma.SampleDelegate
  ) {}
  @FindMany()
  get() {
    return this.repo.findMany();
  }
}
@Module({
  imports: [
    ConfigModule.forRoot({}),
    PrismaClientModule.forRoot({ clientClass: PrismaClient }),
    PrismaClientModule.forFeature({ resourceNames: ['sample'] }),
  ],
  controllers: [SampleController],
})
export class SampleModule {}
