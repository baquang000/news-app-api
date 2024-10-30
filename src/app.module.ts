import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './modules/news/news.module';
import { SourceModule } from './modules/source/source.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    NewsModule,
    SourceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
