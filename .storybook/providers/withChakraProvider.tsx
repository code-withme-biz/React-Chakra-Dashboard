import { DecoratorFn } from '@storybook/react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';

export const withChakraProvider: DecoratorFn = (Story, context) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Story {...context} />
    </ChakraProvider>
  );
};
