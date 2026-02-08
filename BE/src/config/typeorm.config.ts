import { TypeOrmModule } from '@nestjs/typeorm';

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;
export const db = TypeOrmModule.forRoot({
  type: 'postgres',
  host: DB_HOST,
  port: Number(DB_PORT ?? 5432),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [],
  synchronize: true,
});
