import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra,
  Flex,
  Badge,
  Text,
  Box,
  IconButton,
  SimpleGrid,
  Select,
  Tooltip,
  Stack
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useTable, useSortBy, Column, PluginHook, Row, usePagination } from 'react-table';
import Arrows from '~/assets/images/up-down-arrow.svg';
import nextpageIcon from '~/assets/images/nextpageIcon.svg';
import previouspageIcon from '~/assets/images/previouspageIcon.svg';
import ReactPaginate from 'react-paginate';
import { AnymatchPattern } from 'vite';

export interface DataTableProps<T extends object> {
  columns?: Column<T>[];
  data?: T[];
  plugins?: PluginHook<T>[];
  descriptionIndex?: number;
  onRowClick?: (row: Row<T>) => void;
  selectedColumn?: string[];
  showingPage?: number;
}

export const DataTable = <T extends object>({
  columns,
  data,
  plugins = [],
  descriptionIndex,
  selectedColumn,
  showingPage,
  onRowClick
}: DataTableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    setPageSize,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    gotoPage,
    setHiddenColumns,
    state: { pageSize, pageIndex }
  } = useTable({ columns, data }, useSortBy, ...plugins, usePagination);

  const [pageNumber, setPageNumber] = useState(Number);  
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const handlePageClick = (event: any) => {
    gotoPage(event.selected);
    const newOffset = (event.selected * pageSize) % data.length;
    setItemOffset(newOffset);
  };
  showingPage(page.length ? page.length : 0);
  
  useEffect(() => {
    setPageSize(10);
  }, []);
  useEffect(() => {
    if (data && data.length > 0) {
      setPageNumber(Math.ceil(data.length / page.length));
    } else setPageNumber(1);
  }, [data, pageSize]);
  useEffect(() => {
    if (selectedColumn) {
      setHiddenColumns(selectedColumn);
    }
  }, [selectedColumn]);
  useEffect(() => {
    setPageCount(Math.ceil(data.length / pageSize));
  }, [pageNumber, pageSize, page, itemOffset]);

  return (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            // eslint-disable-next-line react/jsx-key -- It's obtained from header group props
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <Th {...column.getHeaderProps()} cursor="pointer">
                    <Flex w="100%">
                      <Box width="60%" fontSize="12px">
                        {column.render('Header')}
                      </Box>
                      {headerGroup.headers.length - 1 !== index && (
                        <Box pl="2" width="40%">
                          <img src={Arrows} />
                        </Box>
                      )}
                    </Flex>
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>

        <Tbody {...getTableBodyProps()} background="white" borderRadius="10px">
          {page.map((row: any) => {
            prepareRow(row);
            return (
              // TODO: Add onHover Effect.
              // eslint-disable-next-line react/jsx-key -- It's obtained from row props
              <Tr {...row.getRowProps()} onClick={() => onRowClick && onRowClick(row)}>
                {row.cells.map((cell: any, index: any) => {
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <Td lineHeight="16px" py="2" {...cell.getCellProps()} fontSize="14px">
                      {cell.column.badge == true ? (
                        <Badge
                          px="3"
                          py="1"
                          colorScheme={cell.column.colorScheme && cell.column.colorScheme}
                          bg={cell.column.bBg && cell.column.bBg}
                          color={cell.column.bColor && cell.column.bColor}
                        >
                          {cell.render('Cell')}
                        </Badge>
                      ) : cell.column.subAmt == true ? (
                        <>
                          <Text align="right">{cell.render('Cell')}</Text>
                          <Text align="right" color="#7F879F" fontSize="12px">
                            USD
                          </Text>
                        </>
                      ) : (
                        <chakra.span>{cell.render('Cell')}</chakra.span>
                      )}
                      {index === descriptionIndex ? (
                        <chakra.div color="#7F879F">{index === 0 && 'Harrison 55'}</chakra.div>
                      ) : (
                        ''
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <SimpleGrid columns={3} spacing={1} p="10">
        <Flex align="center">
          <Text color="#7F879F" fontSize="15px" mr="2">
            Showed Result
          </Text>
          <Select
            w={32}
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </Select>
        </Flex>
        <Stack spacing={2} m="auto" direction="row">
          {/* <Tooltip label="Previous Page">
            <IconButton
              onClick={previousPage}
              isDisabled={!canPreviousPage}
              aria-label="previouspageIcon"
              icon={<img src={previouspageIcon} />}
            />
          </Tooltip> */}

          <ReactPaginate
            breakLabel="..."
            onPageChange={(event) => handlePageClick(event)}
            pageCount={pageCount}
            previousLabel={<img src={previouspageIcon} onClick={previousPage} />}
            nextLabel={<img src={nextpageIcon} onClick={nextPage} />}
            pageClassName="page-item"
            previousClassName="page-item"
            nextClassName="page-item"
            breakClassName="page-item"
            containerClassName="pagination"
            activeClassName="active"
          />

          {/* <Tooltip label="Next Page">
            <IconButton
              onClick={nextPage}
              isDisabled={!canNextPage}
              aria-label="nextpageIcon"
              icon={<img src={nextpageIcon} />}
            />
          </Tooltip> */}
        </Stack>
      </SimpleGrid>
    </>
  );
};
