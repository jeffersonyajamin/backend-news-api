import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app environment variables.
 *
 * @class
 */
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return Number(this.configService.get<number>('news-app.port'));
  }
  get API_KEY(): string {
    return this.configService.get<string>('news-app.API_KEY');
  }
  get BASE_URL(): string {
    return this.configService.get<string>('news-app.BASE_URL');
  }
}
