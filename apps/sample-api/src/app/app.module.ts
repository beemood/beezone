import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { ResourceModule } from './resources/resource.module.js';

@Module({
  imports: [
    EventEmitterModule.forRoot({ delimiter: '.' }),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({}),
    ResourceModule,
  ],
})
export class AppModule {}
