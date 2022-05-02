import { registerAs } from '@nestjs/config';
export default registerAs('news-app', () => ({
  port: process.env.PORT,
  API_KEY: process.env.API_KEY,
  BASE_URL: process.env.BASE_URL,
}));
