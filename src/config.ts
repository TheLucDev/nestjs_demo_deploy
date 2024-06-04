require('dotenv').config();

export const config = {
  PORT: process.env.PORT || '3003',
  BASE_PATH: process.env.BASE_PATH || '/api',
  SWAGGER_PATH: process.env.SWAGGER_PATH || '/api/swagger',
  API_KEY: process.env.API_KEY || '666FBAE90B7A40428A33B4EF677879BB',
  AUTH: {
    SECRET: process.env.AUTH_SECRET || 'ThienStyle',
    EXPIRES_IN: process.env.AUTH_EXPIRES_IN || '1d',
    SALT_ROUND: +(process.env.AUTH_SALT_ROUND || '10'),
  },
  MYSQL: {
    HOST: process.env.MYSQL_HOST || '192.168.1.6',
    // HOST: process.env.MYSQL_HOST || '210.2.99.122',
    PORT: process.env.MYSQL_PORT || '3335',
    USERNAME: process.env.MYSQL_USERNAME || 'root',
    PASSWORD:
      process.env.MYSQL_PASSWORD ||
      'nxzdfHUwCXhk2tvApWFNEseRZQcSjyDJu3L6gqG4B7YP8M5Ka9',
    // DATABASE: process.env.MYSQL_DATABASE || 'adtool_uat',
    // DATABASE: process.env.MYSQL_DATABASE || 'warehouse_stock',
    DATABASE: process.env.MYSQL_DATABASE || 'test_warehouse',
    // IS_SYNCHORNIZE: true,
    IS_SYNCHORNIZE: JSON.parse(process.env.MYSQL_IS_SYNCHORNIZE || 'false'),
  },
  SQL: {
    HOST: process.env.SQL_HOST || '124.158.10.3',
    // HOST: process.env.SQL_HOST || '210.2.99.122',
    PORT: process.env.SQL_PORT || '1466',
    USERNAME: process.env.SQL_USERNAME || 'lmark',
    PASSWORD: process.env.SQL_PASSWORD || 'lmark@924789',
    // DATABASE: process.env.SQL_DATABASE || 'adtool_uat',
    // DATABASE: process.env.SQL_DATABASE || 'warehouse_stock',
    DATABASE: process.env.SQL_DATABASE || 'dbTTDVVL_TayNinh',
    IS_SYNCHORNIZE: process.env.SQL_IS_SYNCHORNIZE || false,
  },
};
