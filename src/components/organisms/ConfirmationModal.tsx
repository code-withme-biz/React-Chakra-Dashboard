import { FC } from 'react';
import {
  Button,
  ButtonProps,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
  message: string;
  header?: string;
  confirmText?: string;
  confirmButtonProps?: Partial<ButtonProps>;
  cancelText?: string;
  cancelButtonProps?: Partial<ButtonProps>;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  confirmText,
  onConfirm,
  onClose,
  isOpen,
  cancelText,
  message,
  header
}) => {
  const { t } = useTranslation('common');
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>{header ?? t('actions.delete')}</ModalHeader>
        <ModalBody>{message}</ModalBody>
        <ModalFooter justifyContent="space-between">
          <Button onClick={onConfirm}>{confirmText ?? t('actions.confirm')}</Button>
          <Button onClick={onClose}>{cancelText ?? t('actions.cancel')}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
