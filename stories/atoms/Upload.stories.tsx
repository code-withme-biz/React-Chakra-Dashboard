import { Meta } from '@storybook/react';
import { Upload } from '~/components/atoms/Upload';
import { FC } from 'react';

export default {
  title: 'Atoms / Upload',
  component: Upload,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta;

export const Upload_Default: FC = () => <Upload onFileAccepted={() => 0} />;
