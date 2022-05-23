import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import '~/ions/locale/internationalization';
import { primaryTheme } from '~/ions/themes';
import { App } from './App';
import '~/styles/style.css';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={primaryTheme}>
      <CSSReset />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
