import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MovieModule } from './movie/movie.module';
import { dbConfig } from 'ormconfig';
@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig as TypeOrmModuleOptions),
    MovieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
