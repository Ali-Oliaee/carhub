import { TypeOrmModule } from '@nestjs/typeorm';

export const db = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  entities: [],
  synchronize: true,
});
