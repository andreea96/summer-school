import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Director } from './director.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Director, (d) => d.movies)
  director: Director;
}
