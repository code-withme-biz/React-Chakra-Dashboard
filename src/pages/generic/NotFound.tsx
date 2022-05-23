import { FC } from 'react';
import { Button, Center, Container, Heading, Link, Spacer, Text, VStack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const NotFound: FC = () => {
  const { t } = useTranslation('notFound');
  return (
    <Container>
      <Spacer h="16" />
      <Center>
        <VStack>
          <Heading display="inline-block" as="h2" size="2xl">
            404
          </Heading>
          <Text fontSize="18px" mt={3} mb={2}>
            {t('heading')}
          </Text>
          <Spacer h="16" />
          <Link href="/">
            <Button>{t('goHome')}</Button>
          </Link>
        </VStack>
      </Center>
    </Container>
  );
};

export default NotFound;
