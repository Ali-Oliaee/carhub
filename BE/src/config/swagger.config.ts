import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('CarHub')
  .setDescription('Open api for CarHub')
  .setVersion('1.0.0')
  .build();
