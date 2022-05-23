import { FC, useState, useEffect } from 'react';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, Stack } from '@chakra-ui/react';
import { DateRangePicker, defaultStaticRanges } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { addDays, endOfDay, addYears, startOfYear, endOfYear, isSameDay } from 'date-fns';

interface Props {
  isOpen: boolean;
  allowRange?: boolean;
  onClose: () => void;
  onSetDates: (startDate: Date | null, endDate: Date | null) => void;
}

export const DateFilter: FC<Props> = ({ isOpen, allowRange = false, onClose, onSetDates }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 7));
  const [key, setKey] = useState('selection');

  useEffect(() => {
    onSetDates(startDate, endDate);
  }, [startDate, endDate]);

  const changeDateInput = () => {
    onClose();
    onSetDates(startDate, endDate);
  };
  const nullDateInput = () => {
    onClose();
    onSetDates(null, null);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent width="auto" maxWidth="auto">
        <ModalBody>
          <DateRangePicker
            direction="horizontal"
            months={2}
            ranges={[{ startDate, endDate, key }]}
            onChange={(item) => {
              if (!item.selection.startDate || !item.selection.endDate || !item.selection.key)
                return;
              setStartDate(item.selection.startDate);
              setEndDate(item.selection.endDate);
              setKey(item.selection.key);
            }}
            staticRanges={
              allowRange
                ? [
                    ...defaultStaticRanges,
                    {
                      label: 'Last year',
                      range: () => ({
                        startDate: startOfYear(addYears(new Date(), -1)),
                        endDate: endOfYear(addYears(new Date(), -1))
                      }),
                      isSelected(range) {
                        const definedRange = this.range();
                        if (!range.startDate || !range.endDate) return false;
                        if (!definedRange.startDate || !definedRange.endDate) return false;
                        return (
                          isSameDay(range.startDate, definedRange.startDate) &&
                          isSameDay(range.endDate, definedRange.endDate)
                        );
                      }
                    },
                    {
                      label: 'This year',
                      range: () => ({
                        startDate: startOfYear(new Date()),
                        endDate: endOfDay(new Date())
                      }),
                      isSelected(range) {
                        const definedRange = this.range();
                        if (!range.startDate || !range.endDate) return false;
                        if (!definedRange.startDate || !definedRange.endDate) return false;
                        return (
                          isSameDay(range.startDate, definedRange.startDate) &&
                          isSameDay(range.endDate, definedRange.endDate)
                        );
                      }
                    }
                  ]
                : [...defaultStaticRanges]
            }
          />
        </ModalBody>
        <ModalFooter pos="absolute" right={0} bottom={0}>
          <Stack spacing={3} direction="row">
            <Button onClick={() => nullDateInput()}> Cancel </Button>
            <Button color="#FFF" bg="#357C95" onClick={() => changeDateInput()}>
              Apply
            </Button>
          </Stack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
