import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/**/*.{test,spec}.ts'],
    globalSetup: ['./tests/setup/global-setup.ts'],
    testTimeout: 45000,
    hookTimeout: 45000,
    environment: 'node',
    globals: true,
    reporters: ['default']
  }
});
