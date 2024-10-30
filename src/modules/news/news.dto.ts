import { IsString, IsOptional, IsUrl, IsDateString } from 'class-validator';

export class CreateNews {
  @IsOptional()
  @IsString()
  sourceId: string | null;

  @IsString()
  sourceName: string | null;

  @IsString()
  author: string | null;

  @IsString()
  title: string | null;

  @IsString()
  description: string | null;

  @IsUrl()
  url: string | null;

  @IsOptional()
  @IsUrl()
  urlToImage: string | null;

  @IsDateString()
  publishedAt: string | null;

  @IsString()
  content: string | null;
}
