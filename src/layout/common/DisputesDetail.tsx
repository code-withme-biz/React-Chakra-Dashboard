import {
  Modal,
  ModalContent,
  ModalCloseButton,
  SimpleGrid,
  Box,
  Stack,
  Flex,
  chakra,
  Text,
  Image,
  Button,
  Circle,
  Divider
} from '@chakra-ui/react';
import { FC } from 'react';
import dayjs from 'dayjs';
import documentFileIcon from '~/assets/images/documentFileIcon.svg';
import notesIcon from '~/assets/images/notesIcon.svg';
import linkFileIcon from '~/assets/images/linkFileIcon.svg';
import { closeIconCSS, scrollBarCSS } from '~/layout/common/styleComman';

interface DisputesData {
  AMT?: number;
  CUR?: string;
  CaseId?: number;
  DbaNameMID?: string;
  DocsNotes?: string;
  IssueDate?: Date;
  Reason?: number;
  ReplyByDate?: Date;
  Status?: string;
  TransactionId?: number;
}
interface DialogProps {
  isOpen?: boolean;
  onClose?: () => void;
  rowData?: DisputesData;
  DemoTransOpen?: () => void;
}

export const DisputesDetail: FC<DialogProps> = ({ isOpen, onClose, rowData, DemoTransOpen }) => {
  const data = [
    {
      name: 'John Smith',
      detail:
        'The transaction is not congruent with the customer full name, and who actually bought the service. We need a receipt of the service to proceed.',
      status: 'Public',
      date: new Date()
    },
    {
      name: 'John Smith',
      detail:
        'The transaction is not congruent with the customer full name, and who actually bought the service. We need a receipt of the service to proceed.',
      status: 'Public',
      date: new Date()
    },
    {
      name: 'John Smith',
      detail:
        'The transaction is not congruent with the customer full name, and who actually bought the service. We need a receipt of the service to proceed.',
      status: 'Public',
      date: new Date()
    }
  ];
  const DialogEdit = () => {
    onClose()
    DemoTransOpen()
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalContent width="auto" maxWidth="auto">
          <ModalCloseButton
            style={closeIconCSS}
          />
          {rowData && (
            <SimpleGrid columns={2} spacing={1}>
              <Box p={5} borderRight="1px solid #E9EBF3">
                <Text fontSize="20px" fontWeight="600">
                  Chargeback Details
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
                  maxH="500px"
                  overflowY="auto"
                  css={scrollBarCSS}
                >
                  <Box ml="3" py="3" fontSize="12px">
                    <Text color="#7F879F">Error Detail</Text>
                    <Text>4853 - Cardholder Disputes</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">Disputes ID</Text>
                    <Text>234689</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">Submerchant legal name</Text>
                    <Text>{rowData.DbaNameMID}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">TransactionId</Text>
                    <Flex color="#357C95" mr="3">
                      <chakra.span mr="3">{rowData.TransactionId}</chakra.span>
                      <Image src={linkFileIcon} />
                    </Flex>
                  </Box>
                  <Box>
                    <Text color="#7F879F">AMT</Text>
                    <Text>{rowData.AMT}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">CUR</Text>
                    <Text>{rowData.CUR}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">Status</Text>
                    <Text>{rowData.Status}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">DocsNotes</Text>
                    <Text>{rowData.DocsNotes}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">IssueDate</Text>
                    <Text>{dayjs(new Date()).format('MMM D, YYYY hh:mm A')}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">Reason</Text>
                    <Text>{rowData.Reason}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">ReplyByDate</Text>
                    <Text>{dayjs(new Date()).format('MMM D, YYYY hh:mm A')}</Text>
                  </Box>
                  <Box>
                    <Text color="#7F879F">Status</Text>
                    <Text>{rowData.Status}</Text>
                  </Box>
                </Stack>
              </Box>
              <Box>
                <Box p={5} borderBottom="1px solid #E9EBF3">
                  <Text fontSize="20px" fontWeight="600">
                    {' '}
                    View{' '}
                  </Text>
                  <Stack
                    spacing={4}
                    fontSize="14px"
                    mt="4"
                    letterSpacing={1}
                    textTransform="uppercase"
                  >
                    <Box cursor="pointer">
                      <Box color="#7F879F">
                        Deposite ID
                        <Flex color="#357C95" mr="3">
                          <chakra.span mr="3">324345809612345687</chakra.span>
                          <Image src={linkFileIcon} />
                        </Flex>
                      </Box>
                    </Box>
                    <Box cursor="pointer">
                      <Box color="#7F879F">
                        Transaction ID
                        <Flex color="#357C95" mr="3" onClick={()=>DialogEdit()}>
                          <chakra.span mr="3">324345809612345687</chakra.span>
                          <Image src={linkFileIcon} />
                        </Flex>
                      </Box>
                    </Box>
                  </Stack>
                </Box>
                <Box>
                  <Box p={5} borderBottom="1px solid #E9EBF3">
                    <Flex justify="space-between" align="center">
                      <Box mb="3">
                        <Stack direction={['column', 'row']} spacing="4px">
                          <Image src={documentFileIcon} />
                          <Text color="#06163F" fontSize="14px" fontWeight="600">
                            Documents
                          </Text>
                          <Text fontSize="14px">(2)</Text>
                        </Stack>
                      </Box>
                      <Button size="sm">Add Document</Button>
                    </Flex>
                    <Box
                      maxH="100px"
                      overflowY="auto"
                      css={scrollBarCSS}
                    >
                      <Box fontSize="14px" py="3">
                        <Text color="#06163F" fontWeight={600}>
                          ID-Validation.pdf
                        </Text>
                        <Text color="#7F879F">
                          12kb | uploaded {dayjs(new Date()).format('MMM D, YYYY')}
                        </Text>
                      </Box>
                      <Divider />
                      <Box fontSize="14px">
                        <Text color="#06163F" fontWeight={600}>
                          ID-Validation.pdf
                        </Text>
                        <Text color="#7F879F">
                          12kb | uploaded {dayjs(new Date()).format('MMM D, YYYY')}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Box p={5}>
                    <Flex justify="space-between" align="center">
                      <Box mb="3">
                        <Stack direction={['column', 'row']} spacing="4px">
                          <Image src={notesIcon} />
                          <Text color="#06163F" fontSize="14px" fontWeight="600">
                            Notes
                          </Text>
                          <Text fontSize="14px">(4)</Text>
                        </Stack>
                      </Box>
                      <Button size="sm">Add Note</Button>
                    </Flex>
                    <Box
                      maxW="400px"
                      maxH="200px"
                      overflowY="auto"
                      css={scrollBarCSS}
                    >
                      {data.map((itm: any) => {
                        return (
                          <Box fontSize="12px">
                            <Text color="#384453">{itm.name}</Text>
                            <Text color="#06163F">{itm.detail}</Text>
                            <Stack direction={['column', 'row']} spacing="2" align="center">
                              <Text>{itm.status}</Text>
                              <Circle size="4px" bg="#7F879F" />
                              <Text>{dayjs(new Date()).format('MMM D, YYYY')}</Text>
                            </Stack>
                            <Divider />
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SimpleGrid>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
