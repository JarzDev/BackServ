"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize').Sequelize;
var dbConnect = new Sequelize('serviceexpress', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
exports.default = dbConnect;
