import { FC } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const SvgIcon: FC<IconProps> = ({ children, color = 'gray.400' }) => (
  <Icon viewBox="0 0 20 20" color={color} w="20px" h="20px">
    {children}
  </Icon>
);

export default SvgIcon;
