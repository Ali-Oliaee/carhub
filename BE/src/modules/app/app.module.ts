import { Module } from '@nestjs/common';
import { db } from '../../config/typeorm.config';
import { BlogModule } from '../blog/blog.module';

@Module({
  imports: [db, BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
