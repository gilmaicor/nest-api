module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST || 'database',
  port: +process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_NAME || 'rest_api',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: process.env.DB_SYNC === 'true',
};
