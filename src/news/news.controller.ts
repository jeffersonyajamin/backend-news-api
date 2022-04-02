import { Controller, Get } from '@nestjs/common';
import { NewsService } from './news.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller()
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('find')
  @ApiOperation({ summary: 'Find news' })
  @ApiResponse({ status: 201, description: 'News founded.' })
  getNews() {
    return this.newsService.find();
  }
}
