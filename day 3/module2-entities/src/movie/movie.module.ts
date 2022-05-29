import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';

@Module({
  imports: [],
  controllers: [MovieController],
  providers: [],
})
export class MovieModule {}
