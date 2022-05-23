import { Meta } from '@storybook/react';
import { ConfirmationModal } from '~/components/organisms';

export default {
  title: 'Organisms / Confirmation Modal',
  component: ConfirmationModal,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    header: {
      defaultValue: 'Header',
      control: {
        type: 'text'
      }
    },
    cancelText: {
      defaultValue: 'cancelText',
      control: {
        type: 'text'
      }
    },
    confirmText: {
      defaultValue: 'confirmText',
      control: {
        type: 'text'
      }
    },
    message: {
      defaultValue: 'message',
      control: {
        type: 'text'
      }
    }
  }
} as Meta;

export const Confirmation_Modal = (props: {
  [k in 'header' | 'cancelText' | 'confirmText' | 'message']: string;
}) => <ConfirmationModal isOpen={true} onConfirm={() => 0} onClose={() => 0} {...props} />;
