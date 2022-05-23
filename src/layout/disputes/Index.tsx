import {
  Flex,
  Spacer,
  Stack,
  Button,
  useDisclosure,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Container,
  chakra,
  Modal,
  Image,
  ModalContent,
  ModalCloseButton,
  SimpleGrid,
  Divider,
  Box,
  Badge,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  Select,
  FormControl,
  FormLabel,
  Switch,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  HStack,
  Tag,
  TagCloseButton,
  TagLabel
} from '@chakra-ui/react';
import { FC, useState, useMemo, useEffect } from 'react';
import { Headline1 } from '~/components/typography';
import { DateFilter } from '../dashboard/DateFilter';
import dayjs from 'dayjs';
import { DisputesFilter } from './DisputesFilter';
import SvgIcon from '~/components/SvgIcon';
import {
  dateIconSvg,
  transview,
  selectDropDown,
  whiteDateSvg,
  tagCloseButton
} from '~/ions/common/Index';
import { DataTable } from '~/components';
import cardImage from '~/assets/images/cardImage.svg';
import infoIcon from '~/assets/images/infoIcon.svg';
import { Column } from 'react-table';
import tableData from './data.json';
import { DisputesDetail } from '~/layout/common/DisputesDetail';
import CloseIcon from '~/assets/images/closeIcon.svg';
import SearchIcon from '~/assets/images/searchIcon.svg';
import { TransactionDetail } from '~/layout/common/TransactionDetail';
import { closeIconCSS } from '~/layout/common/styleComman';

const currencyFormat = (num: number) => {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export type DisputesTable = {
  CaseId: number;
  ReplyByDate: string;
  IssueDate: string;
  DbaNameMID: string;
  AMT: number;
  CUR: string;
  PaymentInfo: string;
  Reason: number;
  Status: string;
  TransactionId: number;
  DocsNotes: string;
};

const disputeTableData: DisputesTable[] = tableData;
export const Index: FC = () => {
  const { isOpen: isDateOpen, onToggle: onDateOpen, onClose: onDateClose } = useDisclosure();
  const { isOpen: isDetailOpen, onOpen: onDetailOpen, onClose: onDeatilClose } = useDisclosure();
  const { isOpen: isDetailOpenT, onOpen: onDetailOpenT, onClose: onDeatilCloseT } = useDisclosure();
  const { isOpen: isExportOpen, onOpen: onExportOpen, onClose: onExportClose } = useDisclosure();
  const { isOpen: isColumnOpen, onOpen: onColumnOpen, onClose: onColumnClose } = useDisclosure();
  const [dateRange, setDateRange] = useState('');
  const [detailData, setDetailData] = useState();

  const setDates = (start: Date | null, end: Date | null) => {
    if (!start && !end) setDateRange('');
    const startDate = dayjs(start).format('MMM D, YYYY');
    const endDate = dayjs(end).format('MMM D, YYYY');
    setDateRange(startDate + ' - ' + endDate);
  };
  const onDetailOpens = (row: any) => {
    setDetailData(row);
    onDetailOpen();
  };
  const columnOption = [
    'CaseId',
    'ReplyByDate',
    'IssueDate',
    'DbaNameMID',
    'AMT',
    'CUR',
    'PaymentInfo',
    'Reason',
    'Status',
    'TransactionId',
    'DocsNotes',
    'View'
  ];
  const demoTrans = {
    DbaName: 'Franks Pizza',
    Status: 'AUTH ONLY',
    TransactionDate: 'DEC 14, 2021 10:00 AM',
    TransactionId: 29226207,
    cardInfo: '',
    cur: 'USD',
    depType: 'CREDIT',
    feeAMT: 0,
    netAMT: 0,
    payAmount: 12.12,
    payMethod: 'CNP',
    transType: 'dispute'
  };
  const DemoTransOpen = () => {
    onDetailOpenT();
  };
  const [selectedColumn, setSelectedColumn] = useState<string[]>([]);
  const [searchTableData, setSearchTableData] = useState([]);
  const [inputSearch, setInputSearch] = useState<string>();
  const [selectedColumnHidden, setSelectedColumnHidden] = useState<string[]>([]);
  const [showingPage, setShowingPage] = useState(0);
  let dataT: DisputesTable[] = useMemo(() => disputeTableData, []);
  const columns: Column<DisputesTable>[] = useMemo(
    () => [
      { Header: 'Case Id', accessor: 'CaseId', headercolor: '#7F879F', width: 150 },
      {
        Header: 'Reply by Date',
        accessor: 'ReplyByDate',
        headercolor: '#7F879F',
        width: 150,
        Cell: (row: any) => {
          const currentDate = new Date();
          return (
            <>
              <Text>{dayjs(new Date()).format('MMM D, YYYY hh:mm A')}</Text>
              <Text color="#7F879F" fontSize="12px">
                {' '}
                ## Days Left{' '}
              </Text>
            </>
          );
        }
      },
      {
        Header: 'Issue Date',
        accessor: 'IssueDate',
        headercolor: '#7F879F',
        width: 100,
        Cell: (row: any) => {
          const currentDate = new Date();
          return (
            <>
              <Text>{dayjs(new Date()).format('MMM D, YYYY hh:mm A')}</Text>
            </>
          );
        }
      },
      {
        Header: 'DBA NAME MID',
        accessor: 'DbaNameMID',
        width: 180,
        Cell: (row: any) => {
          return (
            <>
              <Text>{row.row?.original.DbaNameMID}</Text>
              <Text color="#7F879F" fontSize="12px">
                758-968-123
              </Text>
            </>
          );
        }
      },
      {
        Header: 'AMT',
        accessor: 'AMT',
        width: 130,
        Cell: (row: any) => {
          return (
            <>
              <Text align="right">{currencyFormat(row.row?.original.AMT)}</Text>
              <Text align="right" color="#7F879F" fontSize="12px">
                USD
              </Text>
            </>
          );
        }
      },
      { Header: 'CUR', accessor: 'CUR', width: 200 },
      {
        Header: 'Payment Info',
        accessor: 'PaymentInfo',
        width: 200,
        Cell: (row: any) => {
          return (
            <>
              <SimpleGrid columns={2} spacing={1}>
                <Image src={cardImage} />
                <Text>
                  21435
                  <Text fontSize="12px" color="#7F879F">
                    {dayjs(new Date()).format('YYYY-D')}{' '}
                  </Text>
                </Text>
              </SimpleGrid>
            </>
          );
        }
      },
      {
        Header: 'Reason',
        accessor: 'Reason',
        width: 150,
        Cell: (row: any) => {
          return (
            <Popover>
              <PopoverTrigger>
                <Flex justify="space-between" cursor="pointer">
                  <Text>{row.row?.original.Reason}</Text>
                  <Image src={infoIcon} />
                </Flex>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton style={closeIconCSS} />
                  <PopoverBody p="5">
                    <Text color="#06163F" fontSize="20px" fontWeight="600">
                      {row.row?.original.Reason} - Cardholder Dispute
                    </Text>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          );
        }
      },
      {
        Header: 'STATUS',
        accessor: 'Status',
        width: 150,
        Cell: (row: any) => {
          const data = row.row?.original.Status;
          if (data == 'solved') {
            return (
              <Badge px="2" py="1" colorScheme="green">
                {row.row?.original.Status}
              </Badge>
            );
          } else if (data.toLowerCase() == 'new') {
            return (
              <Badge px="2" py="1" colorScheme="blue">
                {row.row?.original.Status}
              </Badge>
            );
          } else if (data == 'action needed') {
            return (
              <Badge px="2" py="1" colorScheme="red">
                {row.row?.original.Status}
              </Badge>
            );
          } else {
            return (
              <Badge px="2" py="1" colorScheme="yellow">
                {row.row?.original.Status}
              </Badge>
            );
          }
        }
      },
      {
        Header: 'TRANS ID',
        accessor: 'TransactionId',
        width: 150,
        Cell: (row: any) => {
          return (
            <Stack direction="row" onClick={() => DemoTransOpen()} cursor="pointer">
              <Text color="#357C95">{row.row?.original.TransactionId}</Text>
              <SvgIcon>{transview}</SvgIcon>
            </Stack>
          );
        }
      },
      {
        Header: 'Docs Notes',
        accessor: 'DocsNotes',
        width: 150,
        Cell: (row: any) => {
          return (
            <Box textAlign="center">
              <Text>{row.row?.original.DocsNotes}</Text>
              <Text color="#7F879F">3</Text>
            </Box>
          );
        }
      },
      {
        Header: 'VIEW',
        accessor: 'detail',
        width: 150,
        Cell: (row: any) => {
          return (
            <chakra.div cursor="pointer">
              <Text
                color="#357C95"
                fontWeight="600"
                onClick={() => {
                  onDetailOpens(row.row?.original);
                }}
              >
                Details
              </Text>
            </chakra.div>
          );
        }
      }
    ],
    []
  );
  const searchDisputes = (val: any) => {
    setInputSearch(val);
    const fData = tableData.filter((data) => {
      if (data.CaseId.toString().includes(val.toString())) {
        return data;
      }
    });
    setSearchTableData(fData);
  };
  const [closeTag, setCloseTag] = useState();
  const closeTagEvent = (item: any, key: any) => {
    setCloseTag({
      key: key,
      item: item
    });
  };

  useEffect(() => {
    setSelectedColumn(columnOption);
    setSearchTableData(dataT);
  }, []);

  useEffect(() => {
    setSelectedColumnHidden(columnOption.filter((x) => selectedColumn.indexOf(x) === -1));
  }, [selectedColumn]);

  const InputRightClick = () => {
    setSearchTableData([]);
    setInputSearch('');
  };
  const [FilterDisputes, setFilterDisputes] = useState();

  return (
    <>
      <TransactionDetail isOpen={isDetailOpenT} onClose={onDeatilCloseT} rowData={demoTrans} />
      <DisputesDetail
        isOpen={isDetailOpen}
        onClose={onDeatilClose}
        rowData={detailData}
        DemoTransOpen={() => DemoTransOpen()}
      />
      <Flex alignItems={'center'}>
        <Stack direction="column" spacing={0}>
          <Headline1>Disputes</Headline1>
          <Text fontSize="14px">
            Showing {showingPage} of {dataT.length}
          </Text>
        </Stack>
        <Spacer />
        <Stack direction="row" spacing={2}>
          <InputGroup w="auto">
            <Input
              placeholder="Search Disputes"
              value={inputSearch}
              borderRadius={100}
              bgColor="white"
              onChange={(e) => {
                searchDisputes(e.target.value);
              }}
            />
            <InputRightElement onClick={() => InputRightClick()} cursor="pointer">
              <Image src={inputSearch ? CloseIcon : SearchIcon} cursor="pointer" />
            </InputRightElement>
          </InputGroup>
          <Button onClick={onColumnOpen}> Column </Button>
          <Modal isOpen={isColumnOpen} onClose={onColumnClose} size="sm">
            <ModalOverlay />
            <ModalContent p="3">
              <ModalCloseButton style={closeIconCSS} />
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
                    {columnOption.map((brand) => (
                      <>
                        <FormControl
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <FormLabel htmlFor={brand} mb="0">
                            {' '}
                            {brand}{' '}
                          </FormLabel>
                          <Switch
                            id={brand}
                            isChecked={selectedColumn.includes(brand)}
                            onChange={(e) => {
                              if (!e.target.checked)
                                setSelectedColumn(selectedColumn.filter((b) => b !== brand));
                              else if (!selectedColumn.includes(brand))
                                setSelectedColumn([...selectedColumn, brand]);
                            }}
                          />
                        </FormControl>
                      </>
                    ))}
                  </Stack>
                </Box>
                <Divider />
              </ModalBody>

              <ModalFooter p="2">
                <Button onClick={onColumnClose} background="#357C95" color="#FFF" mx="auto">
                  Done
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <Button
            w={'auto'}
            borderRadius={10}
            leftIcon={<SvgIcon className="fa"> {dateRange ? whiteDateSvg : dateIconSvg} </SvgIcon>}
            variant="solid"
            backgroundColor={dateRange ? '#357C95' : '#EBEEF5'}
            color={dateRange ? '#FFF' : '#384453'}
            _hover={{ backgroundColor: dateRange ? '#357C95' : '#EBEEF5' }}
            onClick={onDateOpen}
          >
            {dateRange ? dateRange : 'Select Dates'}
          </Button>
          <DateFilter
            onSetDates={setDates}
            isOpen={isDateOpen}
            onClose={onDateClose}
            allowRange={true}
          />
          <DisputesFilter setFilterDisputes={setFilterDisputes} closeTag={closeTag} />
          <Button
            backgroundColor="#06163F"
            _hover={{ bg: '#06163F' }}
            color="#FFFFFF"
            onClick={onExportOpen}
          >
            Export
          </Button>
          <Modal isOpen={isExportOpen} onClose={onExportClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalBody mt="5">
                <Text fontWeight={600} mb="2" fontSize="18px">
                  Export in Progress
                </Text>
                <Text>A notification will be sent to username@email.com when it is ready.</Text>
              </ModalBody>

              <ModalFooter>
                <Button onClick={onExportClose} background="#357C95" color="#FFF" mr="auto">
                  Ok
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </Flex>
      <Container maxW="unset" px="10px" mt="10">
        {FilterDisputes ? (
          <HStack mb="3">
            {FilterDisputes && FilterDisputes['MID']
              ? FilterDisputes['MID'].map((item: any) => {
                  return (
                    <Tag
                      size="lg"
                      borderRadius="full"
                      variant="outline"
                      colorScheme="blue"
                      background="rgba(81, 96, 228, 0.1)"
                    >
                      <TagLabel color="#357C95">MID: {item}</TagLabel>
                      <Box
                        mt="3px"
                        ml="3px"
                        mr="-6px"
                        cursor="pointer"
                        onClick={() => closeTagEvent(item, 'MID')}
                      >
                        <SvgIcon>{tagCloseButton}</SvgIcon>
                      </Box>
                    </Tag>
                  );
                })
              : ''}
            {FilterDisputes && FilterDisputes['CardType']
              ? FilterDisputes['CardType'].map((item: any) => {
                  return (
                    <Tag
                      size="md"
                      borderRadius="full"
                      variant="outline"
                      colorScheme="blue"
                      background="rgba(81, 96, 228, 0.1)"
                    >
                      <TagLabel color="#357C95">Card Type: {item}</TagLabel>
                      <TagCloseButton onClick={() => closeTagEvent(item, 'CardType')} />
                    </Tag>
                  );
                })
              : ''}
            {FilterDisputes && FilterDisputes['Currency']
              ? FilterDisputes['Currency'].map((item: any) => {
                  return (
                    <Tag
                      size="md"
                      borderRadius="full"
                      variant="outline"
                      colorScheme="blue"
                      background="rgba(81, 96, 228, 0.1)"
                    >
                      <TagLabel color="#357C95">Currency: {item}</TagLabel>
                      <TagCloseButton onClick={() => closeTagEvent(item, 'Currency')} />
                    </Tag>
                  );
                })
              : ''}
          </HStack>
        ) : (
          ''
        )}
        <DataTable
          columns={columns}
          data={inputSearch ? searchTableData : dataT}
          selectedColumn={selectedColumnHidden}
          showingPage={setShowingPage}
        />
      </Container>
    </>
  );
};
