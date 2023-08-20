require("dotenv").config({ path: "../.env" });

const dotenv = process.env;

module.exports = {
  development: {
    username: dotenv.DEV_DB_USERNAME,
    password: dotenv.DEV_DB_PASS,
    database: dotenv.DEV_DB_NAMEDB,
    host: dotenv.DEV_DB_HOST,
    dialect: dotenv.DEV_DB_DIALECT,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
