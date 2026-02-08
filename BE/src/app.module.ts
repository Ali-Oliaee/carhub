import { Module } from '@nestjs/common';
import { db } from './config/typeorm.config';

@Module({
  imports: [db],
  controllers: [],
  providers: [],
})
export class AppModule {}
