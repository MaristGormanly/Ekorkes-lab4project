const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'finalproject',
  password: 'Marist77', // whatever you use to log into pgAdmin
  port: 5432
});

module.exports = pool;
