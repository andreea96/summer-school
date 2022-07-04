import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Director } from './director.entity';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  directorId: number;

  @ManyToOne(() => Director, (d) => d.movies, {
    eager: true,
    nullable: true,
    cascade: true,
  })
  director: Director;
}
