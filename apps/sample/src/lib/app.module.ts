import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SampleModule } from './resources/sample.module.js';

@Module({
  imports: [ConfigModule.forRoot(), SampleModule],
})
export class AppModule {}
