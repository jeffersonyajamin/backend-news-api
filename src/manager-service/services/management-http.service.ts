import { HttpException, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AppConfigService } from 'src/configuration/configuration.service';

@Injectable()
export class ManagerHttpService {
  constructor(
    private readonly appConfigService: AppConfigService,
    private readonly httpService: HttpService,
  ) {}

  async get<K>(url: string, config?: any): Promise<K> {
    return firstValueFrom(
      this.httpService.get<K>(url, {
        ...config,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${this.appConfigService.API_KEY}`,
        },
      }),
    )
      .then((data) => data.data)
      .catch((err) => {
        throw new HttpException(
          { message: err.message, error: err.response.data || err.message },
          err.response.status,
        );
      });
  }
}
