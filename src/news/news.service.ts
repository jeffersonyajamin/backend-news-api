import { Injectable } from '@nestjs/common';
import { ManagerHttpService } from '../manager-service/services/management-http.service';
/**
 * Service dealing with app environment variables.
 *
 * @class
 */
@Injectable()
export class NewsService {
  constructor(private managerHttpService: ManagerHttpService) {}

  async find(items) {
    const news = await this.managerHttpService.get(
      `https://newsapi.org/v2/everything?q=${items.q}`,
    );
    console.log(news);
    return news;
  }
}
