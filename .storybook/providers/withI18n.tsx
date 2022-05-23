import { DecoratorFn } from '@storybook/react';
import '~/ions/locale/internationalization';

export const withI18n: DecoratorFn = (Story, context) => {
  return <Story {...context} />;
};
