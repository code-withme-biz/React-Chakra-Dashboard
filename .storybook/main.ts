/* eslint-env node */
import tsConfigPath from 'vite-tsconfig-paths';
import { StorybookConfig } from '@storybook/core-common';
import { UserConfig } from 'vite';

/**
 * Required as it's Common JS
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const svgPlugin = require('vite-plugin-react-svg');

export default {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite'
  },
  features: {
    buildStoriesJson: true,
    modernInlineRender: true,
    argTypeTargetsV7: true,
    storyStoreV7: !global.navigator?.userAgent?.match?.('jsdom'),
    babelModeV7: true,
    breakingChangesV7: true,
    interactionsDebugger: true,
    warnOnLegacyHierarchySeparator: true,
    emotionAlias: false
  },
  framework: '@storybook/react',
  async viteFinal(config: UserConfig) {
    config.plugins?.push(tsConfigPath());
    config.plugins?.push(svgPlugin({ defaultExport: 'component', svgo: true }));

    if (config.optimizeDeps?.include)
      config.optimizeDeps.include = config.optimizeDeps.include.filter(
        (module: string) => !['emotion-theming', '@emotion/core'].includes(module)
      );
    return config;
  }
} as StorybookConfig;
