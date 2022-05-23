import { extendTheme } from '@chakra-ui/react';
import typography, { typographyOverrides } from './typography';
import { colors } from './colors';
import sidebarOverrides from '~/ions/themes/sidebarOverrides';

export const primaryTheme = extendTheme({
  ...typography,
  colors,
  styles: {
    global: {
      'html, body, #root': {}
    }
  },
  components: {
    ...sidebarOverrides,
    ...typographyOverrides
  }
});
