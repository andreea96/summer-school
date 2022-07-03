import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Movie } from './movie.entity';

@Entity()
export class Director {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Movie, (m) => m.director)
  movies: Movie[];

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
