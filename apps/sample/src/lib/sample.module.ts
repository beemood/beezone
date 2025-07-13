import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FindMany, ResourceController } from '@beezone/nest';
import { PrismaClient } from '@beezone/sample-db';

@ResourceController()
export class SampleController {
  @FindMany()
  get() {
    return { message: 'Updated' };
  }
}
@Module({
  imports: [ConfigModule.forRoot({})],
  controllers: [SampleController],
})
export class SampleModule {}
