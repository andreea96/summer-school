import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { paginate } from 'nestjs-typeorm-paginate';
import { MovieDto } from './movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  getMovies(page, limit) {
    return paginate<Movie>(this.movieRepository, {
      page,
      limit,
    });
  }

  async getMovie(movieId: number) {
    const movie = await this.movieRepository.findOneBy({ id: movieId });
    const { title, id, director } = movie;
    return {
      id,
      title,
      director: director.getFullName(),
    };
  }

  addMovie(movieDTO: MovieDto) {
    return this.movieRepository.save(movieDTO);
  }

  async patchMovie(id: number, movieDTO: MovieDto) {
    return this.movieRepository.update({ id }, movieDTO);
  }

  delete(id: number) {
    return this.movieRepository.delete({ id });
  }
}
