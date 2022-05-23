import React from 'react';
import {
  Stack,
  Button,
  Text,
  Modal,
  ModalContent,
  ModalCloseButton,
  Divider,
  Box,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  Select,
  FormControl,
  FormLabel,
  Switch
} from '@chakra-ui/react';
import SvgIcon from '../../components/SvgIcon';
import { selectDropDown } from '../../ions/common/Index';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  columns: { id: string; label: string }[];
  selectedColumns: string[];
  onChange: (columns: string[]) => void;
}
const ColumnFilterModal: React.FC<Props> = ({
  isOpen,
  onClose,
  columns,
  selectedColumns,
  onChange
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p="3">
        <ModalCloseButton
          pos="absolute"
          w="40px"
          h="40px"
          right="-20px"
          top="-20px"
          border="1px solid #E9EBF3"
          bg="#FFF"
          borderRadius="50%"
          boxShadow="0px 4px 20px rgb(6 22 63 / 10%)"
        />
        <ModalBody>
          <Text fontWeight={600} mb="2" fontSize="18px">
            Customize Columns
          </Text>
          <Select icon={<SvgIcon>{selectDropDown}</SvgIcon>} placeholder="Default" mb="3">
            <option value="payfac1">View Name Defined by payfac 1</option>
            <option value="payfac2">View Name Defined by payfac 2</option>
            <option value="payfac3">View Name Defined by payfac 3</option>
            <option value="payfac3">View Name Defined by payfac 4</option>
          </Select>
          <Divider />
          <Box my="5">
            <Stack spacing={2}>
              {columns.map((column) => (
                <FormControl
                  key={column.id}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <FormLabel htmlFor={column.id} mb="0">
                    {column}
                  </FormLabel>
                  <Switch
                    id={column.id}
                    isChecked={selectedColumns.includes(column.id)}
                    onChange={(e) => {
                      if (!e.target.checked)
                        onChange(selectedColumns.filter((b) => b !== column.id));
                      else if (!selectedColumns.includes(column.id))
                        onChange([...selectedColumns, column.label]);
                    }}
                  />
                </FormControl>
              ))}
            </Stack>
          </Box>
          <Divider />
        </ModalBody>

        <ModalFooter p="2">
          <Button onClick={onClose} background="#357C95" color="#FFF" mx="auto">
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ColumnFilterModal;
