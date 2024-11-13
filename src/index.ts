import express, { Express } from 'express';
import 'dotenv/config';

import routes from './routes';
import { logger, isDevelopment } from '@/utils';

const app: Express = express();
const port = process.env.API_PORT;

app.listen(port, () => {
  if (isDevelopment)
    logger.info(`Server is running at http://localhost:${port}`);

  routes(app);
});
