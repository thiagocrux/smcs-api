import type { Express } from 'express';

export default function routes(app: Express) {
  app.get('/', (_req, res) => {
    res.status(200).json('Hello, world!');
  });
}
