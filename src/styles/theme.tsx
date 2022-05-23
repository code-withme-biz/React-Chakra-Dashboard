import { extendTheme } from '@chakra-ui/react';
import typography, { typographyOverrides } from './typography';
import colors from './colors';

const theme = extendTheme({
  ...typography,
  colors,
  components: {
    ...typographyOverrides
  }
});

export default theme;
