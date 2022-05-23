import React from 'react';
import { Table, Thead, Tr, Th, Tbody, Td, Flex, Circle } from '@chakra-ui/react';
import { GrayText, TableCaption } from '~/components/typography';

interface TableChartItem {
  id: string;
  color: string;
}

export interface TableChartProps<T extends TableChartItem> {
  data: T[];
}

export const TableChart = <T extends TableChartItem>({ data }: TableChartProps<T>) => {
  function currencyFormat(num: number) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  return (
    <>
      <Table size="sm" fontSize="16px" color="#000000" mt="10" maxWidth="auto">
        <Thead>
          <Tr fontSize="16px" color="#000000">
            <Th></Th>
            <Th isNumeric>
              <GrayText color="#7F879F" fontWeight="400">
                QTY
              </GrayText>
            </Th>
            <Th isNumeric>
              <GrayText color="#7F879F" fontWeight="400">
                Q%
              </GrayText>
            </Th>
            <Th isNumeric>
              <GrayText color="#7F879F" fontWeight="400">
                Amount
              </GrayText>
            </Th>
            <Th isNumeric>
              <GrayText color="#7F879F" fontWeight="400">
                A%
              </GrayText>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((itm) => {
            return (
              <React.Fragment key={itm.id}>
                <Tr>
                  <Td>
                    <Flex>
                      <Circle size="14px" bg={itm.color} mr="5px" />
                      <GrayText>{itm.id}</GrayText>
                    </Flex>
                  </Td>
                  <Td isNumeric>
                    <TableCaption>5</TableCaption>
                  </Td>
                  <Td isNumeric>
                    <TableCaption>75.11</TableCaption>
                  </Td>
                  <Td isNumeric>
                    <TableCaption>{currencyFormat(40209.456)} USD</TableCaption>
                  </Td>
                  <Td isNumeric>
                    <TableCaption>75</TableCaption>
                  </Td>
                </Tr>
              </React.Fragment>
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};
