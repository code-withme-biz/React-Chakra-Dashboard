import React from 'react';
import {
  Button,
  Text,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalOverlay
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const ExportModal: React.FC<Props> = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalBody mt="5">
        <Text fontWeight={600} mb="2" fontSize="18px">
          Export in Progress
        </Text>
        <Text>A notification will be sent to username@email.com when it is ready.</Text>
      </ModalBody>

      <ModalFooter>
        <Button onClick={onClose} background="#357C95" color="#FFF" mr="auto">
          Ok
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default ExportModal;
