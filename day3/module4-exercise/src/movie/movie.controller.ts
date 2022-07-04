import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { MovieDto } from './movie.dto';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.movieService.getMovies(page, limit);
  }

  @Get(`:id`)
  async getById(@Param('id') movieId: number) {
    return this.movieService.getMovie(movieId);
  }

  @Post()
  async create(@Body() movieDto: MovieDto) {
    return this.movieService.addMovie(movieDto);
  }

  @Patch(`:id`)
  async updatePartial(
    @Param('id') movieId: number,
    @Body() movieDto: MovieDto,
    @Res() response: Response,
  ) {
    await this.movieService.patchMovie(movieId, movieDto);
    response.send({
      status: HttpStatus.NO_CONTENT,
    });
  }

  @Delete(`:id`)
  async delete(@Param('id') movieId: number, @Res() response: Response) {
    this.movieService.delete(movieId);
    response.send({
      status: HttpStatus.NO_CONTENT,
    });
  }
}
