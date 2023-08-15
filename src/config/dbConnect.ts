const { Sequelize } = require('sequelize');

const dbConnect = new Sequelize( 'servicenode', 'root', 'password',  { 
    host: 'localhost',
    dialect: 'mysql',/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

export default dbConnect;