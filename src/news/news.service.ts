import { HttpException, Injectable } from '@nestjs/common';
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
  constructor(private managerHttpService: ManagerHttpService) {}

  async getNews() {
    try {
      const news: NewsResDTO = await this.managerHttpService.get(
        `https://newsapi.org/v2/everything?q=latest`,
      );
      return news;
    } catch (err) {
      throw new HttpException(
        { message: err.message, error: err.response.data || err.message },
        err.response.status,
      );
    }
  }

  async findNews(items: NewsSearchDtoReq) {
    try {
      const news: NewsResDTO = await this.managerHttpService.get(
        `https://newsapi.org/v2/everything?q=${items.search}`,
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
