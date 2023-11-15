import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'healthflix_development',
  username: 'healthflix',
  password: 'healthflix',
  define: {
    underscored: true,
  }
});