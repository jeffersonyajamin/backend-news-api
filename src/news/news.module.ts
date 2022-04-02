import { Module } from '@nestjs/common';
import { AppConfigModule } from 'src/configuration/configuration.module';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { ConfigService } from '@nestjs/config';
import { ManagerServiceModule } from 'src/manager-service/manager-service.module';

@Module({
  imports: [AppConfigModule, ManagerServiceModule],
  controllers: [NewsController],
  providers: [NewsService, ConfigService],
})
export class NewsModule {}
