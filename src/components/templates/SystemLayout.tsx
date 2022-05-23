import { FC, useState } from 'react';
import { Box, Container, Divider, Heading, Spacer, useBreakpointValue } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '~/components/layout/Sidebar';
import Header from '~/components/layout/Header';

export const SystemLayout: FC = () => {
  const { t } = useTranslation('system');
  const notMobile = useBreakpointValue({ base: false, md: true });
  const [mobileSidebarOpened, setMobileSidebarOpened] = useState(false);
  const [searchLocationVal, setSearchLocationVal] = useState('');

  const searchLocation = (query: string) => {
    setSearchLocationVal(query);
  };

  const { pathname } = useLocation();
  return (
    <>
      <Sidebar
        permanent={notMobile}
        isOpen={mobileSidebarOpened}
        onClose={() => setMobileSidebarOpened(false)}
        searchLocation={searchLocation}
      />
      <Box ml={notMobile ? '70px' : 0} bg="#F7F9FF" h="100%" minH="100%">
        <Header
          showHamburgerButton={!notMobile}
          toggleSidebar={() => setMobileSidebarOpened(!mobileSidebarOpened)}
        />
        <Divider />
        <Container maxWidth="unset" px={pathname == '/dashboard' ? '45px' : '10px'} mt="5">
          <Spacer h={4} />

          <Heading>{t('heading')}</Heading>

          <Outlet />
        </Container>
      </Box>
    </>
  );
};
