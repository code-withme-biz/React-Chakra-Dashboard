import {
  useBoolean,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverBody,
  chakra,
  Flex,
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
import { FC, useEffect, useState } from 'react';
import SvgIcon from '~/components/SvgIcon';
import {
  filterIcon
} from '~/ions/common/Index';

interface Props {
  setFilterDisputes?: any;
  closeTag?: any;
}

export const DisputesFilter: FC<Props> = ({setFilterDisputes,closeTag}) => {
  const brands = ['Location name 1', 'Location name 11', 'Location name 2', 'Location name 3'];
  const currency = ['USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CHF', 'CNH', 'HKD'];
  const cards = [
    'Visa',
    'MasterCard',
    'Discover',
    'American Express',
    'JCB',
    'Dyners Club',
    'Maestro'
  ];

  const [showingFilters, setShowingFilters] = useBoolean();
  const [showexpirationDateY, setShowexpirationDateY] = useState(false);
  const [showexpirationDateM, setShowexpirationDateM] = useState(false);
  const [locationFilter, setLocationFilter] = useState('');
  const [currencyFilter, setCurrencyFilter] = useState('');
  const [totalCount, setTotalCount] = useState<Number>();
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedCard, setSelectedCard] = useState<string[]>([]);
  const [selectedCurrency, setSelectedCurrency] = useState<string[]>([]);

  const handleSelectUnselectAll = () => {
    setSelectedLocation(selectedLocation.length === 0 ? brands : []);
  };
  const SelectUnselectCard = () => {
    setSelectedCard(selectedCard.length === 0 ? cards : []);
  };
  const SelectUnselectCurrency = () => {
    setSelectedCurrency(selectedCurrency.length === 0 ? currency : []);
  };

  useEffect(()=>{
    if(closeTag){
      switch (closeTag.key) {
      case 'MID':
        var indexL = selectedLocation.indexOf(closeTag.item);
        if (indexL >= 0) selectedLocation.splice( indexL, 1 );
        setSelectedLocation(selectedLocation)  
        break;
      case 'CardType':
        var indexC = selectedCard.indexOf(closeTag.item);
        if (indexC >= 0) selectedCard.splice( indexC, 1 );
        setSelectedCard(selectedCard)  
        break;
      case 'Currency':
        var indexR = selectedCurrency.indexOf(closeTag.item);
        if (indexR >= 0) selectedCurrency.splice( indexR, 1 );
        setSelectedCurrency(selectedCurrency)  
        break;
      default:
        break;
    }
    Filterdisputes()
    }
  },[closeTag])
  
  const manageAllCheckbox = (key:any,e:any,brand:any) => {
    switch (key) {
      case 'location':
        if (!e.target.checked)
          setSelectedLocation(selectedLocation.filter((b) => b !== brand));
        else if (!selectedLocation.includes(brand))
          setSelectedLocation([...selectedLocation, brand]);
        break;
      case 'cardtype':
        if (!e.target.checked)
          setSelectedCard(selectedCard.filter((b) => b !== brand));
        else if (!selectedCard.includes(brand))
          setSelectedCard([...selectedCard, brand]);
        break;
      case 'currency':
        if (!e.target.checked)
          setSelectedCurrency(selectedCurrency.filter((b) => b !== brand));
        else if (!selectedCurrency.includes(brand))
          setSelectedCurrency([...selectedCurrency, brand]);
        break;
      default:
        break;
    }
  }

  const Filterdisputes = () => {
    setShowingFilters.off()
    setFilterDisputes({
      'MID' : selectedLocation,
      'CardType': selectedCard,
      'Currency': selectedCurrency
    })
    const filterOne = [selectedLocation.length , selectedCard.length , selectedCurrency.length]
    let counter = 0
    for(let x of filterOne) {
      if(x > 0) counter++
    }
    setTotalCount(counter)
  }

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
          leftIcon={<SvgIcon color={totalCount?'#FFF':'#384453'}>{filterIcon}</SvgIcon>}
          color={totalCount?'#FFF':'#384453'}
          background={totalCount?'#357C95':'#EBEEF5'}
          _hover={{background:totalCount?'#357C95':'#EBEEF5'}}
        >
          Filter {totalCount ? '('+totalCount+')' : ''} 
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverBody>
          <chakra.div mb="3">
            <Flex justify={'space-between'} align="center" fontSize="14px" w="100%">
              <Text color={'gray'}>Filter By</Text>
              <Button size="sm" background="#357C95" color="#fff" onClick={()=>Filterdisputes()}>
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
                      {' '}
                      Location (MID){' '}
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

                  {brands
                    .filter((b) => b.toLowerCase().includes(locationFilter))
                    .map((brand) => (
                      <Checkbox
                        key={brand}
                        isChecked={selectedLocation.includes(brand)}
                        onChange={(e) => manageAllCheckbox('location',e,brand)}
                      >
                        {brand}
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
                      {' '}
                      Card Type{' '}
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
                    onClick={() => SelectUnselectCard()}
                    color="#357C95"
                    fontSize="14px"
                    cursor="pointer"
                  >
                    Select/Unselect All
                  </Text>

                  {cards
                    .filter((b) => b.toLowerCase().includes(locationFilter))
                    .map((card) => (
                      <Checkbox
                        key={card}
                        isChecked={selectedCard.includes(card)}
                        onChange={(e) => manageAllCheckbox('cardtype',e,card) }
                      >
                        {card}
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
                      {' '}
                      Expiration Date{' '}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <SimpleGrid columns={1}>
                  <Flex direction="row" align="center">
                    <Box pos="relative">
                      <Input
                        placeholder="YYYY"
                        type="text"
                        pattern="[0-9]*"
                        maxLength={4}
                        onChange={(e) => {
                          e.target.value > 0
                            ? setShowexpirationDateY(true)
                            : setShowexpirationDateY(false);
                        }}
                      />
                      {showexpirationDateY ? (
                        <Text
                          pos="absolute"
                          top="15%"
                          right="4%"
                          color="#357C95"
                          fontSize="14px"
                          z-index="3"
                          onClick={() => setShowexpirationDateY(false)}
                        >
                          Clear
                        </Text>
                      ) : (
                        ''
                      )}
                    </Box>
                    <Box px="2">/</Box>
                    <Box pos="relative">
                      <Input
                        placeholder="MM"
                        type="text"
                        pattern="[0-9]*"
                        maxLength={2}
                        onChange={(e) => {
                          e.target.value > 0
                            ? setShowexpirationDateM(true)
                            : setShowexpirationDateM(false);
                        }}
                      />
                      {showexpirationDateM ? (
                        <Text
                          pos="absolute"
                          top="15%"
                          right="4%"
                          color="#357C95"
                          fontSize="14px"
                          z-index="3"
                          onClick={() => setShowexpirationDateM(false)}
                        >
                          Clear
                        </Text>
                      ) : (
                        ''
                      )}
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
                      {' '}
                      Currency{' '}
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
                    .filter((b) => b.toLowerCase().includes(currencyFilter))
                    .map((currency) => (
                      <Checkbox
                        key={currency}
                        isChecked={selectedCurrency.includes(currency)}
                        onChange={(e) => manageAllCheckbox('currency',e,currency) }
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
