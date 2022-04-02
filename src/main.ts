import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppConfigService } from './configuration/configuration.service';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Backend News')
    .setDescription('News API description')
    .setVersion('1.0')
    .addTag('news')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ credentials: true, origin: true });
  const appConfig: AppConfigService = app.get(AppConfigService);
  await app.listen(appConfig.port);
  console.log(`Server is running in port ${appConfig.port}`);
}
bootstrap();
