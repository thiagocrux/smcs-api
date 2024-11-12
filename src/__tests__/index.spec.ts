import { beforeAll, describe, expect, it } from 'vitest';
import axios from 'axios';
import type { AxiosResponse } from 'axios';

const BEFORE_ALL_TIMEOUT = 30000;

describe('index.ts', () => {
  let response: AxiosResponse;

  beforeAll(async () => {
    await axios
      .get('http://localhost:3333')
      .then((axiosResponse) => {
        response = axiosResponse;
      })
      .catch((error) => console.log(error));
  }, BEFORE_ALL_TIMEOUT);

  it('should have a status 200', () => {
    expect(response.status).toBe(200);
  });

  it('Should have content-type', () => {
    expect(response.headers['content-type']).toBe(
      'application/json; charset=utf-8',
    );
  });

  it('should return the right text', () => {
    expect(response.data).toBe('Hello, world!');
  });
});
