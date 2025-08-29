import { defineConfig } from '@playwright/test';

export default defineConfig({
  retries: 2, // Number of retries for failed tests
  timeout: 180000, // Default timeout per test in milliseconds (3 minutes)
});