import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    coverage: {
      clean: true,
      reportsDirectory: '__tests__/coverage/',
    },
  },
});
