import { FC } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

export const TitleForPage: FC<HeadingProps> = (props) => <Heading as="h3" size="lg" {...props} />;
