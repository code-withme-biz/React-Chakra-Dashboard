import { FC } from 'react';
import { Heading } from '@chakra-ui/react';

const Headline1: FC = ({ children }) => (
  <Heading as="h1" variant="h1">
    {children}
  </Heading>
);

const Headline2: FC = ({ children }) => (
  <Heading as="h2" variant="h2">
    {children}
  </Heading>
);

const Headline3: FC = ({ children }) => (
  <Heading as="h3" variant="h3">
    {children}
  </Heading>
);

const Headline4: FC = ({ children }) => (
  <Heading as="h4" variant="h4">
    {children}
  </Heading>
);

const Headline5: FC = ({ children }) => (
  <Heading as="h5" variant="h5">
    {children}
  </Heading>
);

export { Headline1, Headline2, Headline3, Headline4, Headline5 };
