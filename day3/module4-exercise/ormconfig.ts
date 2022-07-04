import { DataSource, DataSourceOptions } from 'typeorm';
const path = require('path');

export const dbConfig = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'summer',
  password: 'school',
  database: 'imdb',
  entities: [path.join(__dirname, '**/*.entity.js')],
  synchronize: true,
};

export const dbConnection = new DataSource(dbConfig as DataSourceOptions);
