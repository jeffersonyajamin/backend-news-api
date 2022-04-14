import { Controller, Get, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NewsSearchDtoReq } from '../shared/dto/news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('search')
  @ApiOperation({ summary: 'Find news search' })
  @ApiResponse({ status: 201, description: 'News founded.' })
  getNewsFilter(@Query() items: NewsSearchDtoReq) {
    console.log(items);
    return this.newsService.findNews(items);
  }
}
