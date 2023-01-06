import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://http://localhost:3000', '127.0.0.1', '*'],
    methods: ['POST', 'PUT', 'DELETE', 'GET', 'PATCH'],
  });
  const config = new DocumentBuilder()
    .setTitle('Documentation of Test of Geferson')
    .setDescription('GEFERSON ALMEIDA LOPES - Gefersonjefreey@gmail.com')
    .setVersion('1,0gl')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
