import { withI18n } from './providers/withI18n';
import { withChakraProvider } from './providers/withChakraProvider';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [withI18n, withChakraProvider];
