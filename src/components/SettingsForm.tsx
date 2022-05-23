import { FC } from 'react';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import TextField from '~/components/TextField';

export interface ClientProps {
  id: number;
  name: string;
}

interface SettingsForm {
  clientId?: number;
  taxRate: number;
  setupFee: number;
  consultingFee: number;
  customDevelopmentRate: number;
  supportRate: number;
  dataRecoveryRate: number;
  auditLogForensicsRate: number;
  newMerchantApplicationRate: number;
  newMerchantApplicationSecondaryLocationRate: number;
  newWorldPayMerchantApplicationRate: number;
  newWorldPayMerchantApplicationSecondaryLocationRate: number;
  coBrandMonthlyRate: number;
  tinCheckUWRate: number;
  tinCheckUWRateDebugging: number;
  infiniscoreUWRate: number;
  infiniscoreUWRateDebugging: number;
  idologyUWRate: number;
  zootUWRate: number;
  g2CompassUWRate: number;
  g2CompassPlusUWRate: number;
}

interface SettingsFormProps {
  onSubmit: (data: { email: string }) => void;
  clients?: ClientProps[];
}

const SettingsForm: FC<SettingsFormProps> = ({ onSubmit, clients = [] }) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<SettingsForm>();
  const { t } = useTranslation('settings');

  return (
    <Box
      // bg='red'
      borderRadius={6}
      mt={5}
      pt={5}
      px={8}
      pb={3.5}
    >
      {!!clients.length && (
        <FormControl isInvalid={!!errors.clientId?.message}>
          <FormErrorMessage>{errors.clientId?.message}</FormErrorMessage>
          <FormLabel htmlFor="clientId">{t('fields.clientId')}</FormLabel>
          <Select
            {...register('clientId', {
              required: t('errors.required')
            })}
          >
            <option value=""></option>
            {clients.map((item, key) => (
              <option value={item.id} key={key}>
                {item.name}
              </option>
            ))}
          </Select>
        </FormControl>
      )}
      <FormControl isInvalid={!!errors.taxRate?.message}>
        <FormErrorMessage>{errors.taxRate?.message}</FormErrorMessage>
        <TextField
          {...register('taxRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.taxRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.setupFee?.message}>
        <FormErrorMessage>{errors.setupFee?.message}</FormErrorMessage>
        <TextField
          {...register('setupFee', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.setupFee')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.consultingFee?.message}>
        <FormErrorMessage>{errors.consultingFee?.message}</FormErrorMessage>
        <TextField
          {...register('consultingFee', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.consultingFee')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.customDevelopmentRate?.message}>
        <FormErrorMessage>{errors.customDevelopmentRate?.message}</FormErrorMessage>
        <TextField
          {...register('customDevelopmentRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.customDevelopmentRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.supportRate?.message}>
        <FormErrorMessage>{errors.supportRate?.message}</FormErrorMessage>
        <TextField
          {...register('supportRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.supportRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.dataRecoveryRate?.message}>
        <FormErrorMessage>{errors.dataRecoveryRate?.message}</FormErrorMessage>
        <TextField
          {...register('dataRecoveryRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.dataRecoveryRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.auditLogForensicsRate?.message}>
        <FormErrorMessage>{errors.auditLogForensicsRate?.message}</FormErrorMessage>
        <TextField
          {...register('auditLogForensicsRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.auditLogForensicsRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.newMerchantApplicationRate?.message}>
        <FormErrorMessage>{errors.newMerchantApplicationRate?.message}</FormErrorMessage>
        <TextField
          {...register('newMerchantApplicationRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.newMerchantApplicationRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.newMerchantApplicationSecondaryLocationRate?.message}>
        <FormErrorMessage>
          {errors.newMerchantApplicationSecondaryLocationRate?.message}
        </FormErrorMessage>
        <TextField
          {...register('newMerchantApplicationSecondaryLocationRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.newMerchantApplicationSecondaryLocationRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.newWorldPayMerchantApplicationRate?.message}>
        <FormErrorMessage>{errors.newWorldPayMerchantApplicationRate?.message}</FormErrorMessage>
        <TextField
          {...register('newWorldPayMerchantApplicationRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.newWorldPayMerchantApplicationRate')}
        />
      </FormControl>
      <FormControl
        isInvalid={!!errors.newWorldPayMerchantApplicationSecondaryLocationRate?.message}
      >
        <FormErrorMessage>
          {errors.newWorldPayMerchantApplicationSecondaryLocationRate?.message}
        </FormErrorMessage>
        <TextField
          {...register('newWorldPayMerchantApplicationSecondaryLocationRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.newWorldPayMerchantApplicationSecondaryLocationRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.coBrandMonthlyRate?.message}>
        <FormErrorMessage>{errors.coBrandMonthlyRate?.message}</FormErrorMessage>
        <TextField
          {...register('coBrandMonthlyRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.coBrandMonthlyRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.tinCheckUWRate?.message}>
        <FormErrorMessage>{errors.tinCheckUWRate?.message}</FormErrorMessage>
        <TextField
          {...register('tinCheckUWRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.tinCheckUWRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.tinCheckUWRateDebugging?.message}>
        <FormErrorMessage>{errors.tinCheckUWRateDebugging?.message}</FormErrorMessage>
        <TextField
          {...register('tinCheckUWRateDebugging', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.tinCheckUWRateDebugging')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.infiniscoreUWRate?.message}>
        <FormErrorMessage>{errors.infiniscoreUWRate?.message}</FormErrorMessage>
        <TextField
          {...register('infiniscoreUWRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.infiniscoreUWRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.infiniscoreUWRateDebugging?.message}>
        <FormErrorMessage>{errors.infiniscoreUWRateDebugging?.message}</FormErrorMessage>
        <TextField
          {...register('infiniscoreUWRateDebugging', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.infiniscoreUWRateDebugging')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.idologyUWRate?.message}>
        <FormErrorMessage>{errors.idologyUWRate?.message}</FormErrorMessage>
        <TextField
          {...register('idologyUWRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.idologyUWRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.zootUWRate?.message}>
        <FormErrorMessage>{errors.zootUWRate?.message}</FormErrorMessage>
        <TextField
          {...register('zootUWRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.zootUWRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.g2CompassUWRate?.message}>
        <FormErrorMessage>{errors.g2CompassUWRate?.message}</FormErrorMessage>
        <TextField
          {...register('g2CompassUWRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.g2CompassUWRate')}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.g2CompassPlusUWRate?.message}>
        <FormErrorMessage>{errors.g2CompassPlusUWRate?.message}</FormErrorMessage>
        <TextField
          {...register('g2CompassPlusUWRate', {
            required: t('errors.required'),
            min: { value: 0, message: t('errors.shouldBePositiveNumber') }
          })}
          ref={null}
          placeholder={t('fields.g2CompassPlusUWRate')}
        />
      </FormControl>
      <Button onClick={handleSubmit(onSubmit)}>Save</Button>
    </Box>
  );
};

export default SettingsForm;
