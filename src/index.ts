import express, { Express } from 'express';
import 'dotenv/config';

import routes from './routes';

const app: Express = express();
const port = process.env.API_PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
  routes(app);
});
