import { background } from "@chakra-ui/react";

export const closeIconCSS = {
  position: 'absolute',
  width: '40px',
  height: '40px',
  right: '-20px',
  top: '-20px',
  border: '1px solid #E9EBF3',
  background: '#FFF',
  borderRadius: '50%',
  boxShadow: '0px 4px 20px rgb(6 22 63 / 10%)'
};
export const scrollBarCSS = {
  '&::-webkit-scrollbar': {
    width: '4px'
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#EBEEF5'
  }
};
export const boxShadowCSS = {
  boxShadow: '0px 2px 40px rgba(6, 22, 63, 0.15)',
  padding: '24px',
  borderRadius: '0.5rem',
  background: '#FFFFFF'
};
