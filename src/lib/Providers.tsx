'use client';

import React from 'react';
import StyledComponentsRegistry from '@/styles/registry';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
              {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </NextUIProvider>
    </Provider>
  );
};

export default Providers;
