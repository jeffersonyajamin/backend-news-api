import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppConfigModule } from '../configuration/configuration.module';
import { ManagerServiceModule } from '../manager-service/manager-service.module';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

describe('ConfigurationService', () => {
  let newsController: NewsController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppConfigModule, ManagerServiceModule],
      controllers: [NewsController],
      providers: [NewsService, ConfigService],
    }).compile();

    newsController = module.get<NewsController>(NewsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(newsController.getNews()).toBe('News Apps!!');
    });
  });
});
