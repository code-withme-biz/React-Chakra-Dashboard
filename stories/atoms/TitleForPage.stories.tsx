import { Meta } from '@storybook/react';
import { TitleForPage } from '~/components/atoms';

export default {
  title: 'Atoms / TitleForPage',
  component: TitleForPage,
  argTypes: {
    children: {
      defaultValue: 'Title For Page',
      control: {
        type: 'text'
      }
    }
  }
} as Meta;

export const Title_For_Page = {};
