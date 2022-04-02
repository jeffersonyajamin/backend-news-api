import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './configuration/configuration.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [AppConfigModule, NewsModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
