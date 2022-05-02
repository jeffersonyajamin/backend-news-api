import { HttpException, Injectable } from '@nestjs/common';
import { AppConfigService } from '../configuration/configuration.service';
import { NewsResDTO } from 'src/shared/dto/news-res.dto';
import { NewsSearchDtoReq } from 'src/shared/dto/news.dto';
import { ManagerHttpService } from '../manager-service/services/management-http.service';
/**
 * Service dealing with app environment variables.
 *
 * @class
 */
@Injectable()
export class NewsService {
  constructor(
    private managerHttpService: ManagerHttpService,
    private readonly appConfigService: AppConfigService,
  ) {}
  async findNews(items: NewsSearchDtoReq): Promise<NewsResDTO> {
    try {
      const news: NewsResDTO = await this.managerHttpService.get(
        `${this.appConfigService.BASE_URL}/everything?q=${items.search}`,
      );
      return news;
    } catch (err) {
      throw new HttpException(
        { message: err.message, error: err.response.data || err.message },
        err.response.status,
      );
    }
  }
}
