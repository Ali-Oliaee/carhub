import { config } from 'dotenv';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

config({ path: join(process.cwd(), '.env') });

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env;
console.log({ DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT });

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
