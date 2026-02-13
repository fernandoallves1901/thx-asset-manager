import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Employee } from './entities/Employee';
import { Department } from './entities/Department';
import { Equipment } from './entities/Equipment';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'thx_assets',
  synchronize: true,
  logging: process.env.NODE_ENV === 'development',
  entities: [Employee, Department, Equipment],
  subscribers: [],
  migrations: [],
});
