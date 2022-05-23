import { FC, useState } from 'react';
import dropDown from '~/assets/images/dropDown.svg';
import depositeIcon from '~/assets/images/depositeIcon.svg';
import DateIcon from '~/assets/images/date.svg';
import filter from '~/assets/images/filter.svg';
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Collapse,
  Spacer,
  useDisclosure,
  chakra,
  Container,
  Checkbox,
  Input,
  Icon,
  Popover,
  useBoolean,
  PopoverTrigger,
  PopoverContent,
  PopoverBody
} from '@chakra-ui/react';
import { PieChart } from '../common/PieChart';
import { TableChart } from '../common/TableChart';
import { Headline1, Headline2, Headline4 } from '~/components/typography';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateFilter } from './DateFilter';
import dayjs from 'dayjs';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { boxShadowCSS } from '../common/styleComman';
const brands = ['Location name 1', 'Location name 11', 'Location name 2', 'Location name 3'];

const DashboardFilter = () => {
  const [showingFilters, setShowingFilters] = useBoolean();
  const { isOpen: isBrandFilterOpen, onToggle: onShowBrandFilterToggle } = useDisclosure();
  const [brandFilter, setBrandFilter] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleSelectUnselectAll = () => {
    setSelectedBrands(selectedBrands.length === 0 ? brands : []);
  };

  return (
    <Popover
      isOpen={showingFilters}
      onOpen={setShowingFilters.on}
      onClose={setShowingFilters.off}
      placement="bottom-end"
    >
      <PopoverTrigger>
        <Button
          borderRadius={10}
          leftIcon={<img src={filter} />}
          colorScheme="gray"
          variant="solid"
        >
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <chakra.div>
            <Flex justify="space-between" align="center" fontSize="14px" w="100%">
              <Text color="gray">Filter By</Text>
              <Button size="sm" background="#357C95" color="#fff">
                Apply
              </Button>
            </Flex>
          </chakra.div>
          <chakra.div>
            <Flex
              justify="space-between"
              align="center"
              cursor="pointer"
              onClick={onShowBrandFilterToggle}
            >
              <Text color="#06163F" fontWeight="600" p="2">
                Location MID
              </Text>
              <Icon as={ChevronDownIcon} />
            </Flex>
            <Collapse in={isBrandFilterOpen} animateOpacity>
              <SimpleGrid columns={1}>
                <Input
                  placeholder="Search"
                  mb="2"
                  onChange={(e) => setBrandFilter(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
                <Text
                  onClick={() => handleSelectUnselectAll()}
                  color="#357C95"
                  fontSize="14px"
                  cursor="pointer"
                >
                  Select/Unselect All
                </Text>

                {brands
                  .filter((b) => b.toLowerCase().includes(brandFilter))
                  .map((brand) => (
                    <Checkbox
                      key={brand}
                      className="brandcheckbox"
                      isChecked={selectedBrands.includes(brand)}
                      onChange={(e) => {
                        if (!e.target.checked)
                          setSelectedBrands(selectedBrands.filter((b) => b !== brand));
                        else if (!selectedBrands.includes(brand))
                          setSelectedBrands([...selectedBrands, brand]);
                      }}
                    >
                      {brand}
                    </Checkbox>
                  ))}
              </SimpleGrid>
            </Collapse>
          </chakra.div>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export const Index: FC = () => {
  const { isOpen: isDepositOpen, onToggle: onDepositToggle } = useDisclosure();
  const { isOpen: isFeesOpen, onToggle: onFeesToggle } = useDisclosure();
  const { isOpen: isDisputeOpen, onToggle: onDisputeToggle } = useDisclosure();
  const { isOpen: isTransactionOpen, onToggle: onTransactionToggle } = useDisclosure();
  const { isOpen: isDateOpen, onToggle: onDateOpen, onClose: onDateClose } = useDisclosure();
  const [dateRange, setDateRange] = useState('');

  const grossDeposits = [
    { id: 'Net Deposits', field: 5, color: '#438D59' },
    { id: 'Total Refunds', field: 8, color: '#F6CB31' },
    { id: 'Total Disputes', field: 12, color: '#357C95' },
    { id: 'Total Fees', field: 5, color: '#DB2328' }
  ];
  const feesByFees = [
    { id: 'Transactions', field: 5, color: '#438D59' },
    { id: 'Chargeback', field: 8, color: '#F6CB31' },
    { id: 'Interchange', field: 12, color: '#357C95' },
    { id: 'ACH', field: 5, color: '#DB2328' }
  ];
  const paymentTypeCP = [
    { id: 'Visa', field: 5, color: '#438D59' },
    { id: 'MasterCard', field: 8, color: '#F6CB31' },
    { id: 'Discover', field: 12, color: '#357C95' },
    { id: 'Amex', field: 5, color: '#DB2328' },
    { id: 'ACH', field: 5, color: '#61B3BF' },
    { id: 'Other Cards', field: 5, color: '#384453' }
  ];
  const paymentTypeCNP = [
    { id: 'Visa', field: 5, color: '#438D59' },
    { id: 'MasterCard', field: 8, color: '#F6CB31' },
    { id: 'Discover', field: 12, color: '#357C95' },
    { id: 'Amex', field: 5, color: '#DB2328' },
    { id: 'ACH', field: 5, color: '#61B3BF' },
    { id: 'Other Cards', field: 5, color: '#384453' }
  ];
  const disputeStatus = [
    { id: 'Disputes', field: 8, color: '#DB2328' },
    { id: 'Disputes Reversal', field: 5, color: '#438D59' },
    { id: 'New Disputes', field: 12, color: '#F6CB31' },
    { id: 'Retrieval Disputes', field: 5, color: '#357C95' }
  ];
  const transStatus = [
    { id: 'Auth Only', field: 800, color: '#438D59' },
    { id: 'Captured', field: 120, color: '#F6CB31' },
    { id: 'Conveyed', field: 1234, color: '#357C95' },
    { id: 'Declined', field: 345, color: '#DB2328' },
    { id: 'Funded', field: 2769, color: '#384453' },
    { id: 'In Queue', field: 1234, color: '#61B3BF' },
    { id: 'Processing', field: 234, color: '#CEE2E9' },
    { id: 'Submitting', field: 456, color: '#7F879F' }
  ];
  const transCard = [
    { id: 'Visa', field: 5800, color: '#438D59' },
    { id: 'MasterCard', field: 4120, color: '#F6CB31' },
    { id: 'Discover', field: 3140, color: '#357C95' },
    { id: 'Amex', field: 1280, color: '#DB2328' },
    { id: 'Other Cards', field: 280, color: '#384453' }
  ];

  const setDates = (start: Date | null, end: Date | null) => {
    if (!start || !end) return setDateRange('');
    const startDate = dayjs(start).format('MMM D, YYYY');
    const endDate = dayjs(end).format('MMM D, YYYY');
    setDateRange(startDate + ' - ' + endDate);
  };

  function currencyFormat(num: number) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  return (
    <>
      <Flex alignItems="center">
        <Headline1>Welcome back, Johnathan</Headline1>
        <Spacer />
        <Stack direction="row" spacing={4}>
          <Button
            w="auto"
            borderRadius={10}
            leftIcon={<img src={DateIcon} />}
            variant="solid"
            backgroundColor="#357C95"
            color="#FFF"
            onClick={onDateOpen}
          >
            {dateRange ? dateRange : 'Select Dates'}
          </Button>
          <DateFilter onSetDates={setDates} isOpen={isDateOpen} onClose={onDateClose} />
          <DashboardFilter />
        </Stack>
      </Flex>
      <Box mb="10" />
      <Container maxW="unset" px="90px">
        <SimpleGrid columns={1} spacing={10}>
          <Box style={boxShadowCSS} onClick={onDepositToggle} cursor="pointer">
            <Flex justifyContent="space-between">
              <Box>
                <Headline1 color="#000000">Total Deposits Gross</Headline1>
                <Text color="#7F879F" fontSize="16px">
                  From April 12, 2022 to April 22, 2022
                </Text>
              </Box>
              <Flex justifyContent="space-between">
                <Box width="277px" textAlign="right">
                  <Headline1 color="#000000" width="204px">
                    {currencyFormat(49680.0)} USD
                  </Headline1>
                  <Text color="#7F879F" fontSize="16px" align="right">
                    <chakra.span mr="5px" fontWeight="600" color="#000">
                      10
                    </chakra.span>
                    Deposits
                  </Text>
                </Box>
                <Image ml="8" src={dropDown} width="20px" />
              </Flex>
            </Flex>
          </Box>

          <Collapse in={isDepositOpen} animateOpacity>
            <SimpleGrid columns={1}>
              <SimpleGrid columns={2} spacing={10}>
                <Box style={boxShadowCSS}>
                  <Box mb="3">
                    <Headline2 color="#000000" mb="2">
                      Gross Deposits Breakdown
                    </Headline2>
                    <Text color="#7F879F" fontSize="16px">
                      From April 12, 2022 to April 22, 2022
                    </Text>
                  </Box>
                  <Divider />
                  <Center mt="10">
                    {' '}
                    <PieChart data={grossDeposits} innerRadius={80} />{' '}
                  </Center>
                  <Center>
                    <TableChart data={grossDeposits} />
                  </Center>
                </Box>
                <Box style={boxShadowCSS}>
                  <Box mb="3">
                    <Headline2 color="#000000" mb="2">
                      49,000.450 USD
                    </Headline2>
                    <Text color="#7F879F" fontSize="16px">
                      From April 12, 2022 to April 22, 2022
                    </Text>
                  </Box>
                  <Divider />
                  <Box>
                    <Stack direction="column" spacing={3} ml="6" mt="8" mb="5">
                      <Flex>
                        <Image src={depositeIcon} mr="4" />
                        <Headline4 color="#000000">Bank of America #***312</Headline4>
                      </Flex>
                      <Text color="#7F879F" fontSize="14px">
                        Name Number Address
                      </Text>
                      <Headline1 color="#000000">{currencyFormat(49000.0)} USD</Headline1>
                      <Text color="#7F879F">3 Deposits</Text>
                    </Stack>
                    <Divider />
                    <Stack direction="column" spacing={3} ml="6" mt="8" mb="5">
                      <Flex>
                        <Image src={depositeIcon} mr="4" />
                        <Headline4 color="#000000">JP Morgan Chase #***312</Headline4>
                      </Flex>
                      <Text color="#7F879F" fontSize="14px">
                        Frank&apos;s Pizza on Elm 345-543-321 Elm 34,Mariboton, CT,USA
                      </Text>
                      <Headline1 color="#000000">{currencyFormat(49000.45)} USD</Headline1>
                      <Text color="#7F879F">3 Deposits</Text>
                    </Stack>
                    <Divider />
                    <Stack direction="column" spacing={3} ml="6" mt="8">
                      <Flex>
                        <Image src={depositeIcon} mr="4" />
                        <Headline4 color="#000000">JP Morgan Chase #***312</Headline4>
                      </Flex>
                      <Text color="#7F879F" fontSize="14px">
                        Frank&apos;s Pizza on Elm 345-543-321 Elm 34,Mariboton, CT,USA
                      </Text>
                    </Stack>
                  </Box>
                </Box>
              </SimpleGrid>
            </SimpleGrid>
          </Collapse>

          <Box style={boxShadowCSS} onClick={onFeesToggle} cursor="pointer">
            <Flex justifyContent="space-between">
              <Box>
                <Headline1 color="#000000">Total Fees</Headline1>
                <Text color="#7F879F" fontSize="16px">
                  From April 12, 2022 to April 22, 2022
                </Text>
              </Box>
              <Flex justifyContent="space-between">
                <Box width="277px" textAlign="right">
                  <Headline1 color="#000000">{currencyFormat(2680.0)} USD</Headline1>
                  <Text color="#7F879F" fontSize="16px" align="right">
                    <chakra.span mr="5px" fontWeight="600" color="#000">
                      10
                    </chakra.span>
                    Transactions
                  </Text>
                </Box>
                <Image ml="8" src={dropDown} width="20px" />
              </Flex>
            </Flex>
          </Box>

          <Collapse in={isFeesOpen} animateOpacity>
            <SimpleGrid columns={1}>
              <Box style={boxShadowCSS}>
                <Box mb="3">
                  <Headline2 color="#000000" mb="2">
                    Disputes By Status
                  </Headline2>
                  <Text color="#7F879F" fontSize="16px">
                    From April 12, 2022 to April 22, 2022
                  </Text>
                </Box>
                <Divider />
                <SimpleGrid columns={2}>
                  <Center mt="10">
                    {' '}
                    <PieChart data={feesByFees} innerRadius={70} />{' '}
                  </Center>
                  <Center>
                    <TableChart data={feesByFees} />
                  </Center>
                </SimpleGrid>
              </Box>
            </SimpleGrid>
            <SimpleGrid columns={1} mt="10">
              <SimpleGrid columns={2} spacing={10}>
                <Box style={boxShadowCSS}>
                  <Box mb="3">
                    <Headline2 color="#000000" mb="2">
                      Gross Deposits Breakdown
                    </Headline2>
                    <Text color="#7F879F" fontSize="16px">
                      From April 12, 2022 to April 22, 2022
                    </Text>
                  </Box>
                  <Divider />
                  <Center mt="10">
                    {' '}
                    <PieChart data={paymentTypeCP} innerRadius={80} />{' '}
                  </Center>
                  <Center>
                    <TableChart data={paymentTypeCP} />
                  </Center>
                </Box>
                <Box style={boxShadowCSS}>
                  <Box mb="3">
                    <Headline2 color="#000000" mb="2">
                      Gross Deposits Breakdown
                    </Headline2>
                    <Text color="#7F879F" fontSize="16px">
                      From April 12, 2022 to April 22, 2022
                    </Text>
                  </Box>
                  <Divider />
                  <Center mt="10">
                    {' '}
                    <PieChart data={paymentTypeCNP} innerRadius={80} />{' '}
                  </Center>
                  <Center>
                    <TableChart data={paymentTypeCNP} />
                  </Center>
                </Box>
              </SimpleGrid>
            </SimpleGrid>
          </Collapse>

          <Box style={boxShadowCSS} onClick={onDisputeToggle} cursor="pointer">
            <Flex justifyContent="space-between">
              <Box>
                <Headline1 color="#000000">Total Disputes</Headline1>
                <Text color="#7F879F" fontSize="16px">
                  From April 12, 2022 to April 22, 2022
                </Text>
              </Box>
              <Flex justifyContent="space-between">
                <Box width="277px" textAlign="right">
                  <Headline1 color="#000000">{currencyFormat(13600.0)} USD</Headline1>
                  <Text color="#7F879F" fontSize="16px" align="right">
                    <chakra.span mr="5px" fontWeight="600" color="#000">
                      10
                    </chakra.span>
                    Chargeback
                  </Text>
                </Box>
                <Image ml="8" src={dropDown} width="20px" />
              </Flex>
            </Flex>
          </Box>

          <Collapse in={isDisputeOpen} animateOpacity>
            <SimpleGrid columns={1}>
              <Box style={boxShadowCSS}>
                <Box mb="3">
                  <Headline2 color="#000000" mb="2">
                    Disputes By Status
                  </Headline2>
                  <Text color="#7F879F" fontSize="16px">
                    From April 12, 2022 to April 22, 2022
                  </Text>
                </Box>
                <Divider />
                <SimpleGrid columns={2}>
                  <Center mt="10">
                    {' '}
                    <PieChart data={disputeStatus} innerRadius={70} />{' '}
                  </Center>
                  <Center>
                    <TableChart data={disputeStatus} />
                  </Center>
                </SimpleGrid>
              </Box>
            </SimpleGrid>
          </Collapse>

          <Box style={boxShadowCSS} onClick={onTransactionToggle} cursor="pointer">
            <Flex justifyContent="space-between">
              <Box>
                <Headline1 color="#000000">Total Transactions</Headline1>
                <Text color="#7F879F" fontSize="16px">
                  From April 12, 2022 to April 22, 2022
                </Text>
              </Box>
              <Flex justifyContent="space-between">
                <Box width="277px" textAlign="right">
                  <Headline1 color="#000000">134,300.00 USD</Headline1>
                  <Text color="#7F879F" fontSize="16px" align="right">
                    <chakra.span mr="5px" fontWeight="600" color="#000">
                      2310
                    </chakra.span>
                    Transactions
                  </Text>
                </Box>
                <Image ml="8" src={dropDown} width="20px" />
              </Flex>
            </Flex>
          </Box>

          <Collapse in={isTransactionOpen} animateOpacity>
            <SimpleGrid columns={1}>
              <SimpleGrid columns={2} spacing={10}>
                <Box style={boxShadowCSS}>
                  <Box mb="3">
                    <Headline2 color="#000000" mb="2">
                      Transaction By Status
                    </Headline2>
                    <Text color="#7F879F" fontSize="16px">
                      From April 12, 2022 to April 22, 2022
                    </Text>
                  </Box>
                  <Divider />
                  <Center mt="10">
                    {' '}
                    <PieChart data={transStatus} innerRadius={80} />{' '}
                  </Center>
                  <Center>
                    <TableChart data={transStatus} />
                  </Center>
                </Box>
                <Box style={boxShadowCSS}>
                  <Box mb="3">
                    <Headline2 color="#000000" mb="2">
                      Transaction By Card
                    </Headline2>
                    <Text color="#7F879F" fontSize="16px">
                      From April 12, 2022 to April 22, 2022
                    </Text>
                  </Box>
                  <Divider />
                  <Center mt="10">
                    {' '}
                    <PieChart data={transCard} innerRadius={80} />{' '}
                  </Center>
                  <Center>
                    <TableChart data={transCard} />
                  </Center>
                </Box>
              </SimpleGrid>
            </SimpleGrid>
          </Collapse>
        </SimpleGrid>
      </Container>
    </>
  );
};
