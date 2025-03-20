'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import theme from '../theme';
import Navbar from './Navbar';

export default function ClientLayout({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main>{children}</main>
      </ThemeProvider>
    </Provider>
  );
} 