import { ElementType, useEffect, useState } from 'react';
import { Checkbox, VStack } from '@chakra-ui/react';

interface MultiChoiceProps<T> {
  options: T[];
  getOptionKey: (option: T) => number;
  getOptionLabel: (option: T) => string;
  onChange: (values: number[]) => void;
  checkedValues?: T[];
}

const hashKeys = (keys: number[]): Record<string, boolean> =>
  keys.reduce(
    (map: Record<string, boolean>, optionKey: number) => ({
      ...map,
      [optionKey.toString()]: true
    }),
    {}
  );
const MultiChoice: ElementType = <T extends Record<string, object>>({
  options,
  getOptionKey,
  getOptionLabel,
  onChange,
  checkedValues = []
}: MultiChoiceProps<T>) => {
  /**
   * transform incoming array of option keys into internal hash map state
   *
   * @example [ 1, 4, 5 ] => { '1': true, '4': true, '5': true }
   */
  const [values, setValues] = useState<Record<number, boolean>>(
    hashKeys(checkedValues.map((item: T) => getOptionKey(item)))
  );

  /**
   * call external onChange() with each change of values set
   * transform hash map back into array of option keys
   */
  useEffect(
    () =>
      onChange(
        Object.keys(values)
          .filter((key) => values[parseInt(key)])
          .map((key) => parseInt(key))
      ),
    [values]
  );

  const toggle = (optionKey: number) => {
    setValues({
      ...values,
      [optionKey]: !values[optionKey]
    });
  };

  return (
    <VStack align="left">
      {options.map((option: T, key) => (
        <Checkbox
          value={getOptionKey(option)}
          onChange={() => toggle(getOptionKey(option))}
          isChecked={values[getOptionKey(option)]}
          key={key}
        >
          {getOptionLabel(option)}
        </Checkbox>
      ))}
    </VStack>
  );
};

export default MultiChoice;
