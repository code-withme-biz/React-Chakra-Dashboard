import { FC } from 'react';
import { Button, Container, Divider, Flex, Heading, Spacer } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Locale } from '~/ions/locale/locale';
import { Link, Outlet, useLocation } from 'react-router-dom';

// TODO: Reverse mapping once more info is obtained.
const tabs: Record<keyof Locale['client']['tabs'], string> = {
  cobrands: 'cobrands',
  users: 'users',
  submerchantDashboards: 'submerchantDashboards'
};

interface TabButtonProps {
  tab: keyof Locale['client']['tabs'];
}
const TabButton: FC<TabButtonProps> = ({ tab }) => {
  const { t } = useTranslation('client');
  const location = useLocation();
  const relPath = location.pathname.substring(0, '/client'.length);
  return (
    <Button mr={2} mb={2}>
      <Link to={`${tabs[tab]}`} className={relPath === tab ? 'active' : ''}>
        {t(`tabs.${tab}`)}
      </Link>
    </Button>
  );
};

export const ClientLayout: FC = () => {
  const { t } = useTranslation('client');

  return (
    <Container maxWidth="1440">
      <Spacer h={4} />

      <Heading>{t('heading')}</Heading>

      <Spacer h={4} />
      <Divider />
      <Spacer h={2} />

      <Flex flexWrap="wrap">
        {Object.keys(tabs).map((tab) => (
          <TabButton key={tab} tab={tab as keyof Locale['client']['tabs']} />
        ))}
      </Flex>

      <Spacer h={2} />
      <Divider />
      <Spacer h={8} />

      <Outlet />
    </Container>
  );
};
