import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { InventoryCronService } from './inventory-cron.service.js';

@Module({
  imports: [ConfigModule.forFeature(() => ({})), ScheduleModule],
  providers: [InventoryCronService],
})
export class InventoryModule {}
