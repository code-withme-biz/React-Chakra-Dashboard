import { FC } from 'react';
import { Heading, Text, TextProps } from '@chakra-ui/react';

/**
 * A type for higher-order components which produce typography elements
 * HOC takes a variant, e.g. h2 and return a new component to be used on a page
 */
type VariantHOC<T> = (variant: T) => FC<TextProps>;

/**
 * A higher order component, produces a react function component for headlines
 */
const makeHeading: VariantHOC<'h1' | 'h2' | 'h3' | 'h4'> =
  (variant) =>
  ({ children, color }) =>
    (
      <Heading as={variant} variant={variant} color={color}>
        {children}
      </Heading>
    );

/**
 * A higher order component, produces a react function component for a text
 */
const makeText: VariantHOC<
  'numbers' | 'paragraph' | 'navigation' | 'button' | 'label' | 'table' | 'tableSmall'
> =
  (variant) =>
  ({ children, color }) =>
    (
      <Text variant={variant} color={color}>
        {children}
      </Text>
    );

const makegrayText: VariantHOC<
  'numbers' | 'paragraph' | 'navigation' | 'button' | 'label' | 'table' | 'tableSmall' | 'text'
> =
  (variant) =>
  ({ children, color, fontWeight }) =>
    (
      <Text
        variant={variant}
        color={color ? color : '#384453'}
        fontSize="15px"
        fontWeight={fontWeight}
      >
        {children}
      </Text>
    );

/**
 * Final components for a use produced by HOC
 */
export const Headline1 = makeHeading('h1');
export const Headline2 = makeHeading('h2');
export const Headline3 = makeHeading('h3');
export const Headline4 = makeHeading('h4');
export const Numbers = makeText('numbers');
export const Paragraph = makeText('paragraph');
export const NavCaption = makeText('navigation');
export const ButtonCaption = makeText('button');
export const Label = makeText('label');
export const TableCaption = makeText('table');
export const TableCaptionSmall = makeText('tableSmall');
export const GrayText = makegrayText('text');
