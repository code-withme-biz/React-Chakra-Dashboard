import { Box, Input, InputProps } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Label } from '~/components/typography';
import { Ref } from 'react-hook-form';

interface TextFieldProps {
  ref: Ref | null;
}

/**
 * Outlined text input field with small label inside input border displaying on focus
 *
 * @example usage with react-hook-form inside a function component:
 *   const { handleSubmit, register, formState: { errors } } = useForm<FormProps>();
 *   return (
 *     <FormControl isInvalid={!!errors.someField?.message}>
 *       <FormErrorMessage>{errors.someField?.message}</FormErrorMessage>
 *       <TextField
 *         {...register('someField', {
 *           required: t('errors.required'),
 *         })}
 *         ref={null}
 *         placeholder={t('fields.someField')}
 *       />
 *     </FormControl>
 *   )
 */
const TextField: FC<TextFieldProps & InputProps> = ({ placeholder, ...props }) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  return (
    <Box position="relative">
      {(focused || hasValue) && (
        <Box position="absolute" top={2} left={4} color="gray.400">
          <Label>{placeholder}</Label>
        </Box>
      )}
      <Input
        {...props}
        ref={null}
        variant="outline"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => {
          setHasValue(!!e.target.value);
          props.onChange && props.onChange(e);
        }}
        sx={{
          paddingTop: hasValue ? '24px' : '16px'
        }}
        placeholder={!focused ? placeholder : ''}
      />
    </Box>
  );
};

export default TextField;
