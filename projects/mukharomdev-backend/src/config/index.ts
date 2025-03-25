/* CONFIG */

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  database: 'postgres', // Nama database
  username: 'postgres', // Username PostgreSQL
  password: 'yodha3129', // Password PostgreSQL
  host: 'localhost', // Host database
  port: 5432, // Port database
  dialect: 'postgres', // Jenis database
  logging: false, // Nonaktifkan logging SQL
});

export default sequelize;