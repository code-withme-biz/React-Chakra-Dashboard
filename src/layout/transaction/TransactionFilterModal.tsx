import {
  useBoolean,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverBody,
  chakra,
  Flex,
  Circle,
  SimpleGrid,
  Input,
  Checkbox,
  Text,
  Box,
  Divider,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import filter from '~/assets/images/filter.svg';

const TransactionFilterModal: FC = () => {
  const locations = ['Location name 1', 'Location name 11', 'Location name 2', 'Location name 3'];
  const currency = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CHF', 'CNH', 'HKD'];
  const transaction = [
    { name: 'Sale', color: 'green' },
    { name: 'Refund', color: 'yellow' },
    { name: 'ChargeBack', color: 'red' }
  ];
  const status = [
    { name: 'Auth Only', color: 'green' },
    { name: 'Captured', color: 'yellow' },
    { name: 'Conveyed', color: 'red' },
    { name: 'Declined', color: 'green' },
    { name: 'Funded', color: 'yellow' },
    { name: 'In Queue', color: 'red' },
    { name: 'Processing', color: 'green' },
    { name: 'Submitted', color: 'yellow' }
  ];

  const [showingFilters, setShowingFilters] = useBoolean();
  const [chargebackId, setChargebackId] = useState('');
  const [depositId, setDepositId] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [currencyFilter, setCurrencyFilter] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string[]>([]);
  const [selectedTransaction, setSelectedTransaction] = useState<typeof transaction>([]);
  const [selectedStatus, setSelectedStatus] = useState<typeof status>([]);

  const handleSelectUnselectAll = () => {
    setSelectedLocation(selectedLocation.length === 0 ? locations : []);
  };
  const SelectUnselectCurrency = () => {
    setSelectedCurrency(selectedCurrency.length === 0 ? currency : []);
  };
  const SelectUnselectTransaction = () => {
    setSelectedTransaction(selectedTransaction.length === 0 ? transaction : []);
  };
  const SelectUnselectStatus = () => {
    setSelectedStatus(selectedStatus.length === 0 ? status : []);
  };

  const changeTransaction = (val: string) => selectedTransaction.some((item) => item.name === val);
  const changeStatus = (name: string) => selectedStatus.some((item) => item.name === name);

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
          <chakra.div mb="3">
            <Flex justify={'space-between'} align="center" fontSize="14px" w="100%">
              <Text color={'gray'}>Filter By</Text>
              <Button size="sm" background="#357C95" color="#fff">
                Apply
              </Button>
            </Flex>
          </chakra.div>
          <Divider />

          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton _focus={{ boxShadow: 'none' }} _expanded={{ border: 'none' }}>
                  <Box flex="1" textAlign="left">
                    <Text color="#06163F" fontWeight="600" fontSize="15px">
                      Location (MID)
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={1}>
                  <Input
                    placeholder="Search"
                    mb="2"
                    onChange={(e) => setLocationFilter(e.target.value)}
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

                  {locations
                    .filter((l) => l.includes(locationFilter))
                    .map((location) => (
                      <Checkbox
                        key={location}
                        isChecked={selectedLocation.includes(location)}
                        onChange={(e) => {
                          if (!e.target.checked)
                            setSelectedLocation(selectedLocation.filter((l) => l !== location));
                          else if (!selectedLocation.includes(location))
                            setSelectedLocation([...selectedLocation, location]);
                        }}
                      >
                        {location}
                      </Checkbox>
                    ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _focus={{ boxShadow: 'none' }}>
                  <Box flex="1" textAlign="left">
                    <Text color="#06163F" fontWeight="600" fontSize="15px">
                      Transaction Date
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={1}>
                  <Flex direction="row" align="center">
                    <Box pos="relative">
                      <Input placeholder="YYYY" type="text" pattern="[0-9]*" maxLength={4} />
                    </Box>
                    <Box px="2">/</Box>
                    <Box pos="relative">
                      <Input placeholder="MM" type="text" pattern="[0-9]*" maxLength={2} />
                    </Box>
                    <Box px="2">/</Box>
                    <Box pos="relative">
                      <Input placeholder="DD" type="text" pattern="[0-9]*" maxLength={2} />
                    </Box>
                  </Flex>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _focus={{ boxShadow: 'none' }}>
                  <Box flex="1" textAlign="left">
                    <Text color="#06163F" fontWeight="600" fontSize="15px">
                      Settlement Date
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={1}>
                  <Flex direction="row" align="center">
                    <Box pos="relative">
                      <Input placeholder="YYYY" type="text" pattern="[0-9]*" maxLength={4} />
                    </Box>
                    <Box px="2">/</Box>
                    <Box pos="relative">
                      <Input placeholder="MM" type="text" pattern="[0-9]*" maxLength={2} />
                    </Box>
                    <Box px="2">/</Box>
                    <Box pos="relative">
                      <Input placeholder="DD" type="text" pattern="[0-9]*" maxLength={2} />
                    </Box>
                  </Flex>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _focus={{ boxShadow: 'none' }}>
                  <Box flex="1" textAlign="left">
                    <Text color="#06163F" fontWeight="600" fontSize="15px">
                      Status
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={1}>
                  <Text
                    onClick={() => SelectUnselectStatus()}
                    color="#357C95"
                    fontSize="14px"
                    cursor="pointer"
                  >
                    Select/Unselect All
                  </Text>

                  {status.map((s) => (
                    <Checkbox
                      key={s.name}
                      isChecked={changeStatus(s.name)}
                      onChange={(e) => {
                        if (!e.target.checked)
                          setSelectedStatus(selectedStatus.filter((b) => b.name !== s.name));
                        else if (!selectedStatus.some((ss) => ss.name === s.name))
                          setSelectedStatus([...selectedStatus, s]);
                      }}
                    >
                      <Flex align="center">
                        <Circle size="7px" bg={s.color} mr="5px" />
                        {s.name}
                      </Flex>
                    </Checkbox>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _focus={{ boxShadow: 'none' }}>
                  <Box flex="1" textAlign="left">
                    <Text color="#06163F" fontWeight="600" fontSize="15px">
                      Transaction Category
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={1}>
                  <Text
                    onClick={() => SelectUnselectTransaction()}
                    color="#357C95"
                    fontSize="14px"
                    cursor="pointer"
                  >
                    Select/Unselect All
                  </Text>

                  {transaction.map((t) => (
                    <Checkbox
                      key={t.name}
                      isChecked={changeTransaction(t.name)}
                      onChange={(e) => {
                        if (!e.target.checked)
                          setSelectedTransaction(
                            selectedTransaction.filter((b) => b.name !== t.name)
                          );
                        else if (!selectedTransaction.some((st) => st.name === t.name))
                          setSelectedTransaction([...selectedTransaction, t]);
                      }}
                    >
                      <Flex align="center">
                        <Circle size="7px" bg={t.color} mr="5px" />
                        {t.name}
                      </Flex>
                    </Checkbox>
                  ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _focus={{ boxShadow: 'none' }}>
                  <Box flex="1" textAlign="left">
                    <Text color="#06163F" fontWeight="600" fontSize="15px">
                      Payment Type
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}></AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _focus={{ boxShadow: 'none' }}>
                  <Box flex="1" textAlign="left">
                    <Text color="#06163F" fontWeight="600" fontSize="15px">
                      Expiration Date
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={1}>
                  <Flex direction="row" align="center">
                    <Box pos="relative">
                      <Input placeholder="YYYY" type="text" pattern="[0-9]*" maxLength={4} />
                    </Box>
                    <Box px="2">/</Box>
                    <Box pos="relative">
                      <Input placeholder="MM" type="text" pattern="[0-9]*" maxLength={2} />
                    </Box>
                  </Flex>
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _focus={{ boxShadow: 'none' }}>
                  <Box flex="1" textAlign="left">
                    <Text color="#06163F" fontWeight="600" fontSize="15px">
                      Deposit ID
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={1} pos="relative">
                  <Input
                    placeholder="Deposit ID"
                    mb="2"
                    pt="10px"
                    value={depositId}
                    onChange={(e) => setDepositId(e.target.value)}
                  />
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _focus={{ boxShadow: 'none' }}>
                  <Box flex="1" textAlign="left">
                    <Text color="#06163F" fontWeight="600" fontSize="15px">
                      Chargeback ID
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={1} pos="relative">
                  <Input
                    placeholder="Chargeback ID"
                    mb="2"
                    pt="10px"
                    value={chargebackId}
                    onChange={(e) => setChargebackId(e.target.value)}
                  />
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton _focus={{ boxShadow: 'none' }}>
                  <Box flex="1" textAlign="left">
                    <Text color="#06163F" fontWeight="600" fontSize="15px">
                      Currency
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={1}>
                  <Input
                    placeholder="Search"
                    mb="2"
                    onChange={(e) => setCurrencyFilter(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <Text
                    onClick={() => SelectUnselectCurrency()}
                    color="#357C95"
                    fontSize="14px"
                    cursor="pointer"
                  >
                    Select/Unselect All
                  </Text>

                  {currency
                    .filter((c) => c.includes(currencyFilter))
                    .map((currency) => (
                      <Checkbox
                        key={currency}
                        isChecked={selectedCurrency.includes(currency)}
                        onChange={(e) => {
                          if (!e.target.checked)
                            setSelectedCurrency(selectedCurrency.filter((b) => b !== currency));
                          else if (!selectedCurrency.includes(currency))
                            setSelectedCurrency([...selectedCurrency, currency]);
                        }}
                      >
                        {currency}
                      </Checkbox>
                    ))}
                </SimpleGrid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default TransactionFilterModal;
