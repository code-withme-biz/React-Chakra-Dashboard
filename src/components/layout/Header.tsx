import { FC } from 'react';
import {
  Flex,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
  chakra,
  Divider,
  Badge,
  Spacer
} from '@chakra-ui/react';
import { Headline2 } from '~/components/typography';
import { HamburgerIcon } from '@chakra-ui/icons';
import dropDown from '~/assets/images/linkDownarraow.svg';

interface HeaderProps {
  showHamburgerButton: boolean;
  toggleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ showHamburgerButton, toggleSidebar }) => {
  return (
    <>
      <Flex py="2" px="5">
        <GridItem colSpan={9}>
          <Flex>
            <Headline2> Frank&apos;s Pizza </Headline2>
            <Badge borderRadius="10px" ml="3" pl="2" pr="2">
              <Text color="#357C95" fontWeight="600">
                All Location
              </Text>
            </Badge>
          </Flex>
          <Flex mt="1" fontSize="13px">
            <Text fontWeight="500" pr="5">
              LOCATION: <chakra.span color="#384453">ALL LOCATION (5)</chakra.span>
            </Text>
            <Text fontWeight="500" pr="5">
              MERCHANT ID: <chakra.span color="#384453">ALL (5)</chakra.span>
            </Text>
            <Text fontWeight="500">
              PRINCIPAL NAME: <chakra.span color="#384453">Frank Pepe</chakra.span>
            </Text>
          </Flex>
        </GridItem>
        <Spacer></Spacer>
        <GridItem colSpan={2} margin="auto">
          <Menu>
            <MenuButton>
              <Flex>
                <Text color="#357C95" fontSize="13px">
                  Extensions Links
                </Text>
                <Image src={dropDown} ml="3" />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Grid>
                  <Text color="#7F879F" fontSize="12px" alignItems="center">
                    Virtual Terminal
                  </Text>
                </Grid>
              </MenuItem>
              <Divider />
              <MenuItem>
                <Grid>
                  <Text color="#7F879F" fontSize="12px" alignItems="center">
                    Check scan trans.
                  </Text>
                </Grid>
              </MenuItem>
              <Divider />
              <MenuItem>
                <Grid>
                  <Text color="#7F879F" fontSize="12px" alignItems="center">
                    Other (TBD)
                  </Text>
                </Grid>
              </MenuItem>
            </MenuList>
          </Menu>
        </GridItem>
        {showHamburgerButton && (
          <HamburgerIcon
            onClick={() => toggleSidebar()}
            w="20px"
            h="20px"
            color="gray.400"
            ml="10px"
            mt="8px"
          />
        )}
      </Flex>
    </>
  );
};

export default Header;
