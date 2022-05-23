/// <reference types="cypress" />
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { startDevServer } = require('@cypress/vite-dev-server');

module.exports = (on: (arg0: string, arg1: (options: any) => any) => void, config: any) => {
  on('dev-server:start', (options) => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: path.resolve(__dirname, '..', '..', '..', 'vite.config.ts')
      }
    });
  });
};
