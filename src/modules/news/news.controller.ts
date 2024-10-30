import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNews } from './news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('createData')
  async createData(@Body() data: CreateNews) {
    return this.newsService.createData(data);
  }

  // @Get('getData/:limit/:page')
  // async getData(@Param('limit') limit:number,@Param('page') page: number) {
  //   return this.newsService.getData(page,limit);
  // }

  @Get('getData/:limit/:page')
  async getData(@Param('limit') limit: string, @Param('page') page: string) {
    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    if (isNaN(pageNumber) || isNaN(limitNumber)) {
      return {
        statusCode: 400,
        message: 'Invalid page or limit parameter',
      };
    }

    return this.newsService.getData(pageNumber, limitNumber);
  }

  @Post('createList')
  async createList(@Body() data: CreateNews[]) {
    return this.newsService.createDataList(data);
  }

  @Get('search/:key')
  async search(@Param('key') key: string) {
    return this.newsService.search(key);
  }
}
