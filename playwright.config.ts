import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000,
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  workers: 1,
  reporter:[['html'],
  ['allure-playwright'],
  ['dot'],
  ['list']],
  
  use: {
     trace: 'on-first-retry',
     screenshot: 'only-on-failure',
     video:'retain-on-failure',
     headless:false,
     viewport: {width: 1280, height: 720},//set default viewport size for consistency
     ignoreHTTPSErrors: true,//Ignore SSL errors if nessessary
     permissions: ['geolocation'],//Set nessessary permissions for geolocation-based tests
  },
  //grep: /@master/,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],



});
