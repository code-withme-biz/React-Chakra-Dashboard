import { FC, useState, useMemo, useEffect } from 'react';
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
  Box,
  Badge
} from '@chakra-ui/react';

import dayjs from 'dayjs';
import { Column } from 'react-table';
import { DataTable } from '~/components';
import { Headline1 } from '~/components/typography';
import { DateFilter } from '../dashboard/DateFilter';
import TransactionFilterModal from './TransactionFilterModal';
import ColumnFilterModal from './ColumnFilterModal';
import ExportModal from './ExportModal';
import SvgIcon from '~/components/SvgIcon';
import { dateIconSvg, selectDropDown, whiteDateSvg, transViewSvg } from '~/ions/common/Index';
import { DataTable } from '~/components';
import cardImage from '~/assets/images/cardImage.svg';
import { Column } from 'react-table';
import { TransactionDetail } from '~/layout/common/TransactionDetail';
import tableData from './data.json';
import CloseIcon from '~/assets/images/closeIcon.svg';
import SearchIcon from '~/assets/images/searchIcon.svg';
import { closeIconCSS } from '~/layout/common/styleComman';

const currencyFormat = (num: number) => {
  return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

interface CellRender<T> {
  row: {
    original: T;
    value: T;
  };
}

export type TransTable = {
  TransactionDate: string;
  DbaName: string;
  TransType: string;
  DepType: string;
  Status: string;
  cardInfo: string;
  payAmount: number;
  payMethod: string;
  feeAMT: number;
  netAMT: number;
  cur: string;
  TransactionId: number;
};

const TransTableData: TransTable[] = tableData;

export const Index: FC = () => {
  const { isOpen: isDateOpen, onToggle: onDateOpen, onClose: onDateClose } = useDisclosure();
  const { isOpen: isDetailOpen, onOpen: onDetailOpen, onClose: onDeatilClose } = useDisclosure();
  const { isOpen: isExportOpen, onOpen: onExportOpen, onClose: onExportClose } = useDisclosure();
  const { isOpen: isColumnOpen, onOpen: onColumnOpen, onClose: onColumnClose } = useDisclosure();
  const [dateRange, setDateRange] = useState('');
  const [detailData, setDetailData] = useState<TransTable | undefined>();

  const setDates = (start: Date | null, end: Date | null) => {
    if (!start || !end) setDateRange('');
    const startDate = dayjs(start).format('MMM D, YYYY');
    const endDate = dayjs(end).format('MMM D, YYYY');
    setDateRange(startDate + ' - ' + endDate);
  };
  const openDetail = (row: TransTable) => {
    setDetailData(row);
    onDetailOpen();
  };

  const columnOption = [
    'DepositId',
    'TransactionId',
    'Submerchant',
    'DbaName',
    'Status',
    'Type',
    'TransactionDate',
    'TransactionDateTimeZone',
    'DepositDate'
  ];
  const [selectedColumn, setSelectedColumn] = useState<string[]>([]);
  const [selectedColumnHidden, setSelectedColumnHidden] = useState<string[]>([]);
  const [showingPage, setShowingPage] = useState<number>(0);
  const [inputSearch, setInputSearch] = useState<string>();
  const [searchTableData, setSearchTableData] = useState([]);

  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);


  const searchTransaction = (val: any) => {
    setInputSearch(val);
    const fData = tableData.filter((data) => {
      if (data.TransactionId.toString().includes(val.toString())) {
        return data;
      }
    });
    setSearchTableData(fData);
  };
  const InputRightClick = () => {
    setSearchTableData([]);
    setInputSearch('');
  };
  const dataT: TransTable[] = useMemo(() => TransTableData, []);
  const columns: Column<TransTable>[] = useMemo(
    () => [
      {
        Header: 'TRANS DATE/TIME',
        accessor: 'TransactionDate',
        headercolor: '#7F879F',
        width: 230,
        Cell: () => {
          const currentDate = new Date();
          return (
            <>
              <Text>{dayjs(new Date()).format('MMM D, YYYY hh:mm A')}</Text>
              <Text color="#7F879F" fontSize="12px">
                {dayjs(currentDate.setDate(currentDate.getDate() + 1)).format('MMM D, YYYY')}
              </Text>
            </>
          );
        }
      },
      {
        Header: 'DBA NAME MID',
        accessor: 'DbaName',
        width: 180,
        Cell: (row: CellRender<TransTable>) => {
          return (
            <>
              <Text>{row.row.original.DbaName}</Text>
              <Text color="#7F879F" fontSize="12px">
                758-968-123
              </Text>
            </>
          );
        }
      },
      {
        Header: 'TRANS. TYPE',
        accessor: 'TransType',
        width: 130,
        Cell: (row: CellRender<TransTable>) => {
          const data = row.row.original.TransType;
          if (data == 'dispute') {
            return (
              <Badge px="2" py="1" colorScheme="yellow">
                {row.row.original.TransType}
              </Badge>
            );
          } else if (data == 'refund') {
            return (
              <Badge px="2" py="1" colorScheme="red">
                {row.row.original.TransType}
              </Badge>
            );
          } else {
            return (
              <Badge px="2" py="1" colorScheme="green">
                {row.row.original.TransType}
              </Badge>
            );
          }
        }
      },
      {
        Header: 'DEP. TYPE',
        accessor: 'DepType',
        width: 100,
        Cell: (row: CellRender<TransTable>) => {
          const data = row.row.original.DepType;
          if (data == 'debit') {
            return (
              <Badge px="2" py="1" colorScheme="red">
                {row.row.original.DepType}
              </Badge>
            );
          } else {
            return (
              <Badge px="2" py="1" colorScheme="green">
                {row.row.original.DepType}
              </Badge>
            );
          }
        }
      },
      {
        Header: 'STATUS',
        accessor: 'Status',
        width: 120,
        Cell: (row: CellRender<TransTable>) => {
          const data = row.row.original.Status;
          if (data == 'on hold') {
            return (
              <Badge px="2" py="1" colorScheme="yellow">
                {row.row.original.Status}
              </Badge>
            );
          } else if (data == 'Status 2') {
            return (
              <Badge px="2" py="1" colorScheme="blue">
                {row.row.original.Status}
              </Badge>
            );
          } else {
            return (
              <Badge px="2" py="1" colorScheme="green">
                {row.row.original.Status}
              </Badge>
            );
          }
        }
      },
      {
        Header: 'CARD INFO',
        accessor: 'CardInfo',
        width: 200,
        Cell: (row: CellRender<TransTable>) => {
          return (
            <>
              <SimpleGrid columns={2} spacing={1}>
                <Image src={cardImage} />
                <Text>
                  21435
                  <Text fontSize="12px" color="#7F879F">
                    {dayjs(new Date()).format('YYYY-D')}{' '}
                  </Text>
                </div>
              </SimpleGrid>
            </>
          );
        }
      },

      {
        Header: 'PAYMENT AMT',
        accessor: 'payAmount',
        subAmt: true,
        width: 130,
        Cell: (row: any) => {
          return <Text>{currencyFormat(row.row?.original.payAmount)}</Text>;
        }
      },


      {
        Header: 'PAYMENT METHOD',
        accessor: 'PayMethod',
        badge: true,
        bBg: '#CEE2E9',
        bColor: '#357C95',
        width: 150
      },
      { Header: 'FEE AMT', accessor: 'FeeAmount', subAmt: true, width: 100 },
      { Header: 'NET AMT', accessor: 'NetAmount', subAmt: true, width: 100 },
      { Header: 'CUR', accessor: 'Currency', width: 100 },
      { Header: 'TRANS ID', accessor: 'TransactionId', width: 100 },
      {
        Header: 'VIEW',
        Cell: (row: CellRender<TransTable>) => {
          return (
            <chakra.div cursor="pointer">
              <Text color="#357C95" fontWeight="600" onClick={() => openDetail(row.row.original)}>
                Details
              </Text>
            </chakra.div>
          );
        }
      }
    ],
    []
  );
  const columnOptions = columns.map((c) => ({ id: c.accessor ?? c.Header, label: c.Header }));

  useEffect(() => {
    setSelectedColumn(columnOption);
    setSearchTableData(dataT);
  }, []);

  useEffect(() => {
    setSelectedColumnHidden(columnOption.filter((x) => selectedColumn.indexOf(x) === -1));
  }, [selectedColumn]);

  return (
    <>
      <TransactionDetail isOpen={isDetailOpen} onClose={onDeatilClose} rowData={detailData} />
      <Flex alignItems={'center'}>
        <Stack direction="column" spacing={0}>
          <Headline1>Transactions</Headline1>
          <Text fontSize="14px">
            Showing {showingPage} of {dataT.length}
          </Text>
        </Stack>
        <Spacer />
        <Stack direction="row" spacing={2}>
          <InputGroup w="auto">
            <Input
              placeholder="Search Transactions"
              borderRadius={100}
              bgColor="white"
              onChange={(e) => {
                searchTransaction(e.target.value);
              }}
            />
            <InputRightElement onClick={() => InputRightClick()} cursor="pointer">
              <Image src={inputSearch ? CloseIcon : SearchIcon} cursor="pointer" />
            </InputRightElement>
          </InputGroup>
          {dateRange ? <Button onClick={onColumnOpen}> Column </Button> : ''}

          <ColumnFilterModal
            isOpen={isColumnOpen}
            onClose={onColumnClose}
            columns={columnOptions}
            selectedColumns={selectedColumns}
            onChange={setSelectedColumns}
          />

          <Button
            w={'auto'}
            borderRadius={10}
            leftIcon={<SvgIcon className="fa"> {dateRange ? whiteDateSvg : dateIconSvg} </SvgIcon>}
            variant="solid"
            backgroundColor={dateRange ? '#357C95' : '#EBEEF5'}
            color={dateRange ? '#FFF' : '#384453'}
            onClick={onDateOpen}
            _hover={{ backgroundColor: dateRange ? '#357C95' : '#EBEEF5' }}
          >
            {dateRange ? 'Transaction Date : ' + dateRange : 'Select Dates'}
          </Button>
          <DateFilter
            onSetDates={setDates}
            isOpen={isDateOpen}
            onClose={onDateClose}
            allowRange={true}
          />

          <TransactionFilter />
          <Button
            backgroundColor="#06163F"
            _hover={{ bg: '#06163F' }}
            color="#FFFFFF"
            onClick={onExportOpen}
          >

          <TransactionFilterModal />

            Export
          </Button>
          <ExportModal isOpen={isExportOpen} onClose={onExportClose} />
        </Stack>
      </Flex>
      <Container maxW="unset" px="10px" mt="10">

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
