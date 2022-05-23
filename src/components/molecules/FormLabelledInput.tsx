import { ReactElement, useMemo } from 'react';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Select,
  SelectProps
} from '@chakra-ui/react';
import { FieldError, FieldErrors, FieldPath } from 'react-hook-form';
import { FormState, UseFormRegister } from 'react-hook-form/dist/types/form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

export interface FormLabelledInputProps<F extends Record<string, string>> {
  register: UseFormRegister<F>;
  formState: FormState<F>;
  name: keyof FieldErrors<F>;
  requiredMessage: string;
  invalidMessage: string;
  label: string;
  registerOptions?: RegisterOptions<F>;
  children?: SelectProps['children'];
  inputProps?: InputProps;
  selectProps?: SelectProps;
}

export const FormLabelledInput = <FormType extends Record<string, string>>({
  register,
  formState: { errors },
  name,
  label,
  requiredMessage,
  invalidMessage,
  registerOptions,
  inputProps,
  selectProps,
  children
}: FormLabelledInputProps<FormType>): ReactElement => {
  const errorMessage = (errors[name] as FieldError)?.message;
  const inputPropsMemo = useMemo(
    () => ({
      ...register(name as FieldPath<FormType>, {
        required: requiredMessage,
        minLength: { value: 4, message: invalidMessage },
        ...registerOptions
      })
    }),
    [register, inputProps]
  );
  return (
    <FormControl isInvalid={!!errorMessage}>
      <Flex alignItems="baseline">
        <FormLabel htmlFor={name as string}>{label}</FormLabel>
        <Flex direction="column" flex={1} justifySelf="flex-end">
          {children ? (
            <Select {...inputPropsMemo} {...selectProps}>
              {children}
            </Select>
          ) : (
            <Input {...inputPropsMemo} {...inputProps} />
          )}
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </Flex>
      </Flex>
    </FormControl>
  );
};
