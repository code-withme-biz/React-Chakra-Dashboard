import {
  Modal,
  ModalContent,
  ModalCloseButton,
  SimpleGrid,
  Box,
  Stack,
  Flex,
  chakra,
  Badge,
  Text,
  Image
} from '@chakra-ui/react';
import { FC } from 'react';
import linkFileIcon from '~/assets/images/linkFileIcon.svg';
import { closeIconCSS } from '~/layout/common/styleComman';

interface TransactionData {
  DbaName?: string;
  Status?: string;
  TransactionId?: number;
  TransactionDate?: Date;
  cardInfo?: string;
  cur?: string;
  depType?: string;
  feeAMT?: number;
  netAMT?: number;
  payAmount?: number;
  payMethod?: string;
  transType?: string;
}

interface DialogProps {
  isOpen?: boolean;
  onClose?: () => void;
  rowData?: TransactionData;
}

export const TransactionDetail: FC<DialogProps> = ({ isOpen, onClose, rowData }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalContent width="auto" maxWidth="auto">
          <ModalCloseButton style={closeIconCSS} />
          {rowData && (
            <SimpleGrid columns={2} spacing={1}>
              <Box p={5} borderRight="1px solid #E9EBF3">
                <Text fontSize="20px" fontWeight="600">
                  Transaction Details
                </Text>
                <Text fontSize="14px" color="#384453">
                  Case ID 123123123123
                </Text>
                <Stack
                  spacing={3}
                  fontSize="14px"
                  mt="4"
                  letterSpacing={1}
                  textTransform="uppercase"
                >
                  <Box>
                    <Text color="#7F879F">Transacion ID</Text>
                    <Text>{rowData.TransactionId}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">Submerchant legal name</Text>
                    <Text>{rowData.DbaName}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">Submerchant dba name</Text>
                    <Text>{rowData.DbaName}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">processor mid</Text>
                    <Text>{rowData.TransactionId}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">Status</Text>
                    <Text>{rowData.Status}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">card type</Text>
                    <Text>{rowData.TransactionId}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">last 4 digits of card #</Text>
                    <Text>{rowData.TransactionId}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">card expiration</Text>
                    <Text>{rowData.TransactionId}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">card network</Text>
                    <Text>{rowData.TransactionId}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">card bin</Text>
                    <Text>{rowData.TransactionId}</Text>
                  </Box>
                </Stack>
              </Box>
              <Box p={5}>
                <Text fontSize="20px" fontWeight="600">
                  View
                </Text>
                <Stack
                  spacing={2}
                  fontSize="14px"
                  mt="4"
                  letterSpacing={1}
                  textTransform="uppercase"
                >
                  <Box cursor="pointer">
                    <Flex>
                      <Box color="#7F879F">
                        Deposite ID
                        <Flex color="#357C95" mr="3" align="center">
                          <chakra.span mr="3">324345809612345687</chakra.span>
                          <Image src={linkFileIcon} />
                        </Flex>
                      </Box>
                      <Box>
                        <Badge lineHeight="8" color="#384453" fontWeight="600" px="2">
                          Open Deposit Transaction List
                        </Badge>
                      </Box>
                    </Flex>
                  </Box>
                </Stack>
              </Box>
            </SimpleGrid>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
