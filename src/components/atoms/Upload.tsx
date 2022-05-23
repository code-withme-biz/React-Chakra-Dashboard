import { FC, RefObject, useCallback, useRef } from 'react';
import { useDropzone, DropzoneInputProps } from 'react-dropzone';
import { Center, Text, Icon, VStack, HStack, Button } from '@chakra-ui/react';
import { AttachmentIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

export interface UploadProps extends DropzoneInputProps {
  onFileAccepted: (file: File) => void;
}

export const Upload: FC<UploadProps> = ({ onFileAccepted, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation('common');

  const onDrop = useCallback(
    (acceptedFiles) => {
      onFileAccepted(acceptedFiles);
    },
    [onFileAccepted]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop
  });

  const inputProps = getInputProps(props);

  return (
    <Center
      p={10}
      cursor="pointer"
      bg={isDragActive ? 'gray.100' : 'transparent'}
      _hover={{ bg: 'gray.100' }}
      transition="background-color 0.2s ease"
      borderRadius={4}
      border="3px dashed"
      borderColor={isDragActive ? 'teal.500' : 'gray.500'}
      {...getRootProps()}
    >
      <VStack>
        <HStack>
          <Icon as={AttachmentIcon} mr={2} />
          <Text>
            {isDragActive ? t('components.upload.dropHere') : t('components.upload.dragAndDrop')}
          </Text>
        </HStack>
        <Center>
          <input ref={inputRef} type="file" {...inputProps} />
          <Button
            onClick={() =>
              (
                inputProps as typeof inputProps & { ref: RefObject<HTMLInputElement> }
              )?.ref?.current?.click()
            }
          >
            {t('components.upload.attachFile')}
          </Button>
        </Center>
      </VStack>
    </Center>
  );
};
