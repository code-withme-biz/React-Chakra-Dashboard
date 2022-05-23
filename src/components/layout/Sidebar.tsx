import React, { FC, useState } from 'react';
import {
  Drawer,
  Box,
  Image,
  VStack,
  Text,
  Link,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerCloseButton,
  chakra,
  Circle,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Input,
  Badge,
  InputGroup,
  InputRightElement,
  SimpleGrid
} from '@chakra-ui/react';
import linkDownarraow from '~/assets/images/linkDownarraow.svg';
import merchantIcon from '~/assets/images/merchantIcon.svg';
import workwavwIcon from '~/assets/images/workwavwIcon.svg';
import { useLocation } from 'react-router-dom';
import SvgIcon from '~/components/SvgIcon';
import * as sidebarIcons from '../../ions/sidebarIcons';
import { useTranslation } from 'react-i18next';

const SidebarLogo: FC = () => <Image src={merchantIcon} className="mainLogo" alt="logo" />;

interface Props {
  searchLocation: (query: string) => void;
}

const SearchBar: FC<Props> = ({ searchLocation }) => {
  const { t } = useTranslation('navigation');
  const [showClear, setShowClear] = useState(false);

  const PData = [
    {
      name: "Frank's Pizza",
      badge: t('all_locations'),
      address: 'ALL ADDRESSES',
      mid: 'ALL MIDS'
    },
    {
      name: "Frank's Pizza HQ",
      badge: t('parent_location'),
      address: '12th Elm, New york',
      mid: 'MID 999-555-777'
    },
    {
      name: "Frank's Pizza",
      badge: '',
      address: '34th Marlboro Road',
      mid: 'MID 999-555-776'
    },
    {
      name: "Frank's Pizza",
      badge: '',
      address: '34th Marlboro Road',
      mid: 'MID 999-555-778'
    }
  ];

  return (
      <Menu closeOnSelect={false} size="lg" autoSelect={false}>
        <MenuButton w="100%">
          <Flex justifyContent="space-between" alignItems="center">
            <chakra.div textAlign="left">
              <Text fontSize="14px" color="#06163F" fontWeight="600">
                Frank&apos;s Pizza
              </Text>
              <Text color="#7F879F" fontSize="11px">
                {t('all_locations').toUpperCase()}
              </Text>
            </chakra.div>
            <chakra.div>
              <img src={linkDownarraow} />
            </chakra.div>
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <InputGroup size="md">
              <Input
                placeholder="Search by DBA, Address, or MID"
                fontWeight="100"
                fontSize="12px"
                onClick={(e) => e.stopPropagation()}
                onChange={(e) => searchLocation(e.target.value)}
              />
              {showClear ? (
                <InputRightElement width="4.5rem">
                  {' '}
                  <Text color="#357C95">Clear</Text>{' '}
                </InputRightElement>
              ) : (
                ''
              )}
            </InputGroup>
          </MenuItem>

          {PData.map((item) => {
            return (
              <React.Fragment key={item.mid}>
                <MenuItem minH="40px">
                  <Flex direction="column">
                    <Flex direction="row">
                      <Text fontSize="14px" color="#06163F" fontWeight="600">
                        {item.name}
                      </Text>
                      {item.badge && (
                        <Badge marginLeft="5px" borderRadius="10px" background="#357C95">
                          <Text letterSpacing="1px" color="#FFFFFF" fontSize="9px">
                            {item.badge}
                          </Text>
                        </Badge>
                      )}
                    </Flex>
                    <Flex color="#7F879F" fontSize="11px" alignItems="center">
                      <Text className="overflowText"> {item.address}</Text>
                      <Circle size="5px" bg="#7F879F" mr="2" />
                      <Text>{item.mid}</Text>
                    </Flex>
                  </Flex>
                </MenuItem>
                <Divider />
              </React.Fragment>
            );
          })}
        </MenuList>
      </Menu>
  );
};

const getMenuItemColor = (active: boolean) => (active ? 'white' : 'gray.400');

export interface NavigationLink {
  href: string;
  caption: string;
  active?: boolean;
  iconSvg?: React.ReactNode;
}

const SidebarMenuItem: FC<NavigationLink> = ({ href, caption, active = false, iconSvg }) => (
  <div className="menuOptionUl">
    <Text
      className="menuOptionLi"
      variant="navigation"
      color={getMenuItemColor(active)}
      h="40px"
      my="2px"
      as="div"
    >
      <Link href={href} variant={active ? 'sidebarSolid' : 'sidebar'} display='block'>
        <SvgIcon className="fa" color={getMenuItemColor(active)}>
          {iconSvg}
        </SvgIcon>
        <chakra.span ml="5" className="nav-text">
          {caption}
        </chakra.span>
      </Link>
    </Text>
  </div>
);

interface NavigationLinkBottom {
  href: string;
  caption: string;
  active?: boolean;
  iconSvg?: React.ReactNode;
}

const SidebarMenuItemBottom: FC<NavigationLinkBottom> = ({
  href,
  caption,
  active = false,
  iconSvg
}) => (
  <div className="menuOptionUl">
    <Text
      className="menuOptionLi"
      variant="navigation"
      color={getMenuItemColor(active)}
      h="40px"
      my="2px"
      as="div"
    >
      <Link href={href} variant={active ? 'sidebarSolid' : 'sidebar'} display='block'>
        <SvgIcon className="fa" color={getMenuItemColor(active)}>
          {iconSvg}
        </SvgIcon>
        <chakra.span ml="5" className="nav-text">
          {caption}
        </chakra.span>
      </Link>
    </Text>
  </div>
);

const SidebarMenu: FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation('navigation');

  const sidebarMenuItems: NavigationLink[] = [
    {
      href: '/search',
      caption: t('search'),
      iconSvg: sidebarIcons.searchSvg
    },
    {
      href: '/dashboard',
      caption: t('dashboard'),
      iconSvg: sidebarIcons.dashboardSvg
    },
    {
      href: '/transactions',
      caption: t('transactions'),
      iconSvg: sidebarIcons.transactionSvg
    },
    {
      href: '/disputes',
      caption: t('disputes'),
      iconSvg: sidebarIcons.disputesSvg
    },
    {
      href: '/deposit',
      caption: t('deposit'),
      iconSvg: sidebarIcons.depositSvg
    }
  ];

  const sidebarMenuItemsBottom: NavigationLinkBottom[] = [
    {
      href: '/business',
      caption: t('business_profile'),
      iconSvg: sidebarIcons.businessProfileSvg
    },
    {
      href: '/rates',
      caption: t('rates_fee'),
      iconSvg: sidebarIcons.rateFeeSvg
    },
    {
      href: '/account',
      caption: t('user_name'),
      iconSvg: sidebarIcons.userNameSvg
    }
  ];

  return (
    <>
      <Flex flexDirection="column" justifyContent="space-between">
        <VStack alignItems="start" pos="absolute" top="15%">
          {sidebarMenuItems.map((item, key) => (
            <SidebarMenuItem {...item} active={pathname === item.href} key={key} />
          ))}
        </VStack>

        <VStack alignItems="start" position="absolute" bottom="0">
          {sidebarMenuItemsBottom.map((item, key) => (
            <SidebarMenuItemBottom {...item} active={pathname === item.href} key={key} />
          ))}
        </VStack>
      </Flex>
    </>
  );
};

interface SidebarProps {
  permanent?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  searchLocation: (query: string) => void;
}

const Sidebar: FC<SidebarProps> = ({ permanent = true, isOpen = false, onClose = () => null, searchLocation }) => {
  return(
    permanent ? (
      <Box
        position="fixed"
        left={0}
        top={0}
        h="100%"
        pl={3}
        pr={3}
        borderRight="1px"
        borderColor="gray.200"
        className="main-menu"
      >
        <SimpleGrid column={1}>
        <Box height="50px" maxH="50px" mt="3" mb="3">
          <Flex mb="10">
            <Image src={merchantIcon} p="3" alt="logo" />
            <Image src={workwavwIcon} minW="100px" className="mainBigLogo demoLogo" alt="logo" />
          </Flex>
        </Box>
        <Box className="sidebarSearch"  pos="absolute" top="7%" width='170px'>
          <SearchBar searchLocation={searchLocation} />
        </Box>
        <Box>
          <SidebarMenu />
        </Box>
        </SimpleGrid>
      </Box>
    ) : (
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <SidebarLogo />
          </DrawerHeader>
          <DrawerBody>
            <SidebarMenu />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
  )
}

export default Sidebar;
